import { useState } from "react";

export const useCustomerLogin = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !password || !confirmPassword) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    // Simulasi sukses register
    console.log("Register Berhasil:", { name, password });
    alert(`Registrasi berhasil! Selamat datang, ${name}.`);

    // Reset field (opsional)
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  return {
    name,
    password,
    confirmPassword,
    setName,
    setPassword,
    setConfirmPassword,
    handleRegister,
  };
};
