import avatarUrl from '../assets/avatar.svg';
import { Icon } from './Icon';

export function ProfilePage() {
  return (
    <section className="content profile-content">
      <header className="profile-header">
        <h1>Meu Perfil</h1>
        <p>Gerencie suas informacoes pessoais e seguranca da conta.</p>
      </header>

      <section className="profile-card personal-card" aria-labelledby="personal-title">
        <div className="card-title">
          <Icon name="user" />
          <h2 id="personal-title">Informacoes pessoais</h2>
        </div>

        <div className="personal-grid">
          <aside className="photo-panel">
            <div className="profile-photo">
              <img src={avatarUrl} alt="Foto de Joao Silva" />
              <button type="button" aria-label="Alterar foto do perfil">
                <Icon name="camera" />
              </button>
            </div>
            <p>JPG, PNG ou GIF. Max. 2MB.</p>
            <button className="outline-button" type="button">
              <Icon name="upload" />
              Alterar foto
            </button>
          </aside>

          <form className="profile-form">
            <label className="profile-field">
              <span>Nome</span>
              <input type="text" defaultValue="Joao" />
            </label>

            <label className="profile-field">
              <span>Sobrenome</span>
              <input type="text" defaultValue="Silva" />
            </label>

            <label className="profile-field span-2">
              <span>E-mail</span>
              <div className="locked-input">
                <input type="email" defaultValue="joao@email.com" readOnly />
                <Icon name="lock" />
              </div>
            </label>

            <label className="profile-field span-2">
              <span>Biografia (opcional)</span>
              <div className="bio-input">
                <input type="text" placeholder="Conte um pouco sobre voce..." maxLength={120} />
                <small>0/120</small>
              </div>
            </label>

            <div className="form-actions span-2">
              <button className="save-button" type="button">
                <Icon name="save" />
                Salvar alteracoes
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="profile-card security-card" aria-labelledby="security-title">
        <div className="card-title">
          <Icon name="lock" />
          <h2 id="security-title">Seguranca da conta</h2>
        </div>

        <form className="security-grid">
          <label className="profile-field">
            <span>Senha atual</span>
            <div className="password-input">
              <input type="password" placeholder="Digite sua senha atual" />
              <Icon name="eye" />
            </div>
          </label>

          <label className="profile-field">
            <span>Nova senha</span>
            <div className="password-input">
              <input type="password" placeholder="Digite sua nova senha" />
              <Icon name="eye" />
            </div>
            <small className="strength-label">Forca da senha: <strong>Fraca</strong></small>
            <span className="strength-bar" aria-hidden="true">
              <i />
            </span>
          </label>

          <label className="profile-field">
            <span>Confirmar nova senha</span>
            <div className="password-input">
              <input type="password" placeholder="Confirme sua nova senha" />
              <Icon name="eye" />
            </div>
          </label>

          <div className="security-actions">
            <button className="outline-button" type="button">
              <Icon name="lock" />
              Atualizar senha
            </button>
          </div>
        </form>
      </section>

      <aside className="profile-tip" aria-label="Dica rapida">
        <Icon name="bolt" />
        <div>
          <strong>Dica rapida!</strong>
          <p>Mantenha seus dados sempre atualizados para uma melhor experiencia.</p>
        </div>
      </aside>
    </section>
  );
}
