import { useState, useEffect } from 'react';
import AdocaoContext from './AdocaoContext';
import Tabela from './Tabela';
import Form from './Form';
import { getAnimaisAPI } from '../../../servicos/AnimaisServico';
import { getAdotantesAPI } from '../../../servicos/AdotanteServico';
import {
  cadastraAdocaoAPI,
  deleteAdocaoPorCodigoAPI,
  getAdocaoAPI,
  getAdocaoPorCodigoAPI,
} from '../../../servicos/AdocaoServico';
import Carregando from '../../comuns/Carregando';
import WithAuth from '../../../seguranca/WithAuth';
import { useNavigate } from 'react-router-dom';

function Adocao() {
  let navigate = useNavigate();
  const [alerta, setAlerta] = useState({ status: '', message: '' });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [listaAdotantes, setListaAdotantes] = useState([]);
  const [listaAnimais, setListaAnimais] = useState([]);
  const [editar, setEditar] = useState(false);
  const [objeto, setObjeto] = useState({
    codigo: 0,
    nome: '',
    descricao: '',
    quantidade_estoque: '',
    valor: '',
    ativo: '',
    data_cadastro: new Date().toISOString().slice(0, 10),
    categoria: '',
  });
  const [carregando, setCarregando] = useState(true);

  const novoObjeto = () => {
    setEditar(false);
    setAlerta({ status: '', message: '' });
    setObjeto({
      codigo: 0,
      adotante: 0,
      observacao: '',
      animal: 0,
      data_adocao: '',
    });
  };

  const editarObjeto = async (codigo) => {
    try {
      setObjeto(await getAdocaoPorCodigoAPI(codigo));
      setEditar(true);
      setAlerta({ status: '', message: '' });
    } catch (err) {
      window.location.reload();
      navigate('/login', { replace: true });
    }
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    const metodo = editar ? 'PUT' : 'POST';
    try {
      let retornoAPI = await cadastraAdocaoAPI(objeto, metodo);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      setObjeto(objeto);
      if (!editar) {
        setEditar(true);
      }
    } catch (err) {
      window.location.reload();
      navigate('/login', { replace: true });
    }
    recuperaAdocao();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  const recuperaAdocao = async () => {
    try {
      setCarregando(true);
      setListaObjetos(await getAdocaoAPI());
      setCarregando(false);
    } catch (err) {
      window.location.reload();
      navigate('/login', { replace: true });
    }
  };

  const recuperaAdotantes = async () => {
    setListaAdotantes(await getAdotantesAPI());
  };
  const recuperaAnimais = async () => {
    setListaAnimais(await getAnimaisAPI());
  };

  const remover = async (codigo) => {
    try {
      if (window.confirm('Deseja remover este objeto?')) {
        let retornoAPI = await deleteAdocaoPorCodigoAPI(codigo);
        setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
        recuperaAdocao();
      }
    } catch (err) {
      window.location.reload();
      navigate('/login', { replace: true });
    }
  };

  useEffect(() => {
    recuperaAdotantes();
    recuperaAdocao();
    recuperaAnimais();
  }, []);

  return (
    <AdocaoContext.Provider
      value={{
        alerta,
        setAlerta,
        listaObjetos,
        remover,
        objeto,
        editar,
        acaoCadastrar,
        handleChange,
        novoObjeto,
        editarObjeto,
        listaAdotantes,
        listaAnimais,
      }}
    >
      <Carregando carregando={carregando}>
        <Tabela />
      </Carregando>
      <Form />
    </AdocaoContext.Provider>
  );
}

export default WithAuth(Adocao);
