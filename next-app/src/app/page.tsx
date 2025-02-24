import Link from "next/link";

export default function TopPage() {
  return (
    <main className="w-full text-center p-4">
      <h1 className="text-xl">Next-Todo</h1>
      <div className="mt-4">
        <ul>
          <li>
            <Link href="/schedule" className="underline">
              予定
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
