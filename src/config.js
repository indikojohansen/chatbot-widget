/**
 * Parse configuration from data-* attributes on the <script> tag.
 */
export function getConfig() {
  const script = document.currentScript || document.querySelector('script[data-api-url]');

  if (!script) {
    console.error('[ChatWidget] Could not find widget script tag.');
    return null;
  }

  return Object.freeze({
    apiUrl: script.getAttribute('data-api-url') || '',
    clientId: script.getAttribute('data-client-id') || '',
    primaryColor: script.getAttribute('data-primary-color') || '#0f172a',
    greeting: script.getAttribute('data-greeting') || 'Hi! How can I help you today?',
    botName: script.getAttribute('data-bot-name') || 'Assistant',
    botAvatar: script.getAttribute('data-bot-avatar') || '',
    fallbackPhone: script.getAttribute('data-fallback-phone') || '',
    fallbackEmail: script.getAttribute('data-fallback-email') || '',
    historyMode: script.getAttribute('data-history') || 'session',
    maxHistory: parseInt(script.getAttribute('data-max-history') || '10', 10),
    position: script.getAttribute('data-position') || 'right',
    closeOnOutsideClick: script.getAttribute('data-close-outside') === 'true',
  });
}
