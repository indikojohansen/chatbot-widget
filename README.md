# Chatbot Widget

Embeddable chatbot UI — vanilla JavaScript, zero dependencies, single `<script>` tag.

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
