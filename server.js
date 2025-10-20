const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Simple GET API endpoint
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Rishi Tiwari', email: 'rishi@example.com' },
    { id: 2, name: 'Gaurav Bajpaye', email: 'gaurav@example.com' }
  ];
  res.json({ success: true, data: users });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
