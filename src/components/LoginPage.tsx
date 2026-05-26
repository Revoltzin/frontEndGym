import { useState, type FormEvent } from 'react';
import type { LoginFormValues } from '../types';
import { Icon } from './Icon';

type LoginPageProps = {
  onLogin: (values: LoginFormValues) => void;
};

export function LoginPage({ onLogin }: LoginPageProps) {
  const [values, setValues] = useState<LoginFormValues>({
    email: '',
    password: '',
    remember: false,
  });

  function updateField(field: keyof LoginFormValues, value: string | boolean) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onLogin(values);
  }

  return (
    <main className="login-page" aria-label="Login GymApp">
      <section className="login-panel">
        <div className="login-form-side">
          <button className="back-button" type="button" aria-label="Voltar">
            <Icon name="arrowLeft" />
          </button>

          <div className="login-brand">
            <span className="login-brand-icon" aria-hidden="true">
              <Icon name="dumbbell" />
            </span>
            <strong>GymApp</strong>
          </div>

          <header className="login-header">
            <h1>Bem-vindo de volta</h1>
            <p>Entre para acompanhar seus treinos e sua evolucao.</p>
          </header>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Email</span>
              <div className="input-wrap">
                <Icon name="mail" />
                <input
                  type="email"
                  placeholder="joao@email.com"
                  value={values.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  required
                />
              </div>
            </label>

            <label className="field">
              <span>Senha</span>
              <div className="input-wrap">
                <Icon name="lock" />
                <input
                  type="password"
                  placeholder="Sua senha"
                  value={values.password}
                  onChange={(event) => updateField('password', event.target.value)}
                  required
                />
              </div>
            </label>

            <div className="form-row">
              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={values.remember}
                  onChange={(event) => updateField('remember', event.target.checked)}
                />
                <span>Lembrar acesso</span>
              </label>

              <a href="#">Esqueci a senha</a>
            </div>

            <button className="login-button" type="submit">
              Entrar
            </button>
          </form>

          <p className="register-text">
            Ainda nao tem conta? <a href="#">Criar cadastro</a>
          </p>
        </div>

        <div className="login-visual-side" aria-hidden="true">
          <div className="fitness-visual">
            <div className="visual-window">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="progress-card">
                <div className="profile-badge">
                  <Icon name="heartPulse" />
                </div>
                <div className="progress-lines">
                  <span />
                  <span />
                </div>
                <div className="progress-bar">
                  <i />
                </div>
              </div>
            </div>

            <div className="shield-card">
              <Icon name="shield" />
              <span>
                <Icon name="check" />
              </span>
            </div>

            <div className="goal-card">
              <Icon name="target" />
              <strong>Meta semanal</strong>
              <p>4 de 5 treinos completos</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

