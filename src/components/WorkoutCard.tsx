import type { Workout } from '../types';
import { Icon } from './Icon';

type WorkoutCardProps = {
  workout: Workout;
};

export function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <article className="workout-card">
      <div className={`workout-icon ${workout.variant}`} aria-hidden="true">
        <Icon name={workout.icon} />
      </div>

      <div className="workout-info">
        <h2>{workout.title}</h2>
        <p>{workout.exerciseCount} exercicios</p>
        <span>
          <Icon name="calendar" />
          Ultimo treino: {workout.lastWorkoutDate}
        </span>
      </div>

      <button className="icon-button" type="button" aria-label={`Abrir ${workout.title}`}>
        <Icon name="chevronRight" />
      </button>
    </article>
  );
}

