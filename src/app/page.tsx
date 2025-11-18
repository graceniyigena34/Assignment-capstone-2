import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Publish Platform</h1>
      <p className="mb-4">Your Medium-inspired publishing platform.</p>
      <Link href="/editor" className="px-4 py-2 bg-blue-500 text-white rounded">Create a Post</Link>
    </div>
  );
}
