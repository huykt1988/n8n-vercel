export default function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({
      msg: "Webhook OK ✅",
      body: req.body,
    });
  }
  res.status(200).json({ msg: "Send a POST request!" });
}


