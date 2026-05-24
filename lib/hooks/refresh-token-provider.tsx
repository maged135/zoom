"use client";

import { useRefreshToken } from "./useRefreshToken";

export default function RefreshTokenProvider() {
  useRefreshToken();

  return null;
}
