"use client";

import { adminLogin } from "@/api/services/admin/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export const useLogin = () => {

    const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, string>>({});

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    setLoading(true);
    const errorHandler: Record<string, string> = {};

    if (!email.trim()) errorHandler.email = "Email should not be empty";

    if (!password.trim()) errorHandler.password = "Password should not be empty";

    if (Object.keys(errorHandler).length > 0) {
      setError(errorHandler);
      setLoading(false);
      return;
    }
    try {
      const response = await adminLogin({ email, password });

      if (
        response.status == 200 &&
        response.data.message == "Login successful"
      ) {
        console.log(response.data.message);
       router.push("/admin");
        
      } else {

        toast.error("Login failed ❌");
      }
    } catch (error) {
      toast.error("Login failed ❌");
      console.log(`LOGIN ERROR : ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    error,
  };
};
