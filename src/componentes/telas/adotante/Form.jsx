import { useContext } from 'react';
import Alerta from '../../comuns/Alerta';
import AdotanteContext from './AdotanteContext';

function Form() {
  const { objeto, handleChange, acaoCadastrar, alerta } =
    useContext(AdotanteContext);

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
              Edição de Adotantes
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
                <label for="txtTelefone" className="form-label">
                  Telefone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtTelefone"
                  placeholder="Insira o telefone"
                  required
                  name="telefone"
                  value={objeto.telefone}
                  onChange={handleChange}
                />
                <div className="valid-feedback">telefone OK!</div>
                <div className="invalid-feedback">Informe o telefone!</div>
              </div>
              <div className="mb-3">
                <label for="txtEndereco" className="form-label">
                  Endereco
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtEndereco"
                  placeholder="Insira o Endereco"
                  required
                  name="endereco"
                  value={objeto.endereco}
                  onChange={handleChange}
                />
                <div className="valid-feedback">Endereco OK!</div>
                <div className="invalid-feedback">Informe o Endereco!</div>
              </div>
              <div className="mb-3">
                <label for="txtEmail" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtEmail"
                  placeholder="Insira o Email"
                  required
                  name="email"
                  value={objeto.email}
                  onChange={handleChange}
                />
                <div className="valid-feedback">Email OK!</div>
                <div className="invalid-feedback">Informe o Email!</div>
              </div>
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
