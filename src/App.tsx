import { Sidebar } from './components/Sidebar';
import { WorkoutCard } from './components/WorkoutCard';
import { workouts } from './data/workouts';
import { Icon } from './components/Icon';

export function App() {
  return (
    <main className="app-shell" aria-label="GymApp">
      <Sidebar />

      <section className="content">
        <header className="page-header">
          <p className="greeting">
            Ola, Joao! <span aria-hidden="true">👋</span>
          </p>
          <p className="subtitle">Preparado para mais um treino?</p>
        </header>

        <section className="section-title">
          <h1>Meus Treinos</h1>
          <a href="#">Ver todos</a>
        </section>

        <section className="workout-list" aria-label="Lista de treinos">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </section>

        <button className="create-button" type="button">
          <Icon name="plus" />
          Criar novo treino
        </button>

        <aside className="motivation-card" aria-label="Mensagem motivacional">
          <Icon name="bolt" />
          <div>
            <strong>Foco no objetivo!</strong>
            <p>A consistencia e o que transforma esforco em resultado.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}

