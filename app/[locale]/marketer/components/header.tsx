"use client";

import { Button } from "@/components/ui/button";
import { LogOut, X } from "lucide-react";
import { logout } from "@/lib/redux/slices/authSlice";
import { logoutApi } from "@/lib/api/auth/logout";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useParams, useRouter } from "next/navigation";
import image1 from "@/public/logo.svg";
import image2 from "@/public/Caret_Down_MD.svg";
import image3 from "@/public/menu.svg";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Header() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { accessToken } = useAppSelector((state) => state.auth);
  const locale = params.locale as string;

  const handleLogout = async () => {
    try {
      await logoutApi(accessToken!);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(logout());
      router.push(`/${locale}/login`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white sticky top-0 z-50 h-[86px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <Image
              src={image1}
              alt="Logo"
              className="w-auto h-8 sm:h-10 md:h-auto"
            />
          </div>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex gap-8 xl:gap-[60px]">
              <a
                href="#"
                className="text-[#161A1E] font-bold hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
              >
                Startseite
              </a>
              <div className="flex items-center gap-1 group cursor-pointer">
                <a
                  href="#"
                  className="text-[#161A1E] font-Urbanist hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
                >
                  Dienstleistungen
                </a>
                <Image
                  src={image2}
                  alt="Caret Down"
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                />
              </div>
              <a
                href="#"
                className="text-[#161A1E] font-Urbanist hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
              >
                Über uns
              </a>
              <a
                href="#"
                className="text-[#161A1E] font-Urbanist hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
              >
                Blogs
              </a>
              <a
                href="#"
                className="text-[#161A1E] font-Urbanist hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
              >
                Kontakt
              </a>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2 transition-all duration-200 hover:scale-105"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
          <div className="lg:hidden flex items-center gap-3 sm:gap-4">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Image
                  src={image3}
                  alt="menu"
                  className="w-auto h-8 sm:h-10 md:h-auto"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`fixed top-[86px] left-0 right-0 bg-white shadow-2xl z-50 transition-all duration-300 ease-in-out transform lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 sm:p-8 gap-2 max-h-[calc(100vh-86px)] overflow-y-auto">
          <a
            href="#"
            onClick={toggleMenu}
            className="text-[#161A1E] font-bold text-lg py-3 px-4 rounded-lg hover:bg-gray-50"
          >
            Startseite
          </a>
          <div className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 cursor-pointer group">
            <a
              href="#"
              onClick={toggleMenu}
              className="text-[#161A1E] font-Urbanist text-lg"
            >
              Dienstleistungen
            </a>
            <Image src={image2} alt="Caret Down" className="w-5 h-5" />
          </div>
          <a
            href="#"
            onClick={toggleMenu}
            className="text-[#161A1E] font-Urbanist text-lg py-3 px-4 rounded-lg hover:bg-gray-50"
          >
            Über uns
          </a>
          <a
            href="#"
            onClick={toggleMenu}
            className="text-[#161A1E] font-Urbanist text-lg py-3 px-4 rounded-lg hover:bg-gray-50"
          >
            Blogs
          </a>
          <a
            href="#"
            onClick={toggleMenu}
            className="text-[#161A1E] font-Urbanist text-lg py-3 px-4 rounded-lg hover:bg-gray-50"
          >
            Kontakt
          </a>

          {/* ✅ زر اللوجاوت هنا داخل نفس القائمة ويظهر فقط عندما isMenuOpen === true */}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <Button
              variant="outline"
              size="default"
              onClick={handleLogout}
              className="gap-2 w-full justify-center"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
