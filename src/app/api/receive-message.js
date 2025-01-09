// pages/api/receive-message.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // รับข้อมูลจาก Google Apps Script
      const { message, timestamp } = req.body;
  
      // แสดงข้อความใน Console
      console.log('Received message:', message);
      console.log('Timestamp:', timestamp);
  
      // ส่งข้อความตอบกลับ
      res.status(200).json({
        status: 'success',
        message: 'Message received successfully!',
        receivedData: { message, timestamp },
      });
    } else {
      // หากไม่ได้ใช้ POST
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  