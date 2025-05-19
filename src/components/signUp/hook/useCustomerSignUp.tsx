import { useState } from "react";

export const useCustomerSignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Sign Up:", { name, email, password });
    // Tambahkan validasi atau panggilan API Sign Up di sini
  };

  return {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleSignUp,
  };
};
