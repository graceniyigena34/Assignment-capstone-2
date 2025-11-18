import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">Capstone</Link>
      <nav>
        <Link href="/editor" className="mr-4">Editor</Link>
        <Link href="/profile" className="mr-4">Profile</Link>
        <Link href="/auth/login">Login</Link>
      </nav>
    </header>
  );
}
