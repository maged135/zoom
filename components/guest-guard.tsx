"use client";

import { ReactNode, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import { useAppSelector } from "@/lib/redux/hooks";

type GuestGuardProps = {
  children: ReactNode;
};

export default function GuestGuard({
  children,
}: GuestGuardProps) {
  const router = useRouter();
  const params = useParams();

  const locale = params.locale as string;

  const { accessToken, user } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // wait hydration
    if (
      accessToken === undefined ||
      user === undefined
    ) {
      return;
    }

    // already logged in
    if (accessToken && user) {
      if (user.userType === "MARKETER") {
        router.replace(`/${locale}/marketer`);
        return;
      }

      if (user.userType === "SUPER_ADMIN") {
        router.replace(`/${locale}/admin`);
      }
    }
  }, [accessToken, user, locale, router]);

  // loading
  if (
    accessToken === undefined ||
    user === undefined
  ) {
    return null;
  }

  // logged in
  if (accessToken && user) {
    return null;
  }

  return <>{children}</>;
}