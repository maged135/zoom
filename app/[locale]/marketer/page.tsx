"use client";
import AuthGuard from "@/components/auth-guard";
import { Header } from "./components/header";
import { Section1 } from "./components/section1";
import { Section2 } from "./components/section2";

export default function MarketerPage() {
  return (
    <AuthGuard allowedRoles={["MARKETER"]}>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <Section1 />
        <Section2 />
      </div>
    </AuthGuard>
  );
}
