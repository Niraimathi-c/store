import db from "@/lib/db";

export async function POST(req) {
  const { username, newPassword } = await req.json();

  const users = db.getUsers();
  const userIndex = users.findIndex((u) => u.username === username);

  if (userIndex === -1) {
    return Response.json({
      success: false,
      message: "Username not found",
    });
  }

  users[userIndex].password = newPassword;
  db.saveUsers(users);

  return Response.json({
    success: true,
    message: "Password updated successfully!",
  });
}
