import sqlite3 from "sqlite3";

export async function POST(req) {

  const {
    username,
    password
  } = await req.json();

  return new Promise((resolve)=>{

    const db =
      new sqlite3.Database(
        "./users.db"
      );

    db.get(

      `
      SELECT *
      FROM users
      WHERE username=?
      AND password=?
      `,

      [username,password],

      (err,row)=>{

        if(row){

          resolve(
            Response.json({
              success:true,
              message:
                "Login Successful"
            })
          );

        }
        else{

          resolve(
            Response.json({
              success:false,
              message:
                "Invalid Credentials"
            })
          );

        }

        db.close();

      }
    );

  });

}