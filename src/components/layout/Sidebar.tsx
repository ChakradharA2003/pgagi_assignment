import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen p-4 sticky top-0 shadow-lg transition-transform duration-300">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700 bg-blue-600">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block py-2 px-4 rounded hover:bg-gray-700">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}