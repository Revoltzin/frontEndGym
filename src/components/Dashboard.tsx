import { WorkoutCard } from './WorkoutCard';
import { workouts } from '../data/workouts';
import { Icon } from './Icon';

type DashboardProps = {
  onCreateWorkout: () => void;
};

export function Dashboard({ onCreateWorkout }: DashboardProps) {
  return (
    <section className="content dashboard-content">
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

      <button className="create-button" type="button" onClick={onCreateWorkout}>
        <Icon name="plus" />
        Criar novo treino
      </button>

      <aside className="dashboard-side-panel" aria-label="Resumo do atleta">
        <section className="next-workout-card">
          <span className="panel-icon">
            <Icon name="target" />
          </span>
          <div>
            <strong>Proximo treino</strong>
            <h2>Treino B - Pernas</h2>
            <p>7 exercicios programados para hoje.</p>
          </div>
          <button type="button">
            Comecar treino
            <Icon name="arrowRight" />
          </button>
        </section>

        <section className="dashboard-stats-card">
          <div>
            <span>Treinos feitos</span>
            <strong>12</strong>
            <small>este mes</small>
          </div>
          <div>
            <span>Sequencia</span>
            <strong>4</strong>
            <small>dias</small>
          </div>
        </section>

        <aside className="motivation-card" aria-label="Mensagem motivacional">
          <Icon name="bolt" />
          <div>
            <strong>Foco no objetivo!</strong>
            <p>A consistencia e o que transforma esforco em resultado.</p>
          </div>
        </aside>
      </aside>
    </section>
  );
}
