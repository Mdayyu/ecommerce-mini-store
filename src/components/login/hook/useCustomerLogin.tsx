import { useState } from "react";

export const useCustomerLogin = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login:", { name, password });
  };

  return {
    name,
    password,
    setName,
    setPassword,
    handleLogin,
  };
};
