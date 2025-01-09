export default function handler(req, res) {
  if (req.method === 'POST') {
      // รับข้อมูลจาก Google Apps Script
      const { message, timestamp } = req.body;

      // ตรวจสอบว่า message และ timestamp มาถึงหรือไม่
      if (!message || !timestamp) {
          return res.status(400).json({ error: 'Missing message or timestamp' });
      }

      console.log("Received message:", message);
      console.log("Timestamp:", timestamp);

      // ส่ง response กลับไป
      res.status(200).json({ success: true, message: 'Message received successfully' });
  } else {
      // ถ้าไม่ใช่ POST ให้ส่ง error 405
      res.status(405).json({ error: 'Method Not Allowed' });
  }
}
