import { useState, useEffect } from 'react';
import AnimaisContext from './AnimaisContext';
import {
  cadastrarAnimalAPI,
  deleteAnimaisPorCodigoAPI,
  getAnimaisAPI,
  getAnimaisPorCodigoAPI,
} from '../../../servicos/AnimaisServico';
import Tabela from './Tabela';
import Carregando from '../../comuns/Carregando';
import Form from './Form';
import WithAuth from '../../../seguranca/WithAuth';
import { useNavigate } from 'react-router-dom';

function Animais() {
  let navigate = useNavigate();

  const [alerta, setAlerta] = useState({ status: '', message: '' });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [editar, setEditar] = useState(false);
  const [objeto, setObjeto] = useState({ codigo: '', nome: '' });
  const [carregando, setCarregando] = useState(true);

  console.log(objeto);

  const novoObjeto = () => {
    setEditar(false);
    setAlerta({ status: '', message: '' });
    setObjeto({ codigo: 0, nome: '' });
  };
  const editarObjeto = async (codigo) => {
    try {
      setObjeto(await getAnimaisPorCodigoAPI(codigo));
      setEditar(true);
      setAlerta({ status: '', message: '' });
    } catch (err) {
      alert('Não foi possível editar');
    }
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    let metodo = editar ? 'PUT' : 'POST';
    try {
      let retornoAPI = await cadastrarAnimalAPI(metodo, objeto);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      setObjeto(objeto);
      if (!editar) {
        setEditar(true);
      }
    } catch (err) {
      alert('Não foi possível cadastrar');
    }
    recuperaCategorias();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  const recuperaCategorias = async () => {
    try {
      setCarregando(true);
      setListaObjetos(await getAnimaisAPI());
    } catch (err) {
      alert('Não foi possível listar');
    } finally {
      setCarregando(false);
    }
  };

  const remover = async (codigo) => {
    try {
      if (window.confirm('Deseja remover este objeto?')) {
        let retornoAPI = await deleteAnimaisPorCodigoAPI(codigo);
        setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
        recuperaCategorias();
      }
    } catch (err) {
      alert('Não foi possível remover');
    }
  };

  useEffect(() => {
    recuperaCategorias();
  }, []);

  return (
    <AnimaisContext.Provider
      value={{
        alerta,
        listaObjetos,
        remover,
        objeto,
        editar,
        handleChange,
        novoObjeto,
        acaoCadastrar,
        editarObjeto,
      }}
    >
      <Carregando carregando={carregando}>
        <Tabela />
      </Carregando>
      <Form />
    </AnimaisContext.Provider>
  );
}
export default WithAuth(Animais);
