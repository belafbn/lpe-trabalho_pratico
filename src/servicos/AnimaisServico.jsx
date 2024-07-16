import { getToken } from '../seguranca/Autenticacao';
export const getAnimaisAPI = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/animais`,
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

export const getAnimaisPorCodigoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/animais/${codigo}`,
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

export const deleteAnimaisPorCodigoAPI = async (codigo) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/animais/${codigo}`,
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

export const cadastrarAnimalAPI = async (metodo, objeto) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/animais`,
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
