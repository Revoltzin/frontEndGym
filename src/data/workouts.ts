import type { NavItem, Workout } from '../types';

export const navItems: NavItem[] = [
  { label: 'Inicio', icon: 'home', active: true },
  { label: 'Treinos', icon: 'dumbbell' },
  { label: 'Perfil', icon: 'user' },
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

