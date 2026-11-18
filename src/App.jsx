import materiais from './data/materiais.json'
import { useState } from 'react'
import './App.css'

function App() {
  const [nomeBuscado, setNomeBuscado] = useState("")
  const [pesoNota, setPesoNota] = useState("")
  const [materialSelecionado, setMaterialSelecionado] = useState(null)
  const materiaisFiltrados = materiais.filter((item) => item.nome.toLowerCase().includes(nomeBuscado.toLowerCase()))

  return (
    <>
      <div><h1>Quantidade NF</h1></div>

      <input
        type="text"
        placeholder="Digite o nome do material (ex: chapa #28)..."
        value={nomeBuscado}
        onChange={(e) => setNomeBuscado(e.target.value)}
      />

      <input
        type="number"
        placeholder="Peso da nota (kg)"
        value={pesoNota}
        onChange={(e) => setPesoNota(e.target.value)}
      />

      <p>Itens encontrados: {materiaisFiltrados.length}</p>

      <ul>
        {materiaisFiltrados.map((item) => (
          <li key={item.id} onClick={() => setMaterialSelecionado(item)}>
            {item.nome}
          </li>
        ))}
      </ul>

       {materialSelecionado && pesoNota > 0 && (
        <p>
          { `A quantidade na nota é de ${Math.round(pesoNota / materialSelecionado.pesoUnit)} unidades` }
        </p>
      )}

    </>
  )



}

export default App