import { navItems } from '../data/workouts';
import { Icon } from './Icon';
import avatarUrl from '../assets/avatar.svg';

export function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Menu principal">
      <div>
        <a className="brand" href="#" aria-label="FitApp inicio">
          <span className="brand-icon" aria-hidden="true">
            <Icon name="dumbbell" />
          </span>
          <span>FitApp</span>
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
        <a className="nav-item logout" href="#">
          <Icon name="logout" />
          Sair
        </a>

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

