"use client";

import { useRouter, useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { logout } from "@/lib/redux/slices/authSlice";
import { logoutApi } from "@/lib/api/auth/logout";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function AdminHeader() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      if (accessToken) {
        await logoutApi(accessToken);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(logout());
      router.push(`/${locale}/login`);
    }
  };

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Admin Dashboard
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="gap-2 w-full sm:w-auto"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
