import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <Link href="/dashboard" className="text-xl text-blue-600 hover:underline">
        Go to Dashboard
      </Link>
    </div>
  );
}