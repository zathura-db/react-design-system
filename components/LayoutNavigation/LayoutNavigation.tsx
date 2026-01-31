"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "../Navigation/Navigation";
import NavigationBlackList from "./NavigationBlackList";

/**
 * LayoutNavigation component to conditionally render the Navigation component
 * based on the current pathname. If the pathname is in the NavigationBlackList.tsx,
 * the Navigation component will not be rendered.
 */
export function LayoutNavigation() {
  if (NavigationBlackList.includes(usePathname())) {
    return null;
  }

  return <Navigation />;
}
