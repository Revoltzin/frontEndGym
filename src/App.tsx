import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LoginPage } from './components/LoginPage';
import type { LoginFormValues } from './types';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin(_values: LoginFormValues) {
    setIsAuthenticated(true);
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <Dashboard onLogout={() => setIsAuthenticated(false)} />;
}
