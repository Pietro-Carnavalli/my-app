function Note(props) {
    return (<div className = "note">
        <h1>{props.titulo}</h1>
        <p>{props.conteudo}</p>
        <p>{props.data}</p>
    </div>)
}

export default Note;

