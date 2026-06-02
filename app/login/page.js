"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {

  const [username,setUsername] =
    useState("");

  const [password,setPassword] =
    useState("");

  const [message,setMessage] =
    useState("");

  async function handleLogin() {

    const response =
      await fetch("/api/login", {

      method: "POST",

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify({
        username,
        password
      })

    });

    const data =
      await response.json();

    setMessage(data.message);
  }

  return (

    <div
      className="container mt-5"
      style={{maxWidth:"400px"}}
    >

      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        className="form-control mb-3"
        onChange={(e)=>
          setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="form-control mb-3"
        onChange={(e)=>
          setPassword(e.target.value)}
      />

      <button
        className="btn btn-success"
        onClick={handleLogin}
      >
        Login
      </button>

      <div className="mt-3">
        <Link href="/forgot-password" style={{ fontSize: "14px", textDecoration: "none" }}>
          Forgot Password?
        </Link>
      </div>

      <p className="mt-3">
        {message}
      </p>

    </div>

  );
}