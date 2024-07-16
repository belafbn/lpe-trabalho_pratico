function Carregando(props) {

    return (
        <>
            {
                !props.carregando ? props.children :

                    <div className="d-flex align-items-center">
                        <strong role="status">Carregando...</strong>
                        <div class="spinner-border ms-auto" aria-hidden="true"></div>
                    </div>
            }
        </>
    )
}
export default Carregando