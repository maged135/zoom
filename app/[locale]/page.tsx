"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import { useAppSelector } from "@/lib/redux/hooks";

export default function HomePage() {
  const router = useRouter();
  const params = useParams();

  const locale = params.locale as string;

  const { accessToken, user } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!accessToken || !user) {
      router.replace(`/${locale}/login`);
      return;
    }

    if (user.userType === "MARKETER") {
      router.replace(`/${locale}/marketer`);
      return;
    }

    if (user.userType === "SUPER_ADMIN") {
      router.replace(`/${locale}/admin`);
    }
  }, [accessToken, user, locale, router]);

  return null;
}