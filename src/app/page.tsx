import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <h2>Dive into the world of books</h2>
      <Link href="/sign">
        <button>Sign In</button>
      </Link>
    </div>
  );
}
