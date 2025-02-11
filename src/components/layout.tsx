"use client";
import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";
import { useEffect, useState } from "react";

export default function DashboardLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {isMobile && (
        <div className="navbar bg-base-200">
          <div className="flex-none">
            <button
              className="text-blue-900"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsMobile(true);
              }}
            >
              {!isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              ) : (
                "x"
              )}
            </button>
          </div>
        </div>
      )}
      {isMobile && isMenuOpen && (
        <Sidebar
          isMenuOpen={isMenuOpen}
          isMobile={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsMobile={setIsMobile}
        />
      )}
      {isMobile && !isMenuOpen && (
        <ContentArea
          isMenuOpen={isMenuOpen}
          isMobile={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsMobile={setIsMobile}
        />
      )}
      {!isMobile && !isMenuOpen && (
        <>
          <Sidebar
            isMenuOpen={isMenuOpen}
            isMobile={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            setIsMobile={setIsMobile}
          />
          <ContentArea
            isMenuOpen={isMenuOpen}
            isMobile={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            setIsMobile={setIsMobile}
          />
        </>
      )}
    </div>
  );
}
