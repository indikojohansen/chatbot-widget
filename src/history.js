/**
 * Conversation history manager.
 * Supports in-memory (session) and localStorage (persist) modes.
 */

const STORAGE_PREFIX = 'cw_history_';

export function createHistory(config) {
  const storageKey = STORAGE_PREFIX + (config.clientId || 'default');
  let messages = [];

  // Load from localStorage if persist mode
  if (config.historyMode === 'persist') {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) messages = JSON.parse(stored);
    } catch { /* ignore */ }
  }

  function save() {
    if (config.historyMode === 'persist') {
      try {
        localStorage.setItem(storageKey, JSON.stringify(messages));
      } catch { /* quota exceeded, ignore */ }
    }
  }

  return {
    getMessages() {
      return messages.slice(-config.maxHistory);
    },

    addUser(content) {
      messages.push({ role: 'user', content });
      save();
    },

    addAssistant(content) {
      messages.push({ role: 'assistant', content });
      save();
    },

    clear() {
      messages = [];
      if (config.historyMode === 'persist') {
        try { localStorage.removeItem(storageKey); } catch { /* ignore */ }
      }
    },
  };
}
