// pages/api/receive-message.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // รับข้อมูลที่ส่งมาจาก Google Apps Script
      const { message, timestamp } = req.body;
      console.log('Received message:', message);
      console.log('Timestamp:', timestamp);
  
      // ส่ง response กลับไปที่ Google Apps Script
      return res.status(200).json({ success: true, message: 'Message received successfully' });
    } else {
      // ถ้าไม่ได้รับ POST request ให้ส่ง error 405
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  