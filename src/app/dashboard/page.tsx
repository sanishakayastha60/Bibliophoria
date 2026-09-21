"use client";

import { useSession, signOut } from "next-auth/react";
import redirect from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  if (!session) {
    <p>Access Denied</p>;
  }
  return (
    <div>
      <h1>Welcome, {session?.user?.name}</h1>
    </div>
  );
}
