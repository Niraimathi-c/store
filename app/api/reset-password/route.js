import sqlite3 from "sqlite3";

export async function POST(req) {
  const { username, newPassword } = await req.json();

  return new Promise((resolve) => {
    const db = new sqlite3.Database("./users.db");

    // Check if the user exists
    db.get(
      "SELECT id FROM users WHERE username = ?",
      [username],
      (err, row) => {
        if (err) {
          resolve(
            Response.json({
              success: false,
              message: "Database error occurred",
            })
          );
          db.close();
          return;
        }

        if (!row) {
          resolve(
            Response.json({
              success: false,
              message: "Username not found",
            })
          );
          db.close();
          return;
        }

        // Update the password
        db.run(
          "UPDATE users SET password = ? WHERE username = ?",
          [newPassword, username],
          (updateErr) => {
            if (updateErr) {
              resolve(
                Response.json({
                  success: false,
                  message: "Failed to update password",
                })
              );
            } else {
              resolve(
                Response.json({
                  success: true,
                  message: "Password updated successfully!",
                })
              );
            }
            db.close();
          }
        );
      }
    );
  });
}
