# API Testing Project

Simple Express.js API server.

## File Structure
```
api-testing/
├── package.json          # Dependencies & scripts
├── server.js             # Express API server
└── README.md             # This file
```

## Quick Start
```bash
npm install
npm start          # Run server (port 3000)
```

## API Endpoints
- `GET /api/users` - Returns all users
- `GET /api/users/admin` - Returns all admin users
- `GET /api/users/:id` - Returns specific user by ID
- `GET /api/health` - Health check
