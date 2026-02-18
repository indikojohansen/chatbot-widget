/**
 * All widget CSS as a string — injected as a <style> tag.
 * All classes prefixed with cw- to avoid conflicts.
 */
export function getStyles() {
  return `
#cw-root {
  --cw-primary: #0f172a;
  --cw-primary-hover: #1e293b;
  --cw-bg: #ffffff;
  --cw-bg-secondary: #f1f5f9;
  --cw-text: #0f172a;
  --cw-text-light: #64748b;
  --cw-border: #e2e8f0;
  --cw-radius: 12px;
  --cw-shadow: 0 8px 32px rgba(0,0,0,0.12);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  box-sizing: border-box;
}

#cw-root *, #cw-root *::before, #cw-root *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.cw-launcher {
  position: fixed;
  bottom: 20px;
  z-index: 99998;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--cw-primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  transition: transform 0.2s, background 0.2s;
}

.cw-launcher:hover {
  transform: scale(1.08);
  background: var(--cw-primary-hover);
}

.cw-launcher--right { right: 20px; }
.cw-launcher--left { left: 20px; }

.cw-launcher svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.cw-window {
  position: fixed;
  bottom: 88px;
  z-index: 99999;
  width: 380px;
  max-width: calc(100vw - 32px);
  height: 520px;
  max-height: calc(100vh - 120px);
  background: var(--cw-bg);
  border-radius: var(--cw-radius);
  box-shadow: var(--cw-shadow);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transform: translateY(16px) scale(0.95);
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.cw-window--open {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.cw-window--right { right: 20px; }
.cw-window--left { left: 20px; }

.cw-header {
  background: var(--cw-primary);
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.cw-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
}

.cw-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.cw-header-info {
  flex: 1;
  min-width: 0;
}

.cw-header-name {
  font-weight: 600;
  font-size: 15px;
}

.cw-header-status {
  font-size: 12px;
  opacity: 0.8;
}

.cw-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  opacity: 0.8;
  transition: opacity 0.15s;
}

.cw-close:hover { opacity: 1; }
.cw-close svg { width: 18px; height: 18px; fill: currentColor; }

.cw-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cw-msg {
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 16px;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.cw-msg--bot {
  align-self: flex-start;
  background: var(--cw-bg-secondary);
  color: var(--cw-text);
  border-bottom-left-radius: 4px;
}

.cw-msg--user {
  align-self: flex-end;
  background: var(--cw-primary);
  color: white;
  border-bottom-right-radius: 4px;
}

.cw-msg--error {
  align-self: center;
  background: #fef2f2;
  color: #991b1b;
  border-radius: 8px;
  font-size: 13px;
  text-align: center;
}

.cw-msg--error a {
  color: #991b1b;
  font-weight: 600;
}

.cw-typing {
  align-self: flex-start;
  padding: 10px 14px;
  background: var(--cw-bg-secondary);
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
}

.cw-typing-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--cw-text-light);
  animation: cw-bounce 1.2s infinite;
}

.cw-typing-dot:nth-child(2) { animation-delay: 0.2s; }
.cw-typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes cw-bounce {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-4px); }
}

.cw-input-area {
  padding: 12px 16px;
  border-top: 1px solid var(--cw-border);
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.cw-input {
  flex: 1;
  border: 1px solid var(--cw-border);
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
  resize: none;
}

.cw-input:focus {
  border-color: var(--cw-primary);
}

.cw-send {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--cw-primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s, opacity 0.15s;
}

.cw-send:hover { background: var(--cw-primary-hover); }
.cw-send:disabled { opacity: 0.5; cursor: default; }
.cw-send svg { width: 16px; height: 16px; fill: currentColor; }

.cw-powered {
  text-align: center;
  padding: 6px;
  font-size: 11px;
  color: var(--cw-text-light);
  border-top: 1px solid var(--cw-border);
  flex-shrink: 0;
}

@media (max-width: 440px) {
  .cw-window {
    width: calc(100vw - 16px);
    height: calc(100vh - 100px);
    bottom: 80px;
    right: 8px !important;
    left: 8px !important;
    border-radius: 16px;
  }
}
`;
}
