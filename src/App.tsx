import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LoginPage } from './components/LoginPage';
import { Sidebar } from './components/Sidebar';
import { ProfilePage } from './components/ProfilePage';
import { WorkoutBuilderPage } from './components/WorkoutBuilderPage';
import type { LoginFormValues, PageId } from './types';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState<PageId>('home');

  async function handleLogin(values: LoginFormValues) {
    try {
      const response = await fetch('http://localhost:8080/atletas/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email, senha: values.password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setActivePage('home');
      } else {
        alert('Email ou senha inválidos!');
      }
    } catch {
      alert('Erro ao conectar com o servidor!');
    }
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
      {activePage === 'profile' && <ProfilePage />}
      {activePage === 'workouts' && <WorkoutBuilderPage onBack={() => setActivePage('home')} />}
      {activePage === 'home' && <Dashboard onCreateWorkout={() => setActivePage('workouts')} />}
    </main>
  );
}