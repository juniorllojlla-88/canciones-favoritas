
import Cards from './Cards.jsx';
import { useState } from "react";

const Listas = () => {
    const musicas = [
        {
            id: 1,
            nombre: "Grupo Néctar - Suéltame",
            imagen: "nectar.jpg"
        },
        {
            id: 2,
            nombre: "Makano - Para Que Vuelves A Mi Vida",
            imagen: "makano.jpg"
        },
        {
            id: 3,
            nombre: "Los Temerarios - Sé Que Te Amo",
            imagen: "temerarios.jpg"
        },
    ];

    const [total, setTotal] = useState(0);
    const [busqueda, setBusqueda] = useState("");

    const musicasFiltradas = musicas.filter((musica) =>
        musica.nombre.toLowerCase().includes(busqueda.trim().toLowerCase())
    );

    return (
        <div
            style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Arial, sans-serif',
                minHeight: '100vh'
            }}
        >
            <h1>Mis canciones favoritas</h1>

            <h2>Total de likes de canciones: {total}</h2>

            <input
                style={{
                    padding: '10px',
                    marginBottom: '20px',
                    width: '300px',
                    maxWidth: '90%',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxSizing: 'border-box'
                }}
                type="text"
                placeholder="Ingrese nombre de una canción"
                value={busqueda}
                onChange={(e) => {
                    setBusqueda(e.target.value);
                }}
            />

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '10px',
                    maxWidth: '900px',
                    width: '100%'
                }}
            >
                {musicasFiltradas.length === 0 && (
                    <p style={{ color: "#999", fontSize: "18px" }}>
                        No se encontraron canciones con el nombre "{busqueda}"
                    </p>
                )}

                {musicasFiltradas.map((musica) => (
                    <Cards
                        key={musica.id}
                        nombre={musica.nombre}
                        img={musica.imagen}
                        onLike={() => {
                            setTotal((anterior) => anterior + 1);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Listas;
