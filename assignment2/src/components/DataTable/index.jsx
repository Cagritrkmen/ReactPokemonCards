import React from 'react'
import "./style.css"
function DataTable({data}) {
    return (
        <div className="grid-container">
            {data.map((pokemon) => (
            <div key={pokemon.id} className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="Avatar"  style={{ width: '150px', height: '150px' }} />

                    </div>
                    <div className="flip-card-back">
                        <h1>{pokemon.name}</h1>
                        <p>Type: {pokemon.type}</p>
                        <p>Experience: {pokemon.experience}</p>
                    </div>
                </div>
            </div>))}
        </div>
    )
}

export default DataTable
