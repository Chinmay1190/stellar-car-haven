
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="hover-lift"
    >
      {theme === 'light' ? (
        <span className="text-sm">🌙</span>
      ) : (
        <span className="text-sm">☀️</span>
      )}
    </Button>
  );
};

export default ThemeToggle;
