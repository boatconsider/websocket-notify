// server.js (Node.js WebSocket server)

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());

// Endpoint สำหรับรับ HTTP request จาก Google Apps Script
app.post('/send-message', (req, res) => {
  const message = req.body.message;
  console.log('Received message: ', message);
  
  // ส่งข้อความผ่าน WebSocket ไปยังทุก client ที่เชื่อมต่อ
  io.emit('message', message);
  
  res.status(200).send('Message sent to WebSocket clients');
});

// ตั้งค่า WebSocket listener
io.on('connection', (socket) => {
  console.log('A client connected');
  
  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
