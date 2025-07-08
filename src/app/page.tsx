import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-background">
      <Link href="/market">
        <button className="px-8 py-4 rounded bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-colors">Market</button>
      </Link>
      <Link href="/agent">
        <button className="px-8 py-4 rounded bg-green-600 text-white text-lg font-semibold hover:bg-green-700 transition-colors">Agent</button>
      </Link>
    </div>
  );
}
