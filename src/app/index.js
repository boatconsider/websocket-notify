'use client';
// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [timestamp, setTimestamp] = useState('');

  // ฟังก์ชั่นเพื่อดึงข้อมูลจาก API
  const fetchMessage = async () => {
    const res = await fetch('/api/receive-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello from Google Apps Script!',
        timestamp: new Date().toISOString(),
      }),
    });

    const data = await res.json();
    setMessage(data.receivedData.message);
    setTimestamp(data.receivedData.timestamp);
  };

  return (
    <div>
      <h1>Next.js Frontend</h1>
      <button onClick={fetchMessage}>Get Message</button>
      <div>
        <h2>Received Message:</h2>
        <p>{message}</p>
        <h2>Timestamp:</h2>
        <p>{timestamp}</p>
      </div>
    </div>
  );
}
