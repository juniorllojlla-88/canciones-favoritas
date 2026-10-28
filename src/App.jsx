
import { useState } from 'react';

function App() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="contenedor">
      <h1>Mi tarea de React</h1>
      <h2>Ventanas emergentes</h2>

      <button onClick={() => setMostrar(true)}>
        Abrir ventana emergente
      </button>

      {mostrar && (
        <div className="fondo">
          <div className="ventana">
            <h2>¡Bienvenido!</h2>
            <p>Esta es mi primera ventana emergente en React.</p>

            <button onClick={() => setMostrar(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

