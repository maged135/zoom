"use client";

import { ReactNode, useEffect } from "react";

import { useParams, useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

import { logout } from "@/lib/redux/slices/authSlice";

import { logoutApi } from "@/lib/api/auth/logout";

type AuthGuardProps = {
  children: ReactNode;
  allowedRoles?: Array<"MARKETER" | "SUPER_ADMIN">;
};

export default function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const router = useRouter();

  const params = useParams();

  const locale = params.locale as string;

  const dispatch = useAppDispatch();

  const { accessToken, user } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      if (accessToken) {
        await logoutApi(accessToken);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(logout());

      router.replace(`/${locale}/login`);
    }
  };

  useEffect(() => {
    // wait hydration
    if (accessToken === undefined || user === undefined) {
      return;
    }

    // unauthenticated
    if (!accessToken || !user) {
      handleLogout();
      return;
    }

    // unauthorized role
    if (allowedRoles && !allowedRoles.includes(user.userType)) {
      router.replace(`/${locale}`);
    }
  }, [accessToken, user, allowedRoles, locale, router]);

  // loading
  if (accessToken === undefined || user === undefined) {
    return null;
  }

  // unauthenticated
  if (!accessToken || !user) {
    return null;
  }

  // unauthorized
  if (allowedRoles && !allowedRoles.includes(user.userType)) {
    return null;
  }

  return <>{children}</>;
}
