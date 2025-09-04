import { start } from "n8n/dist/command/start";

export default async function handler(req, res) {
  // Fake argv để n8n khởi động
  process.argv = ["node", "n8n", "start"];

  try {
    await start(); // khởi động n8n
    res.status(200).json({ msg: "n8n started 🚀" });
  } catch (e) {
    console.error("Error starting n8n", e);
    res.status(500).json({ error: e.message });
  }
}
