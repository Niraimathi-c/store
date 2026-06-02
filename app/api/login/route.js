import db from "@/lib/db";

export async function POST(req) {
  const { username, password } = await req.json();

  const users = db.getUsers();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return Response.json({
      success: true,
      message: "Login Successful",
    });
  } else {
    return Response.json({
      success: false,
      message: "Invalid Credentials",
    });
  }
}