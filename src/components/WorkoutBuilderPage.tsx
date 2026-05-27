import { useState } from 'react';
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

const muscleTabs = ['Peito', 'Costas', 'Pernas', 'Ombros', 'Biceps', 'Triceps', 'Core', 'Cardio'];

const catalogExercises = [
  { id: 1, name: 'Supino reto', muscleGroup: 'Peito', icon: 'arm' },
  { id: 2, name: 'Supino inclinado', muscleGroup: 'Peito', icon: 'arm' },
  { id: 3, name: 'Crucifixo inclinado', muscleGroup: 'Peito', icon: 'arm' },
  { id: 4, name: 'Paralelas', muscleGroup: 'Peito', icon: 'back' },
] as const;

export function WorkoutBuilderPage({ onBack }: WorkoutBuilderPageProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const isExerciseStep = step === 2;

  return (
    <section className="content workout-builder-content">
      <header className="builder-header">
        <button
          className="builder-back"
          type="button"
          onClick={isExerciseStep ? () => setStep(1) : onBack}
          aria-label={isExerciseStep ? 'Voltar para informacoes do treino' : 'Voltar para inicio'}
        >
          <Icon name="arrowLeft" />
        </button>

        <div>
          <h1>
            Criar novo treino <Icon name="dumbbell" />
          </h1>
          <p>
            {isExerciseStep
              ? 'Adicione os exercicios que irao compor o seu treino.'
              : 'Monte seu treino personalizado adicionando exercicios e definindo detalhes.'}
          </p>
        </div>

        <ol className="builder-steps" aria-label="Etapas de criacao do treino">
          <li className={isExerciseStep ? 'done' : 'active'}>
            <span>{isExerciseStep ? <Icon name="check" /> : '1'}</span>
            <strong>Informacoes</strong>
          </li>
          <li className={isExerciseStep ? 'active' : undefined}>
            <span>2</span>
            <strong>Exercicios</strong>
          </li>
          <li>
            <span>3</span>
            <strong>Revisao</strong>
          </li>
        </ol>
      </header>

      {isExerciseStep ? (
        <WorkoutExerciseStep onBack={onBack} />
      ) : (
        <>
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
            <button className="save-button" type="button" onClick={() => setStep(2)}>
              Proximo: Exercicios
              <Icon name="arrowRight" />
            </button>
          </footer>
        </>
      )}
    </section>
  );
}

function WorkoutExerciseStep({ onBack }: WorkoutBuilderPageProps) {
  return (
    <div className="exercise-step-layout">
      <section className="builder-card exercise-catalog-card" aria-labelledby="add-exercises-title">
        <div className="card-title builder-card-title">
          <Icon name="grid" />
          <h2 id="add-exercises-title">Adicionar exercicios</h2>
        </div>

        <div className="catalog-tools">
          <label className="catalog-search" aria-label="Buscar exercicio">
            <Icon name="search" />
            <input type="search" placeholder="Buscar exercicio..." />
          </label>

          <button className="catalog-filter" type="button">
            Grupo muscular
            <Icon name="chevronRight" />
          </button>

          <button className="custom-exercise-button" type="button">
            <Icon name="plus" />
            Criar exercicio personalizado
          </button>
        </div>

        <nav className="muscle-tabs" aria-label="Filtro por grupo muscular">
          {muscleTabs.map((tab) => (
            <button className={tab === 'Peito' ? 'active' : undefined} type="button" key={tab}>
              {tab}
            </button>
          ))}
        </nav>

        <div className="catalog-list" aria-label="Catalogo de exercicios">
          {catalogExercises.map((exercise) => (
            <article className="catalog-row" key={exercise.id}>
              <div className="exercise-name">
                <span className="exercise-thumb">
                  <Icon name={exercise.icon} />
                </span>
                <div>
                  <strong>{exercise.name}</strong>
                  <small>{exercise.muscleGroup}</small>
                </div>
              </div>

              <button className="catalog-add-button" type="button">
                Adicionar
                <Icon name="plus" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <aside className="exercise-step-aside">
        <section className="summary-card added-exercises-card" aria-labelledby="added-exercises-title">
          <div className="exercise-summary-title">
            <div className="card-title builder-card-title">
              <Icon name="grid" />
              <h2 id="added-exercises-title">Exercicios adicionados</h2>
            </div>
            <span>5</span>
          </div>

          <div className="added-exercise-list">
            {workoutExercises.map((exercise) => (
              <article className="added-exercise-row" key={exercise.id}>
                <button className="drag-button" type="button" aria-label={`Reordenar ${exercise.name}`}>
                  <Icon name="grip" />
                </button>
                <span className="exercise-thumb">
                  <Icon name={exercise.icon} />
                </span>
                <div>
                  <strong>{exercise.name}</strong>
                  <small>
                    {exercise.sets} series • {exercise.reps} reps
                  </small>
                </div>
              </article>
            ))}
          </div>

          <button className="save-button full-width-action" type="button">
            Proximo: Revisao
            <Icon name="arrowRight" />
          </button>
        </section>

        <button className="outline-button full-width-action" type="button" onClick={onBack}>
          Cancelar
        </button>
      </aside>
    </div>
  );
}
