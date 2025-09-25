import React from 'react';

function Note({ titulo, conteudo, data }) {
    return (
        <div className="note">
            <h2>{titulo}</h2>
            <p>{conteudo}</p>
            <small>{data}</small>
        </div>
    );
}

export default Note;