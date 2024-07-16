import { getToken } from '../seguranca/Autenticacao';
export const getAdocaoAPI = async () => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/adocao`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: getToken(),
    },
  });
  const data = await response.json();
  return data;
};

export const getAdocaoPorCodigoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/adocao/${codigo}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: getToken(),
      },
    }
  );
  const data = await response.json();
  return data;
};

export const deleteAdocaoPorCodigoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/adocao/${codigo}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: getToken(),
      },
    }
  );
  const data = await response.json();
  return data;
};

export const cadastraAdocaoAPI = async (objeto, metodo) => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/adocao`, {
    method: metodo,
    headers: {
      'Content-Type': 'application/json',
      authorization: getToken(),
    },
    body: JSON.stringify(objeto),
  });
  const data = await response.json();
  return data;
};
