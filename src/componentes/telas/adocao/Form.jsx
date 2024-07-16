import { useContext } from 'react';
import Alerta from '../../comuns/Alerta';
import AdocaoContext from './AdocaoContext';
import CampoSelect from '../../comuns/CampoSelect';

function Form() {
  const {
    objeto,
    handleChange,
    acaoCadastrar,
    alerta,
    listaAdotantes,
    listaAnimais,
  } = useContext(AdocaoContext);

  console.log(listaAdotantes);

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
              Edição de Adocao
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
                <CampoSelect
                  value={objeto.animal}
                  id="txtAnimal"
                  name="animal"
                  label="Animal"
                  onchange={handleChange}
                  msgvalido="OK certo"
                  msginvalido="Informe a animal"
                  requerido={true}
                >
                  {listaAnimais.map((dog) => (
                    <option key={dog.codigo} value={dog.codigo}>
                      {dog.nome}
                    </option>
                  ))}
                </CampoSelect>
                <CampoSelect
                  value={objeto.adotante}
                  id="txtAdotante"
                  name="adotante"
                  label="Adotante"
                  onchange={handleChange}
                  msgvalido="OK certo"
                  msginvalido="Informe a adotante"
                  requerido={true}
                >
                  {listaAdotantes.map((dog) => (
                    <option key={dog.codigo} value={dog.codigo}>
                      {dog.nome}
                    </option>
                  ))}
                </CampoSelect>
              </div>

              <div className="mb-3">
                <label for="txtData" className="form-label">
                  Data de Adocao
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtData"
                  placeholder="Insira a data"
                  required
                  name="data_adocao"
                  value={objeto.data_adocao}
                  onChange={handleChange}
                />
                <div className="valid-feedback">Nome OK!</div>
                <div className="invalid-feedback">Informe o nome!</div>
              </div>
              <div className="mb-3">
                <label for="txtObservacao" className="form-label">
                  Observaçao
                </label>
                <input
                  className="form-control"
                  id="txtObservacao"
                  placeholder="Informe a observacao"
                  name="observacao"
                  value={objeto.observacao}
                  onChange={handleChange}
                />
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
