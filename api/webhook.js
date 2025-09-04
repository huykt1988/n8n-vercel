export default (req, res) => res.json({msg:"Hello n8n 🤙"})
{
  "name": "n8n-webhook-test",
  "version": "1.0.0",
  "scripts": {
    "start": "node api/webhook.js",
    "vercel-build": "echo 'Skipping build step'"
  }
}
