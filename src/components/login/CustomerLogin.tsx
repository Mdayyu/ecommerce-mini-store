import React from "react";
import AlertWarning from "../common/alert/AlertWarning";
import AlertSuccess from "../common/alert/AlertSuccess";
import { useCustomerLogin } from "./hook/useCustomerLogin";

export default function CustomerLogin() {
  const {
    name, setName,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    handleRegister,
    alert,
    clearAlert,
  } = useCustomerLogin();

  return (
    <div>
      <form onSubmit={handleRegister}>
        {/* input fields */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Konfirmasi Password"
        />
        <button type="submit">Register</button>
      </form>

      {/* Render Alert */}
      {alert.tipe === "error" && (
        <AlertWarning teks={alert.pesan} />
      )}
      {alert.tipe === "success" && (
        <AlertSuccess label={alert.pesan} />
      )}
    </div>
  );
}
