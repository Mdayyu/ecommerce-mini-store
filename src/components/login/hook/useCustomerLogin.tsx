import { useState } from "react";

export function useCustomerLogin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual login/register logic here
    console.log({ name, password, email });
  };

  return {
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    handleSubmit,
  };
}
