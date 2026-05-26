import { workoutExercises } from '../data/workouts';
import { Icon } from './Icon';

type WorkoutBuilderPageProps = {
  onBack: () => void;
};

const summaryItems = [
  { icon: 'clipboard', label: 'Nome', value: 'Treino A - Peito e Triceps' },
  { icon: 'dumbbell', label: 'Grupo muscular', value: 'Peito' },
  { icon: 'clock', label: 'Duracao estimada', value: '60 minutos' },
  { icon: 'grid', label: 'Total de exercicios', value: '5 exercicios' },
  { icon: 'calendar', label: 'Data de criacao', value: '10/05/2024' },
] as const;

export function WorkoutBuilderPage({ onBack }: WorkoutBuilderPageProps) {
  return (
    <section className="content workout-builder-content">
      <header className="builder-header">
        <button className="builder-back" type="button" onClick={onBack} aria-label="Voltar para inicio">
          <Icon name="arrowLeft" />
        </button>

        <div>
          <h1>
            Criar novo treino <Icon name="dumbbell" />
          </h1>
          <p>Monte seu treino personalizado adicionando exercicios e definindo detalhes.</p>
        </div>

        <ol className="builder-steps" aria-label="Etapas de criacao do treino">
          <li className="active">
            <span>1</span>
            <strong>Informacoes</strong>
          </li>
          <li>
            <span>2</span>
            <strong>Exercicios</strong>
          </li>
          <li>
            <span>3</span>
            <strong>Revisao</strong>
          </li>
        </ol>
      </header>

      <div className="builder-layout">
        <div className="builder-main">
          <section className="builder-card" aria-labelledby="workout-info-title">
            <div className="card-title builder-card-title">
              <Icon name="clipboard" />
              <h2 id="workout-info-title">Informacoes do treino</h2>
            </div>

            <form className="builder-form">
              <label className="profile-field">
                <span>Nome do treino</span>
                <input type="text" defaultValue="Treino A - Peito e Triceps" />
              </label>

              <label className="profile-field">
                <span>Grupo muscular principal</span>
                <div className="select-like">
                  <span className="select-icon">
                    <Icon name="arm" />
                  </span>
                  <strong>Peito</strong>
                  <Icon name="chevronRight" />
                </div>
              </label>

              <label className="profile-field">
                <span>Descricao (opcional)</span>
                <div className="bio-input">
                  <input type="text" placeholder="Ex.: Foco em ganho de massa e definicao." maxLength={120} />
                  <small>0/120</small>
                </div>
              </label>

              <label className="profile-field">
                <span>Duracao estimada</span>
                <div className="select-like">
                  <Icon name="clock" />
                  <strong>60 minutos</strong>
                  <Icon name="chevronRight" />
                </div>
              </label>
            </form>
          </section>

          <section className="builder-card exercise-builder-card" aria-labelledby="exercises-title">
            <div className="exercise-card-header">
              <div className="card-title builder-card-title">
                <Icon name="dumbbell" />
                <h2 id="exercises-title">Exercicios</h2>
              </div>

              <button className="soft-action-button" type="button">
                <Icon name="plus" />
                Adicionar exercicio
              </button>
            </div>

            <div className="exercise-table" role="table" aria-label="Exercicios do treino">
              <div className="exercise-table-head" role="row">
                <span />
                <span />
                <span>Series</span>
                <span>Repeticoes</span>
                <span>Descanso</span>
                <span />
              </div>

              {workoutExercises.map((exercise) => (
                <article className="exercise-row" role="row" key={exercise.id}>
                  <button className="drag-button" type="button" aria-label={`Reordenar ${exercise.name}`}>
                    <Icon name="grip" />
                  </button>

                  <div className="exercise-name">
                    <span className="exercise-thumb">
                      <Icon name={exercise.icon} />
                    </span>
                    <div>
                      <strong>{exercise.name}</strong>
                      <small>{exercise.muscleGroup}</small>
                    </div>
                  </div>

                  <button className="mini-select" type="button">
                    {exercise.sets}
                    <Icon name="chevronRight" />
                  </button>

                  <button className="mini-select" type="button">
                    {exercise.reps}
                  </button>

                  <button className="mini-select" type="button">
                    {exercise.rest}
                    <Icon name="chevronRight" />
                  </button>

                  <div className="row-actions">
                    <button type="button" aria-label={`Editar ${exercise.name}`}>
                      <Icon name="edit" />
                    </button>
                    <button type="button" aria-label={`Remover ${exercise.name}`}>
                      <Icon name="trash" />
                    </button>
                  </div>
                </article>
              ))}

              <button className="add-inline-button" type="button">
                <Icon name="plus" />
                Adicionar exercicio
              </button>
            </div>
          </section>
        </div>

        <aside className="builder-aside">
          <section className="summary-card" aria-labelledby="summary-title">
            <div className="card-title builder-card-title">
              <Icon name="grid" />
              <h2 id="summary-title">Resumo do treino</h2>
            </div>

            <div className="summary-list">
              {summaryItems.map((item) => (
                <div className="summary-item" key={item.label}>
                  <Icon name={item.icon} />
                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="builder-tip" aria-label="Dica">
            <Icon name="bolt" />
            <div>
              <strong>Dica</strong>
              <p>Organize seus exercicios na ordem que voce deseja executa-los.</p>
            </div>
          </aside>
        </aside>
      </div>

      <footer className="builder-footer">
        <button className="outline-button" type="button" onClick={onBack}>
          Cancelar
        </button>
        <button className="save-button" type="button">
          Proximo: Revisao
          <Icon name="arrowRight" />
        </button>
      </footer>
    </section>
  );
}
