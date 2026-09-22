import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NavbarDemo from "@/components/resizable-navbar-demo";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <NavbarDemo />
      <h1 className="text-2xl m-4">
        Welcome,{" "}
        <span className="text-green-700 underline">{session.user?.name}</span>
      </h1>

      {/* <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="p-2 border rounded-xl bg-black text-white"
      >
        Sign Out
      </button> */}
    </div>
  );
}
