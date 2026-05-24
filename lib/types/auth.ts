export interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  userType: "SUPER_ADMIN" | "MARKETER";
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expireTime: string;
  user: User;
}
