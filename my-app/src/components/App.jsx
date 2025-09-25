import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Note from './Note.jsx';
import notas from '../notas.js';

function createNote(Nota) {
    return (
        <Note
            key={Nota.id}
            titulo={Nota.titulo}
            conteudo={Nota.conteudo}
            data={Nota.data}
        />
    );
}

function App() {
    return (
        <div>
            <Header />
            {notas.map(createNote)}
            <Footer />
        </div>
    );
}

export default App;