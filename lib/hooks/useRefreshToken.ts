"use client";

import { useEffect, useRef } from "react";

import { useRouter, useParams } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

import { refreshTokenApi } from "@/lib/api/auth/refresh-token";

import { logoutApi } from "@/lib/api/auth/logout";

import {
  logout,
  updateAccessToken,
} from "@/lib/redux/slices/authSlice";

export const useRefreshToken = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const params = useParams();

  const locale = params.locale as string;

  const hasInitialized = useRef(false);

  const authRef = useRef({
    accessToken: "",
    refreshToken: "",
  });

  const { accessToken, refreshToken, user } =
    useAppSelector((state) => state.auth);

  // keep latest values
  useEffect(() => {
    authRef.current = {
      accessToken: accessToken || "",
      refreshToken: refreshToken || "",
    };
  }, [accessToken, refreshToken]);

  useEffect(() => {
    if (! !user) return;

    if (hasInitialized.current) return;

    hasInitialized.current = true;

    const handleLogout = async () => {
      try {
        if (authRef.current.accessToken) {
          await logoutApi(
            authRef.current.accessToken
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(logout());

        router.replace(`/${locale}/login`);
      }
    };

    const refresh = async () => {
      try {
        const data =
          await refreshTokenApi(
            authRef.current.refreshToken
          );

        dispatch(
          updateAccessToken({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          })
        );
      } catch (error) {
        await handleLogout();
      }
    };

    // refresh every 30 minutes only
    const interval = setInterval(
      refresh,
      1000 * 60 * 30
    );

    return () => {
      clearInterval(interval);

      hasInitialized.current = false;
    };
  }, [dispatch, router, locale, user]);
};