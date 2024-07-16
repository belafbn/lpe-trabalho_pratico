import { useContext } from 'react';
import AdotanteContext from './AdotanteContext';
import Alerta from '../../comuns/Alerta';

function Tabela() {
  const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } =
    useContext(AdotanteContext);

  console.log(listaObjetos);

  return (
    <div style={{ padding: '20px' }}>
      <h1> Adotantes </h1>
      <Alerta alerta={alerta} />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalEdicao"
        onClick={() => novoObjeto()}
      >
        Novo <i className="bi bi-file-plus"></i>
      </button>
      {listaObjetos.length === 0 && <h1>Nenhum registro encontrado</h1>}
      {listaObjetos.length > 0 && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: 'center' }}>
                  Ações
                </th>
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">Telefone</th>
                <th scope="col">Endereco</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {listaObjetos.map((objeto) => (
                <tr key={objeto.codigo}>
                  <td align="center">
                    <button
                      className="btn btn-primary"
                      title="Editar"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEdicao"
                      onClick={() => editarObjeto(objeto.codigo)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-error"
                      title="Remover"
                      onClick={() => remover(objeto.codigo)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                  <th scope="row">{objeto.codigo}</th>
                  <td>{objeto.nome}</td>
                  <td>{objeto.telefone}</td>
                  <td>{objeto.endereco}</td>
                  <td>{objeto.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default Tabela;
