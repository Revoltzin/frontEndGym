import { navItems } from '../data/workouts';
import { Icon } from './Icon';
import avatarUrl from '../assets/avatar.svg';

type SidebarProps = {
  onLogout: () => void;
};

export function Sidebar({ onLogout }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Menu principal">
      <div>
        <a className="brand" href="#" aria-label="GymApp inicio">
          <span className="brand-icon" aria-hidden="true">
            <Icon name="dumbbell" />
          </span>
          <span>GymApp</span>
        </a>

        <nav className="nav-list">
          {navItems.map((item) => (
            <a
              key={item.label}
              className={item.active ? 'nav-item active' : 'nav-item'}
              href="#"
              aria-current={item.active ? 'page' : undefined}
            >
              <Icon name={item.icon} />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button className="nav-item logout" type="button" onClick={onLogout}>
          <Icon name="logout" />
          Sair
        </button>

        <section className="user-card" aria-label="Usuario logado">
          <img src={avatarUrl} alt="Foto de Joao Silva" />
          <div>
            <strong>Joao Silva</strong>
            <span>Atleta</span>
          </div>
        </section>
      </div>
    </aside>
  );
}
