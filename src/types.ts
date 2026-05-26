export type PageId = 'home' | 'workouts' | 'profile';

export type NavItem = {
  id: PageId;
  label: string;
  icon: 'home' | 'dumbbell' | 'user' | 'logout';
};

export type Workout = {
  id: number;
  title: string;
  exerciseCount: number;
  lastWorkoutDate: string;
  variant: 'purple' | 'green' | 'orange';
  icon: 'arm' | 'legs' | 'back';
};

export type WorkoutExercise = {
  id: number;
  name: string;
  muscleGroup: string;
  sets: string;
  reps: string;
  rest: string;
  icon: 'arm' | 'legs' | 'back';
};

export type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};
