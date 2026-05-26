import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LoginPage } from './components/LoginPage';
import { Sidebar } from './components/Sidebar';
import { ProfilePage } from './components/ProfilePage';
import type { LoginFormValues, PageId } from './types';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState<PageId>('home');

  function handleLogin(_values: LoginFormValues) {
    setIsAuthenticated(true);
    setActivePage('home');
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <main className="app-shell" aria-label="GymApp">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        onLogout={() => setIsAuthenticated(false)}
      />
      {activePage === 'profile' ? <ProfilePage /> : <Dashboard />}
    </main>
  );
}
