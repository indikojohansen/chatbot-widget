/**
 * API client — sends messages to the backend.
 */

export async function sendMessage(messages, config) {
  if (!config.apiUrl) {
    throw new Error('No API URL configured');
  }

  const body = {
    messages,
  };

  if (config.clientId) {
    body.clientId = config.clientId;
  }

  const res = await fetch(config.apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (res.status === 429) {
    const err = new Error('Rate limited');
    err.type = 'rate_limit';
    throw err;
  }

  if (!res.ok) {
    const err = new Error(`API error: ${res.status}`);
    err.type = 'api_error';
    throw err;
  }

  const data = await res.json();
  return data.content;
}
