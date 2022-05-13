import './App.css';
import img from './assets/Negao_da_picona.jpg'
import { useState } from 'react'

function App() {
  const [imagem, setImagem] = useState(false)


  function click() {
    setImagem(true)
  }

  return (
    <div className="App">
      {!imagem && <button onClick={() => click()}>CLique aqui</button>}

      <div>
        {imagem && <img src={img} alt='imagem' />}
      </div>

      {imagem && <h2>Mama aqui viado</h2>}
    </div>
  );
}

export default App;
