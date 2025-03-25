import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-50 border-d border-b-zinc-300">
      <div className="flex max-w-6xl px-12 py-4 mx-auto">
        <Link href={"/"} className="mr-2 text-zinc-900">
          AXORIA
        </Link>
        <Link href={"/categories"} className="mx-2 mr-auto text-zinc-900">
          Categories
        </Link>
        <Link href={"/dashboard/create"} className="mx-2 text-zinc-900">
          Add an article
        </Link>
      </div>
    </nav>
  );
}
