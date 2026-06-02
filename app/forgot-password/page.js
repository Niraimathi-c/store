"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleResetPassword() {
    if (!username || !newPassword || !confirmPassword) {
      setMessage("Please fill in all fields.");
      setIsSuccess(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      setIsSuccess(false);
      return;
    }

    const response = await fetch("/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        newPassword,
      }),
    });

    const data = await response.json();
    setMessage(data.message);
    setIsSuccess(data.success);
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Reset Password</h2>
      <p className="text-muted">Enter your username and a new password below.</p>

      <input
        type="text"
        placeholder="Username"
        className="form-control mb-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="New Password"
        className="form-control mb-3"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm New Password"
        className="form-control mb-3"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={handleResetPassword}>
        Reset Password
      </button>

      {message && (
        <div className={`alert mt-3 ${isSuccess ? "alert-success" : "alert-danger"}`} role="alert">
          {message}
        </div>
      )}

      <p className="mt-4 text-center">
        <Link href="/login" className="text-decoration-none">
          Back to Login
        </Link>
      </p>
    </div>
  );
}
