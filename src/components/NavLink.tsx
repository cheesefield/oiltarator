"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { Link } from "@/navigation";

export default function NavLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? "active" : "navbar"} {...rest} />
  );
}
