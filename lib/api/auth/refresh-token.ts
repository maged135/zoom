import { api } from "../base";
import { AuthResponse } from "@/lib/types/auth";

export const refreshTokenApi = async (refreshToken: string) => {
  const response = await api<{
    data: AuthResponse;
  }>("/api/auth/refresh", {
    method: "POST",

    body: JSON.stringify({
      refreshToken,
    }),
  });

  return response.data;
};
