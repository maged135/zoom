import { api } from "../base";
import { User } from "@/lib/types/auth";

export const getMeApi = async (accessToken: string) => {
  return await api<User>("/api/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
