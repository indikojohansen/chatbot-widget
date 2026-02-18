/**
 * All widget CSS as a string — injected as a <style> tag.
 * All classes prefixed with cw- to avoid conflicts.
 * Design inspired by the Sunrise Dental AI bot shell.
 */
export function getStyles() {
  return `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

#cw-root {
  --cw-primary: #0f172a;
  --cw-primary-hover: #1e293b;
  --cw-bg: #ffffff;
  --cw-bg-secondary: #f8fafb;
  --cw-text: #0f172a;
  --cw-text-light: #64748b;
  --cw-text-muted: #94a3b8;
  --cw-border: #e2e8f0;
  --cw-radius: 16px;
  --cw-shadow: 0 12px 48px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08);
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--cw-primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.cw-launcher:hover {
  transform: scale(1.08);
  background: var(--cw-primary-hover);
  box-shadow: 0 8px 28px rgba(0,0,0,0.3);
}

.cw-launcher--right { right: 24px; }
.cw-launcher--left { left: 24px; }

.cw-launcher svg {
  width: 26px;
  height: 26px;
  fill: currentColor;
}

/* ── Chat Window ── */
.cw-window {
  position: fixed;
  bottom: 100px;
  z-index: 99999;
  width: 400px;
  max-width: calc(100vw - 32px);
  height: 560px;
  max-height: calc(100vh - 130px);
  background: var(--cw-bg);
  border-radius: var(--cw-radius);
  box-shadow: var(--cw-shadow);
  border: 1px solid var(--cw-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
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
  background: var(--cw-bg);
  color: var(--cw-text);
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--cw-border);
}

.cw-avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--cw-primary) 0%, var(--cw-primary-hover) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 15px;
  color: white;
  flex-shrink: 0;
}

.cw-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.cw-header-info {
  flex: 1;
  min-width: 0;
}

.cw-header-name {
  font-weight: 700;
  font-size: 15px;
  color: var(--cw-text);
}

.cw-header-status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
}

.cw-header-status span {
  font-size: 12px;
  font-weight: 500;
  color: var(--cw-text-muted);
}

.cw-online-dot {
  width: 7px;
  height: 7px;
  background: #10b981;
  border-radius: 50%;
  flex-shrink: 0;
}

.cw-close {
  background: none;
  border: none;
  color: var(--cw-text-muted);
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
  transition: background 0.15s, color 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cw-close:hover {
  background: var(--cw-bg-secondary);
  color: var(--cw-text);
}

.cw-close svg { width: 20px; height: 20px; fill: currentColor; }

/* ── Messages ── */
.cw-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--cw-bg-secondary);
}

.cw-messages::-webkit-scrollbar {
  width: 5px;
}

.cw-messages::-webkit-scrollbar-track {
  background: transparent;
}

.cw-messages::-webkit-scrollbar-thumb {
  background: var(--cw-border);
  border-radius: 10px;
}

.cw-msg {
  max-width: 82%;
  padding: 12px 16px;
  border-radius: 18px;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 1.55;
}

.cw-msg--bot {
  align-self: flex-start;
  background: var(--cw-bg);
  color: var(--cw-text);
  border-bottom-left-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}

.cw-msg--user {
  align-self: flex-end;
  background: var(--cw-primary);
  color: white;
  border-bottom-right-radius: 6px;
}

.cw-msg--error {
  align-self: center;
  background: #fef2f2;
  color: #991b1b;
  border-radius: 12px;
  font-size: 13px;
  text-align: center;
  padding: 12px 18px;
  border: 1px solid #fecaca;
}

.cw-msg--error a {
  color: #991b1b;
  font-weight: 600;
}

/* ── Typing Indicator ── */
.cw-typing {
  align-self: flex-start;
  padding: 14px 18px;
  background: var(--cw-bg);
  border-radius: 18px;
  border-bottom-left-radius: 6px;
  display: flex;
  gap: 5px;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
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
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-5px); }
}

/* ── Input Area ── */
.cw-input-area {
  padding: 16px 20px;
  border-top: 1px solid var(--cw-border);
  display: flex;
  gap: 10px;
  align-items: center;
  flex-shrink: 0;
  background: var(--cw-bg);
}

.cw-input {
  flex: 1;
  border: 1.5px solid var(--cw-border);
  border-radius: 24px;
  padding: 11px 18px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: none;
  color: var(--cw-text);
  background: var(--cw-bg);
}

.cw-input::placeholder {
  color: var(--cw-text-muted);
}

.cw-input:focus {
  border-color: var(--cw-primary);
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.08);
}

.cw-send {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--cw-primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s, opacity 0.15s, transform 0.15s;
}

.cw-send:hover {
  background: var(--cw-primary-hover);
  transform: scale(1.05);
}

.cw-send:disabled { opacity: 0.4; cursor: default; transform: none; }
.cw-send svg { width: 17px; height: 17px; fill: currentColor; }

/* ── Powered By ── */
.cw-powered {
  text-align: center;
  padding: 8px;
  font-size: 11px;
  font-weight: 500;
  color: var(--cw-text-muted);
  background: var(--cw-bg);
  flex-shrink: 0;
}

/* ── Mobile ── */
@media (max-width: 480px) {
  .cw-window {
    width: calc(100vw - 16px);
    height: calc(100vh - 100px);
    bottom: 84px;
    right: 8px !important;
    left: 8px !important;
    border-radius: 20px;
  }

  .cw-messages {
    padding: 16px;
  }

  .cw-header {
    padding: 16px;
  }

  .cw-input-area {
    padding: 14px 16px;
  }
}
`;
}
