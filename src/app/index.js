'use client';
// pages/index.js
// pages/index.js
import { useState } from 'react';

// ฟังก์ชันที่รับข้อมูลจาก Google Apps Script
const sendDataToNextJS = async (message) => {
  const response = await fetch('/api/receive-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, timestamp: new Date().toISOString() }),
  });

  const data = await response.json();
  console.log('Response from API:', data);
};

const Home = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // ส่งข้อความไปยัง API route
    sendDataToNextJS(message);
  };

  return (
    <div>
      <h1>Send Message to API</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={handleSubmit}>Send Message</button>
    </div>
  );
};

// API route ที่รับ POST request
export async function getServerSideProps() {
  const handler = async (req, res) => {
    if (req.method === 'POST') {
      const { message, timestamp } = req.body;
      console.log("Received message:", message);
      console.log("Timestamp:", timestamp);
      
      // ส่ง response กลับไป
      return res.status(200).json({ success: true, message: 'Message received successfully' });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  };

  return {
    props: {}, // Return props if needed
  };
}

export default Home;
