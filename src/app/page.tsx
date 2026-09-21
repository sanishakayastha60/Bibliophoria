"use client";
import { useState } from "react";
import { SwapForm } from "@/components/swap-form";
export default function Home() {
  const [signIn, setSignIn] = useState<boolean>(true);
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <SwapForm isSignIn={signIn} onModeChange={setSignIn} />
    </div>
  );
}
