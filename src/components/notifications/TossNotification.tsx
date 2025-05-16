import React from 'react';
import { useState, useEffect } from 'react';

export default function ToastNotification({ message, duration = 3000 }: { message: string; duration?: number }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow z-50">
      {message}
    </div>
  );
}