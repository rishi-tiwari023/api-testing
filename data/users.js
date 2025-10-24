const users = [
  { id: 1, name: 'Rishi Tiwari', email: 'rishi@example.com', role: 'admin' },
  { id: 2, name: 'Gaurav Bajpaye', email: 'gaurav@example.com', role: 'user' },
  { id: 3, name: 'Priyanshu Sharma', email: 'priyanshu.sharma@gmail.com', role: 'user' },
  { id: 4, name: 'Arjun Patel', email: 'arjun.patel@yahoo.com', role: 'user' },
  { id: 5, name: 'Karan Maheshwari', email: 'karan.maheshwari@outlook.com', role: 'user' }
];

function getAllUsers() {
  return users;
}

function getUserById(userId) {
  const numericId = Number(userId);
  if (Number.isNaN(numericId)) {
    return null;
  }
  return users.find(u => u.id === numericId) || null;
}

function getAdmin() {
  return users.filter(u => u.role === 'admin');
}

module.exports = {
  getAllUsers,
  getUserById,
  getAdmin
};


