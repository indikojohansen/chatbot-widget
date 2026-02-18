/**
 * All widget CSS as a string — injected as a <style> tag.
 * All classes prefixed with cw- to avoid conflicts.
 * Premium, modern design with proper spacing and visual hierarchy.
 */
export function getStyles() {
  return `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

#cw-root {
  --cw-primary: #0f172a;
  --cw-primary-hover: #1e293b;
  --cw-primary-light: rgba(15, 23, 42, 0.06);
  --cw-accent: #3b82f6;
  --cw-bg: #ffffff;
  --cw-bg-chat: #f1f5f9;
  --cw-text: #0f172a;
  --cw-text-light: #64748b;
  --cw-text-muted: #94a3b8;
  --cw-border: #e2e8f0;
  --cw-border-light: #f1f5f9;
  --cw-radius: 20px;
  --cw-shadow: 0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.03);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

#cw-root *, #cw-root *::before, #cw-root *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ── Launcher Button ── */
.cw-launcher {
  position: fixed;
  bottom: 24px;
  z-index: 99998;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--cw-primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease, box-shadow 0.2s ease;
}

.cw-launcher:hover {
  transform: scale(1.1);
  background: var(--cw-primary-hover);
  box-shadow: 0 12px 32px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.12);
}

.cw-launcher:active {
  transform: scale(0.95);
}

.cw-launcher--right { right: 24px; }
.cw-launcher--left { left: 24px; }

.cw-launcher svg {
  width: 28px;
  height: 28px;
  fill: currentColor;
  transition: transform 0.3s ease;
}

/* ── Chat Window ── */
.cw-window {
  position: fixed;
  bottom: 104px;
  z-index: 99999;
  width: 420px;
  max-width: calc(100vw - 32px);
  height: 600px;
  max-height: calc(100vh - 130px);
  background: var(--cw-bg);
  border-radius: var(--cw-radius);
  box-shadow: var(--cw-shadow);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transform: translateY(16px) scale(0.96);
  pointer-events: none;
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.cw-window--open {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.cw-window--right { right: 24px; }
.cw-window--left { left: 24px; }

/* ── Header ── */
.cw-header {
  background: var(--cw-primary);
  color: white;
  padding: 24px 24px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  position: relative;
}

.cw-header::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  height: 12px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.04), transparent);
  pointer-events: none;
  z-index: 1;
}

.cw-avatar {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: white;
  flex-shrink: 0;
}

.cw-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
}

.cw-header-info {
  flex: 1;
  min-width: 0;
}

.cw-header-name {
  font-weight: 700;
  font-size: 16px;
  color: white;
  letter-spacing: -0.01em;
}

.cw-header-status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 3px;
}

.cw-header-status span {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
}

.cw-online-dot {
  width: 8px;
  height: 8px;
  background: #34d399;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 0 2px rgba(52, 211, 153, 0.3);
  animation: cw-pulse-dot 2s ease-in-out infinite;
}

@keyframes cw-pulse-dot {
  0%, 100% { box-shadow: 0 0 0 2px rgba(52, 211, 153, 0.3); }
  50% { box-shadow: 0 0 0 5px rgba(52, 211, 153, 0.1); }
}

.cw-close {
  background: rgba(255,255,255,0.1);
  border: none;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  transition: background 0.15s, color 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cw-close:hover {
  background: rgba(255,255,255,0.2);
  color: white;
}

.cw-close svg { width: 18px; height: 18px; fill: currentColor; }

/* ── Messages ── */
.cw-messages {
  flex: 1;
  overflow-y: auto;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--cw-bg-chat);
}

.cw-messages::-webkit-scrollbar {
  width: 4px;
}

.cw-messages::-webkit-scrollbar-track {
  background: transparent;
}

.cw-messages::-webkit-scrollbar-thumb {
  background: var(--cw-border);
  border-radius: 10px;
}

.cw-msg {
  max-width: 80%;
  padding: 14px 18px;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 1.6;
  animation: cw-msg-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes cw-msg-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.cw-msg--bot {
  align-self: flex-start;
  background: var(--cw-bg);
  color: var(--cw-text);
  border-radius: 4px 20px 20px 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02);
}

.cw-msg--user {
  align-self: flex-end;
  background: var(--cw-primary);
  color: white;
  border-radius: 20px 20px 4px 20px;
}

.cw-msg--error {
  align-self: center;
  background: #fef2f2;
  color: #991b1b;
  border-radius: 14px;
  font-size: 13px;
  text-align: center;
  padding: 14px 20px;
  border: 1px solid #fecaca;
  max-width: 90%;
}

.cw-msg--error a {
  color: #991b1b;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* ── Typing Indicator ── */
.cw-typing {
  align-self: flex-start;
  padding: 16px 20px;
  background: var(--cw-bg);
  border-radius: 4px 20px 20px 20px;
  display: flex;
  gap: 5px;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02);
  animation: cw-msg-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.cw-typing-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--cw-text-muted);
  animation: cw-bounce 1.2s infinite;
}

.cw-typing-dot:nth-child(2) { animation-delay: 0.2s; }
.cw-typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes cw-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-6px); opacity: 1; }
}

/* ── Input Area ── */
.cw-input-area {
  padding: 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-shrink: 0;
  background: var(--cw-bg);
  border-top: 1px solid var(--cw-border-light);
}

.cw-input {
  flex: 1;
  border: 1.5px solid var(--cw-border);
  border-radius: 28px;
  padding: 12px 20px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: none;
  color: var(--cw-text);
  background: var(--cw-bg-chat);
}

.cw-input::placeholder {
  color: var(--cw-text-muted);
}

.cw-input:focus {
  border-color: var(--cw-accent);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  background: var(--cw-bg);
}

.cw-send {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--cw-primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s, opacity 0.15s, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cw-send:hover {
  background: var(--cw-primary-hover);
  transform: scale(1.08);
}

.cw-send:active {
  transform: scale(0.95);
}

.cw-send:disabled { opacity: 0.3; cursor: default; transform: none; }
.cw-send svg { width: 18px; height: 18px; fill: currentColor; }

/* ── Powered By ── */
.cw-powered {
  text-align: center;
  padding: 10px;
  font-size: 11px;
  font-weight: 500;
  color: var(--cw-text-muted);
  background: var(--cw-bg);
  flex-shrink: 0;
  letter-spacing: 0.01em;
}

/* ── Mobile ── */
@media (max-width: 480px) {
  .cw-window {
    width: 100vw;
    height: calc(100vh - 80px);
    bottom: 0;
    right: 0 !important;
    left: 0 !important;
    border-radius: 20px 20px 0 0;
    max-width: 100vw;
    max-height: calc(100vh - 80px);
  }

  .cw-header {
    padding: 20px 20px 18px;
    border-radius: 20px 20px 0 0;
  }

  .cw-messages {
    padding: 20px 16px;
  }

  .cw-input-area {
    padding: 16px;
    padding-bottom: max(16px, env(safe-area-inset-bottom));
  }
}
`;
}
