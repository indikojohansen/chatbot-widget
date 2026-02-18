/**
 * Chatbot Widget — Entry Point
 * Vanilla JS, zero dependencies, single script tag embed.
 */

import { getConfig } from './config.js';
import { createHistory } from './history.js';
import { sendMessage } from './api.js';
import { getStyles } from './styles.js';

(function () {
  const config = getConfig();
  if (!config) return;

  const history = createHistory(config);
  let isOpen = false;
  let isLoading = false;

  // --- Inject styles ---
  const style = document.createElement('style');
  style.textContent = getStyles();

  // --- Root container ---
  const root = document.createElement('div');
  root.id = 'cw-root';
  root.style.setProperty('--cw-primary', config.primaryColor);

  // Derive a hover color (slightly lighter)
  root.style.setProperty('--cw-primary-hover', config.primaryColor + 'cc');

  // --- SVG Icons ---
  const chatIcon = `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`;
  const closeIcon = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
  const sendIcon = `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`;

  // --- Launcher button ---
  const launcher = document.createElement('button');
  launcher.className = `cw-launcher cw-launcher--${config.position}`;
  launcher.innerHTML = chatIcon;
  launcher.setAttribute('aria-label', 'Open chat');

  // --- Chat window ---
  const win = document.createElement('div');
  win.className = `cw-window cw-window--${config.position}`;

  // Header
  const header = document.createElement('div');
  header.className = 'cw-header';

  const avatar = document.createElement('div');
  avatar.className = 'cw-avatar';
  if (config.botAvatar) {
    avatar.innerHTML = `<img src="${escapeAttr(config.botAvatar)}" alt="${escapeAttr(config.botName)}">`;
  } else {
    avatar.textContent = config.botName.charAt(0).toUpperCase();
  }

  const headerInfo = document.createElement('div');
  headerInfo.className = 'cw-header-info';
  headerInfo.innerHTML = `<div class="cw-header-name">${escapeHtml(config.botName)}</div><div class="cw-header-status"><div class="cw-online-dot"></div><span>Online</span></div>`;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'cw-close';
  closeBtn.innerHTML = closeIcon;
  closeBtn.setAttribute('aria-label', 'Close chat');

  header.append(avatar, headerInfo, closeBtn);

  // Messages area
  const messagesEl = document.createElement('div');
  messagesEl.className = 'cw-messages';

  // Input area
  const inputArea = document.createElement('div');
  inputArea.className = 'cw-input-area';

  const input = document.createElement('input');
  input.className = 'cw-input';
  input.type = 'text';
  input.placeholder = 'Type a message...';
  input.setAttribute('aria-label', 'Type a message');

  const sendBtn = document.createElement('button');
  sendBtn.className = 'cw-send';
  sendBtn.innerHTML = sendIcon;
  sendBtn.setAttribute('aria-label', 'Send message');

  inputArea.append(input, sendBtn);

  // Assemble window
  win.append(header, messagesEl, inputArea);

  // Assemble root
  root.append(style, launcher, win);

  // --- Mount ---
  document.body.appendChild(root);

  // --- Add greeting ---
  if (config.greeting) {
    addMessage(config.greeting, 'bot');
  }

  // --- Restore history ---
  const restored = history.getMessages();
  if (restored.length > 0) {
    // Clear greeting if we have history
    messagesEl.innerHTML = '';
    restored.forEach(msg => {
      addMessage(msg.content, msg.role === 'user' ? 'user' : 'bot');
    });
  }

  // --- Event listeners ---
  launcher.addEventListener('click', toggleWindow);
  closeBtn.addEventListener('click', toggleWindow);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  sendBtn.addEventListener('click', handleSend);

  // --- Functions ---
  function toggleWindow() {
    isOpen = !isOpen;
    win.classList.toggle('cw-window--open', isOpen);
    launcher.innerHTML = isOpen ? closeIcon : chatIcon;
    if (isOpen) {
      input.focus();
      scrollToBottom();
    }
  }

  function addMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = `cw-msg cw-msg--${type}`;

    if (type === 'error') {
      msg.innerHTML = text; // error messages may contain HTML links
    } else {
      msg.textContent = text;
    }

    messagesEl.appendChild(msg);
    scrollToBottom();
    return msg;
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'cw-typing';
    el.id = 'cw-typing';
    el.innerHTML = '<div class="cw-typing-dot"></div><div class="cw-typing-dot"></div><div class="cw-typing-dot"></div>';
    messagesEl.appendChild(el);
    scrollToBottom();
  }

  function hideTyping() {
    const el = document.getElementById('cw-typing');
    if (el) el.remove();
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    });
  }

  function buildFallbackMessage() {
    let msg = "I'm having trouble connecting right now.";
    const links = [];
    if (config.fallbackPhone) {
      links.push(`call us at <a href="tel:${escapeAttr(config.fallbackPhone)}">${escapeHtml(config.fallbackPhone)}</a>`);
    }
    if (config.fallbackEmail) {
      links.push(`email <a href="mailto:${escapeAttr(config.fallbackEmail)}">${escapeHtml(config.fallbackEmail)}</a>`);
    }
    if (links.length > 0) {
      msg += ' Please ' + links.join(' or ') + '.';
    } else {
      msg += ' Please try again later.';
    }
    return msg;
  }

  async function handleSend() {
    const text = input.value.trim();
    if (!text || isLoading) return;

    input.value = '';
    addMessage(text, 'user');
    history.addUser(text);

    isLoading = true;
    sendBtn.disabled = true;
    showTyping();

    try {
      const response = await sendMessage(history.getMessages(), config);
      hideTyping();
      addMessage(response, 'bot');
      history.addAssistant(response);
    } catch (err) {
      hideTyping();
      if (err.type === 'rate_limit') {
        addMessage('Please wait a moment before sending another message.', 'error');
      } else {
        addMessage(buildFallbackMessage(), 'error');
      }
    } finally {
      isLoading = false;
      sendBtn.disabled = false;
      input.focus();
    }
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function escapeAttr(str) {
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
})();
