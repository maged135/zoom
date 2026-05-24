import { api } from "../base";

export const logoutApi = async (accessToken: string) => {
  return await api("/api/auth/logout", {
    method: "POST",

    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
