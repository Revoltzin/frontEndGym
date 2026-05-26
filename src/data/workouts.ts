import type { NavItem, Workout, WorkoutExercise } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Inicio', icon: 'home' },
  { id: 'workouts', label: 'Treinos', icon: 'dumbbell' },
  { id: 'profile', label: 'Perfil', icon: 'user' },
];

export const workouts: Workout[] = [
  {
    id: 1,
    title: 'Treino A - Peito e Triceps',
    exerciseCount: 6,
    lastWorkoutDate: '10/05/2024',
    variant: 'purple',
    icon: 'arm',
  },
  {
    id: 2,
    title: 'Treino B - Pernas',
    exerciseCount: 7,
    lastWorkoutDate: '08/05/2024',
    variant: 'green',
    icon: 'legs',
  },
  {
    id: 3,
    title: 'Treino C - Costas e Biceps',
    exerciseCount: 6,
    lastWorkoutDate: '06/05/2024',
    variant: 'orange',
    icon: 'back',
  },
];

export const workoutExercises: WorkoutExercise[] = [
  {
    id: 1,
    name: 'Supino reto',
    muscleGroup: 'Peito',
    sets: '4',
    reps: '10 - 12',
    rest: '60s',
    icon: 'arm',
  },
  {
    id: 2,
    name: 'Supino inclinado',
    muscleGroup: 'Peito',
    sets: '4',
    reps: '10 - 12',
    rest: '60s',
    icon: 'arm',
  },
  {
    id: 3,
    name: 'Crucifixo inclinado',
    muscleGroup: 'Peito',
    sets: '3',
    reps: '12 - 15',
    rest: '45s',
    icon: 'arm',
  },
  {
    id: 4,
    name: 'Triceps pulley',
    muscleGroup: 'Triceps',
    sets: '3',
    reps: '12 - 15',
    rest: '45s',
    icon: 'back',
  },
  {
    id: 5,
    name: 'Triceps testa',
    muscleGroup: 'Triceps',
    sets: '3',
    reps: '10 - 12',
    rest: '45s',
    icon: 'arm',
  },
];
