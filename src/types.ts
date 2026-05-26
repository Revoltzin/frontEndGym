export type NavItem = {
  label: string;
  icon: 'home' | 'dumbbell' | 'user' | 'logout';
  active?: boolean;
};

export type Workout = {
  id: number;
  title: string;
  exerciseCount: number;
  lastWorkoutDate: string;
  variant: 'purple' | 'green' | 'orange';
  icon: 'arm' | 'legs' | 'back';
};

export type LoginFormValues = {
  email: string;
  password: string;
  remember: boolean;
};
