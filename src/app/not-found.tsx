"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import logo from "@/assets/images/logoicon.png";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="text-center max-w-md">
        <h1 className="flex items-center justify-center gap-2 mb-2" aria-label="404 Page Not Found">
          <span className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-gray-800">4</span>

          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg bg-white ring-4 ring-gray-300 animate-pulse">
            <Image
              src={logo}
              alt="Company logo representing the zero in 404 error"
              fill
              className="object-cover"
              priority
            />
          </div>

          <span className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-gray-800">4</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Button
          onClick={() => router.push("/")}
          className="px-6 py-3 text-sm sm:text-base text-white bg-primary/80 hover:bg-primary rounded-xl shadow-md transition-all duration-200 cursor-pointer"
        >
          Return Home
        </Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
