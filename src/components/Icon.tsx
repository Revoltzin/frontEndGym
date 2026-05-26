type IconName =
  | 'home'
  | 'dumbbell'
  | 'user'
  | 'logout'
  | 'calendar'
  | 'chevronRight'
  | 'plus'
  | 'bolt'
  | 'arrowLeft'
  | 'mail'
  | 'lock'
  | 'eye'
  | 'camera'
  | 'upload'
  | 'save'
  | 'shield'
  | 'check'
  | 'heartPulse'
  | 'target'
  | 'arm'
  | 'legs'
  | 'back';

type IconProps = {
  name: IconName;
  className?: string;
};

const paths: Record<IconName, string> = {
  home: 'M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H4.5A1.5 1.5 0 0 1 3 19.5z',
  dumbbell: 'M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0',
  logout: 'M14 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3M9 12h12m0 0-4-4m4 4-4 4',
  calendar: 'M7 3v4M17 3v4M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z',
  chevronRight: 'm9 18 6-6-6-6',
  plus: 'M12 5v14M5 12h14',
  bolt: 'm13 2-9 12h7l-1 8 10-13h-7z',
  arrowLeft: 'M19 12H5m0 0 6-6m-6 6 6 6',
  mail: 'M4 6h16v12H4zM4 7l8 6 8-6',
  lock: 'M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6zM12 15v2',
  eye: 'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  camera: 'M4 7h3l2-3h6l2 3h3v13H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  upload: 'M12 16V4m0 0-4 4m4-4 4 4M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3',
  save: 'M5 3h12l2 2v16H5zM8 3v6h8V3M8 21v-7h8v7',
  shield: 'M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  check: 'm5 12 4 4L19 6',
  heartPulse: 'M20.8 8.6c0 5-8.8 10.4-8.8 10.4S3.2 13.6 3.2 8.6A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 8.8 2.6zM7 12h3l1-2 2 5 1.5-3H17',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01',
  arm: 'M8 20c-2 0-3.5-1.2-3.5-3.5 0-2.1 1.6-4.4 3.1-6.3.5-.6 1.5-.3 1.5.5v3.1c0 .7.8 1 1.3.5l1.7-1.7c.5-.5 1.5-.2 1.5.6v2.3H16a2.5 2.5 0 0 1 0 5z',
  legs: 'M12 3c2 3 2.8 5.5 1.2 7.6L16 20h-3l-2-6-2 6H6l2.9-8.5C7.2 9.2 8.5 5.6 12 3z',
  back: 'M7 8c-1.5 1-2.5 2.4-2.5 4.5M17 8c1.5 1 2.5 2.4 2.5 4.5M8 11v3c0 2.2 1.8 4 4 4s4-1.8 4-4v-3M10 6l2 4 2-4M9 20h6',
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
