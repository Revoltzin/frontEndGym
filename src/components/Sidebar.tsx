import { navItems } from '../data/workouts';
import { Icon } from './Icon';
import avatarUrl from '../assets/avatar.svg';
import type { PageId } from '../types';

type SidebarProps = {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onLogout: () => void;
};

export function Sidebar({ activePage, onNavigate, onLogout }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Menu principal">
      <div>
        <button className="brand" type="button" aria-label="GymApp inicio" onClick={() => onNavigate('home')}>
          <span className="brand-icon" aria-hidden="true">
            <Icon name="dumbbell" />
          </span>
          <span>GymApp</span>
        </button>

        <nav className="nav-list">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={item.id === activePage ? 'nav-item active' : 'nav-item'}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-current={item.id === activePage ? 'page' : undefined}
            >
              <Icon name={item.icon} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button className="nav-item logout" type="button" onClick={onLogout}>
          <Icon name="logout" />
          Sair
        </button>

        <button className="user-card" type="button" onClick={() => onNavigate('profile')} aria-label="Abrir perfil">
          <img src={avatarUrl} alt="Foto de Joao Silva" />
          <div>
            <strong>Joao Silva</strong>
            <span>Atleta</span>
          </div>
          <Icon name="chevronRight" />
        </button>
      </div>
    </aside>
  );
}
