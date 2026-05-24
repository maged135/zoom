"use client";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/redux/hooks";

export function useMarketerAuth() {
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayUser = user;

  return {
    accessToken,
    displayUser,
    isMobile,
    isLoading:
      !accessToken || !displayUser || displayUser.userType !== "MARKETER",
  };
}
