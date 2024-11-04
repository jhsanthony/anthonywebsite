import React, { useState } from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { useColorScheme } from '../contexts/ColorSchemeContext';

function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const { changeTheme, currentTheme, themes } = useColorScheme();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full hover:bg-${currentTheme.primary}-500/20 transition-colors`}
      >
        <SettingsIcon className={`w-6 h-6 text-${currentTheme.primary}-500`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-black/80 backdrop-blur-xl border border-gray-700 shadow-lg p-4">
          <h3 className="text-gray-200 font-semibold mb-3">Color Scheme</h3>
          <div className="space-y-2">
            {Object.keys(themes).map((themeName) => (
              <button
                key={themeName}
                onClick={() => {
                  changeTheme(themeName);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                  themes[themeName] === currentTheme
                    ? `bg-${themes[themeName].primary}-500/20 text-${themes[themeName].primary}-500`
                    : 'text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;