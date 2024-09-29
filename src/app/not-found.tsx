"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    // Helper function to get the locale from cookies or local storage
    function getLocaleFromStorage() {
      // Check for the locale in cookies
      const cookieLocale = document.cookie
        .split("; ")
        .find((row) => row.startsWith("NEXT_LOCALE="))
        ?.split("=")[1];

      // If no locale found in cookies, check localStorage
      const storedLocale = localStorage.getItem("NEXT_LOCALE");

      // Return the locale from cookies or localStorage, default to 'en' if not found
      return cookieLocale || storedLocale || "en";
    }

    // Redirect using the fetched locale
    redirect(`/${getLocaleFromStorage()}${pathname}`);
  }, [pathname]);

  return null; // Render nothing since the redirect will happen
}
