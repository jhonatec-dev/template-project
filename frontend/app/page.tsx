import Link from "next/link";
import { links } from "./links";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Estou vivo?</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {links.map((link) => (
          <Link key={link.url} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
