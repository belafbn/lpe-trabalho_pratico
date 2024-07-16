import { useContext } from 'react';
import Alerta from '../../comuns/Alerta';
import AnimaisContext from './AnimaisContext';
import CampoSelect from '../../comuns/CampoSelect';

function Form() {
  const { objeto, handleChange, acaoCadastrar, alerta } =
    useContext(AnimaisContext);

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        'submit',
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        },
        false
      );
    });
  })();

  return (
    <div
      className="modal fade"
      id="modalEdicao"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edição de Categorias
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            id="formulario"
            onSubmit={acaoCadastrar}
            className="needs-validation"
            noValidate
          >
            <div className="modal-body">
              <Alerta alerta={alerta} />
              <div className="mb-3">
                <label for="txtCodigo" className="form-label">
                  Código
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="txtCodigo"
                  readOnly
                  name="codigo"
                  value={objeto.codigo}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="txtNome" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtNome"
                  placeholder="Insira o nome"
                  required
                  name="nome"
                  value={objeto.nome}
                  onChange={handleChange}
                />
                <div className="valid-feedback">Nome OK!</div>
                <div className="invalid-feedback">Informe o nome!</div>
              </div>
              <div className="mb-3">
                <label for="txtEspecie" className="form-label">
                  Espécie
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtEspecie"
                  placeholder="Insira a espécie"
                  required
                  name="especie"
                  value={objeto.especie}
                  onChange={handleChange}
                />
                <div className="valid-feedback">Espécie OK!</div>
                <div className="invalid-feedback">Informe a espécie!</div>
              </div>
              <div className="mb-3">
                <label for="txtGenero" className="form-label">
                  Genero
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtGenero"
                  placeholder="Insira o Genero"
                  required
                  name="genero"
                  value={objeto.genero}
                  onChange={handleChange}
                />
                <div className="valid-feedback">Genero OK!</div>
                <div className="invalid-feedback">Informe o Genero!</div>
              </div>
              <div className="mb-3">
                <label for="txtIdade" className="form-label">
                  Idade
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtIdade"
                  placeholder="Insira a Idade"
                  required
                  name="idade"
                  value={objeto.idade}
                  onChange={handleChange}
                />
                <div className="valid-feedback">Idade OK!</div>
                <div className="invalid-feedback">Informe a Idade!</div>
              </div>
              <CampoSelect
                    value={objeto.ativo}
                    id="txtAtivo"
                    name="ativo"
                    label="Ativo"
                    onchange={handleChange}
                    msgvalido="OK certo"
                    msginvalido="Informe se está ativo"
                    requerido={true}
                  >
                    <option value={true}>Sim</option>
                    <option value={false}>Não</option>
                  </CampoSelect>
            </div>
            <div className="mb-3">
                <label for="txtData" className="form-label">
                  Data de Cadastro
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtData"
                  placeholder="Insira a data"
                  required
                  name="data_cadastro"
                  value={objeto.data_cadastro}
                  onChange={handleChange}
                />
                <div className="valid-feedback">Nome OK!</div>
                <div className="invalid-feedback">Informe a data!</div>
             </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button type="submit" className="btn btn-success">
                Salvar <i className="bi bi-save"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Form;
