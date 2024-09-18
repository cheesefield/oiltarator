"use client";

import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return redirect(`/en/${pathname}`);
}
