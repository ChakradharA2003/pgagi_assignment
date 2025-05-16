import React from 'react';

export default function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
}