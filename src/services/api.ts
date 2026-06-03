const BASE_URL = 'http://localhost:8080';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!response.ok) throw new Error(`Erro ${response.status}`);
  return response.json();
}

export const atletaService = {
  cadastrar: (data: unknown) =>
    request('/atletas', { method: 'POST', body: JSON.stringify(data) }),

  buscarPorId: (id: number) =>
    request(`/atletas/${id}`),

  atualizar: (id: number, data: unknown) =>
    request(`/atletas/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
};