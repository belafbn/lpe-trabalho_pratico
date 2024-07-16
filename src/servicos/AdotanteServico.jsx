import { getToken } from '../seguranca/Autenticacao';
export const getAdotantesAPI = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/adotantes`,
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

export const getAdotantesPorCodigoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/adotantes/${codigo}`,
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

export const deleteAdotantesPorCodigoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/adotantes/${codigo}`,
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

export const cadastrarAdotanteAPI = async (metodo, objeto) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/adotantes`,
    {
      method: metodo,
      headers: {
        'Content-Type': 'application/json',
        authorization: getToken(),
      },
      body: JSON.stringify(objeto),
    }
  );
  const data = await response.json();
  return data;
};
