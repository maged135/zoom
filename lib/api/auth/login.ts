import { api } from "../base";
import { AuthResponse } from "@/lib/types/auth";

export const loginApi = async (email: string, password: string) => {
  const response = await api<{
    data: AuthResponse;
  }>("/api/auth/login", {
    method: "POST",

    body: JSON.stringify({
      email,
      password,
    }),
  });

  return response.data;
};
