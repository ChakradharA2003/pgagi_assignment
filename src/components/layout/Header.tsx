import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import Modal from '../ui/Modal';

export default function Header() {
  const { mode, toggleTheme } = useDarkMode();
  const [isProfileOpen, setProfileOpen] = React.useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center transition-colors duration-300">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Analytics Dashboard</h1>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded border dark:border-gray-600 dark:bg-gray-700"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">
          {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>

        <button onClick={() => setProfileOpen(true)} className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
          👤
        </button>
      </div>

      {/* Profile Modal */}
      <Modal isOpen={isProfileOpen} onClose={() => setProfileOpen(false)} title="User Profile">
        <div className="space-y-4">
          <p>Settings, notifications, logout...</p>
          <button onClick={() => setProfileOpen(false)} className="w-full bg-red-600 py-2 rounded">
            Close
          </button>
        </div>
      </Modal>
    </header>
  );
}