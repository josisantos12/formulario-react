import { useState } from "react";

function App() {
  const [imc, setImc] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const calcularImc = () => {
    const valorImc = Math.round(peso / (altura * altura) * 100) / 100;
    if (valorImc < 10) {
      setImc("Valor muito baixo");
    } else if (valorImc > 50) {
      setImc("Valor muito alto");
    } else {
      setImc(valorImc);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'altura') {
      setAltura(value);
    } else if (name === 'peso') {
      setPeso(value);
    }
  }

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form>
        <label>
          Altura (em metros):
          <input type="number" name="altura" value={altura} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Peso (em quilos):
          <input type="number" name="peso" value={peso} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={calcularImc}>Calcular IMC</button>
      </form>
      <p>Seu IMC é: {imc}</p>
    </div>
  );
}

export default App;