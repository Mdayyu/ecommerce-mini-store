import { useState } from "react";

interface AlertState {
  tipe: "error" | "success" | null;
  pesan: string;
}

export const useCustomerLogin = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Tambah state alert
  const [alert, setAlert] = useState<AlertState>({ tipe: null, pesan: "" });

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !password || !confirmPassword) {
      setAlert({ tipe: "error", pesan: "Semua field wajib diisi!" });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({ tipe: "error", pesan: "Password dan Konfirmasi Password tidak cocok!" });
      return;
    }

    // Simulasi sukses register
    console.log("Register Berhasil:", { name, password });
    setAlert({ tipe: "success", pesan: `Registrasi berhasil! Selamat datang, ${name}.` });

    // Reset field
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  // Fungsi untuk menghilangkan alert (jika perlu)
  const clearAlert = () => setAlert({ tipe: null, pesan: "" });

  return {
    name,
    password,
    confirmPassword,
    setName,
    setPassword,
    setConfirmPassword,
    handleRegister,
    alert,
    clearAlert,
  };
};
