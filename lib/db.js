const fs = require("fs");
const path = require("path");

const dbPath = path.resolve(process.cwd(), "users.json");

// Helper to initialize database with default credentials
function initDb() {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(
      dbPath,
      JSON.stringify([{ id: 1, username: "nirai", password: "nirai@123" }], null, 2)
    );
  }
}

initDb();

const db = {
  getUsers: () => {
    try {
      initDb();
      const data = fs.readFileSync(dbPath, "utf8");
      return JSON.parse(data);
    } catch (e) {
      return [{ id: 1, username: "nirai", password: "nirai@123" }];
    }
  },
  saveUsers: (users) => {
    try {
      fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
      return true;
    } catch (e) {
      return false;
    }
  }
};

module.exports = db;