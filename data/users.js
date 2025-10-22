const users = [
  { id: 1, name: 'Rishi Tiwari', email: 'rishi@example.com' },
  { id: 2, name: 'Gaurav Bajpaye', email: 'gaurav@example.com' }
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

module.exports = {
  getAllUsers,
  getUserById
};


