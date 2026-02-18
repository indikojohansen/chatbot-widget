# Chatbot Widget

Embeddable chatbot UI — vanilla JavaScript, zero dependencies, single `<script>` tag.

Works with the [chatbot-backend](https://github.com/indikojohansen/chatbot-backend) (Cloudflare Worker or Netlify Function).

## Quick Start

Add one script tag to any website:

```html
<script
  src="https://cdn.jsdelivr.net/gh/indikojohansen/chatbot-widget@main/dist/widget.min.js"
  data-api-url="https://your-backend-url/.netlify/functions/chat"
  data-primary-color="#0f172a"
  data-greeting="Hi! How can I help you today?"
  data-bot-name="Aria"
  data-fallback-phone="(555) 123-4567"
  data-fallback-email="hello@yourdomain.com"
></script>
```

That's it. No npm install, no build step, no framework required.

## Configuration

All options are set via `data-*` attributes on the script tag:

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data-api-url` | *(required)* | Backend endpoint URL |
| `data-client-id` | `""` | Client ID (for managed multi-tenant backend) |
| `data-primary-color` | `#0f172a` | Brand color (hex) |
| `data-greeting` | `Hi! How can I help you today?` | Initial greeting message |
| `data-bot-name` | `Assistant` | Bot display name in header |
| `data-bot-avatar` | *(none)* | URL to avatar image |
| `data-fallback-phone` | *(none)* | Phone number shown on errors |
| `data-fallback-email` | *(none)* | Email shown on errors |
| `data-history` | `session` | `session` (in-memory) or `persist` (localStorage) |
| `data-max-history` | `10` | Max messages sent with each request |
| `data-position` | `right` | `right` or `left` launcher position |

## Features

- 💬 Floating chat button with open/close animation
- 🎨 Customizable brand color, bot name, and avatar
- 📱 Fully responsive (mobile-friendly)
- ⚡ Zero dependencies, ~8KB minified
- 🔒 No secrets in client code — widget sends to your backend
- 💾 Optional conversation persistence (localStorage)
- ⚠️ Fallback UI with phone/email when API is unreachable
- ♿ Accessible (ARIA labels, keyboard navigation)

## Development

```bash
# Install dev dependencies (esbuild only)
npm install

# Build dist/widget.min.js
npm run build

# Watch mode (rebuilds on change)
npm run dev
```

Open `demo/index.html` in a browser to test. Update `data-api-url` to point to a running backend.

## How It Works

1. Script finds its own `<script>` tag via `document.currentScript`
2. Reads all `data-*` config attributes
3. Injects scoped CSS (`cw-` prefixed classes)
4. Mounts a floating chat button and window to `<body>`
5. On send: POSTs conversation history to your backend
6. Displays the response (or fallback error message)

No iframes, no shadow DOM, no global namespace pollution.

## Backend Setup

See [chatbot-backend](https://github.com/indikojohansen/chatbot-backend) for deployment options:

- **Self-hosted (Netlify Function):** You own the API key and deploy
- **Managed (Cloudflare Worker):** Multi-tenant, we handle infrastructure

## License

MIT
