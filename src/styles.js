/**
 * All widget CSS as a string — injected as a <style> tag.
 * All classes prefixed with cw- to avoid conflicts.
 * Fully isolated from host page styles.
 */
export function getStyles() {
  return `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Root container — fully isolated from page */
#cw-root {
  all: initial;
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  z-index: 99990;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: #0f172a;
}

#cw-root *, #cw-root *::before, #cw-root *::after {
  box-sizing: border-box;
  font-family: inherit;
  line-height: inherit;
  -webkit-font-smoothing: inherit;
}

/* ── Launcher Button ── */
.cw-launcher {
  position: fixed;
  bottom: 24px;
  z-index: 99998;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--cw-primary, #0f172a);
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease, box-shadow 0.2s ease;
  outline: none;
}

.cw-launcher:hover {
  transform: scale(1.1);
  background: var(--cw-primary-hover, #1e293b);
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
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.03);
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
  background: #ffffff;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  border-bottom: 1px solid #e2e8f0;
}

.cw-avatar {
  width: 42px;
  height: 42px;
  min-width: 42px;
  min-height: 42px;
  border-radius: 12px;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 17px;
  color: var(--cw-primary, #0f172a);
  flex-shrink: 0;
  letter-spacing: -0.02em;
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
  font-weight: 600;
  font-size: 16px;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.cw-header-status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 3px;
}

.cw-header-status span {
  font-size: 13px;
  font-weight: 400;
  color: #64748b;
}

.cw-online-dot {
  width: 8px;
  height: 8px;
  background: #34d399;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 0 2px rgba(52, 211, 153, 0.3);
}

.cw-close {
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  transition: background 0.15s, color 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  outline: none;
}

.cw-close:hover {
  background: #f1f5f9;
  color: #1e293b;
}

.cw-close svg { width: 18px; height: 18px; fill: currentColor; }

/* ── Messages ── */
.cw-messages {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f8fafc;
}

.cw-messages::-webkit-scrollbar {
  width: 4px;
}

.cw-messages::-webkit-scrollbar-track {
  background: transparent;
}

.cw-messages::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.cw-msg {
  max-width: 85%;
  padding: 12px 16px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 1.55;
  animation: cw-msg-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes cw-msg-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.cw-msg--bot {
  align-self: flex-start;
  background: #ffffff;
  color: #1e293b;
  border-radius: 4px 18px 18px 18px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}

.cw-msg--user {
  align-self: flex-end;
  background: var(--cw-primary, #0f172a);
  color: #ffffff;
  border-radius: 18px 18px 4px 18px;
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
}

/* ── Typing Indicator ── */
.cw-typing {
  align-self: flex-start;
  padding: 14px 18px;
  background: #ffffff;
  border-radius: 4px 18px 18px 18px;
  display: flex;
  gap: 5px;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  animation: cw-msg-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.cw-typing-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #94a3b8;
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
  padding: 16px 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-shrink: 0;
  background: #ffffff;
  border-top: 1px solid #f1f5f9;
}

.cw-input {
  flex: 1;
  min-width: 0;
  border: 1.5px solid #e2e8f0;
  border-radius: 24px;
  padding: 14px 20px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: none;
  color: #1e293b;
  background: #f8fafc;
  line-height: 1.4;
}

.cw-input::placeholder {
  color: #94a3b8;
}

.cw-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
  background: #ffffff;
}

.cw-send {
  width: 42px;
  height: 42px;
  min-width: 42px;
  min-height: 42px;
  border-radius: 50%;
  background: var(--cw-primary, #0f172a);
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s, opacity 0.15s, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  outline: none;
}

.cw-send:hover {
  background: var(--cw-primary-hover, #1e293b);
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
  color: #94a3b8;
  background: #ffffff;
  flex-shrink: 0;
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

  .cw-messages {
    padding: 20px 16px;
  }

  .cw-input-area {
    padding: 14px 16px;
    padding-bottom: max(14px, env(safe-area-inset-bottom));
  }
}
`;
}
