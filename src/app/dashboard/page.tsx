import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NavbarDemo from "@/components/resizable-navbar-demo";
import FactCom from "@/components/FactCom";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <NavbarDemo />
      {/* <h1 className="text-2xl m-4">
        Welcome,{" "}
        <span className="text-green-700 underline">{session.user?.name}</span>
      </h1> */}
      <div>
        <FactCom />
      </div>
    </div>
  );
}
