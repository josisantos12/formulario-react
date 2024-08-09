import  { useState } from 'react';

const Form = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularImc = (altura, peso) => {
    const imc = peso / (altura * altura);
    return imc;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const imc = calcularImc(altura, peso);
    setImc(imc);
    classificarImc(imc);
  };

  const classificarImc = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Magreza');
    } else if (imc < 25) {
      setClassificacao('Normal');
    } else if (imc < 30) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Altura (m):
        <input type="number" value={altura} onChange={(event) => setAltura(event.target.value)} />
      </label>
      <br />
      <label>
        Peso (kg):
        <input type="number" value={peso} onChange={(event) => setPeso(event.target.value)} />
      </label>
      <br />
      <button type="submit">Calcular IMC</button>
      {imc !== null && (
        <div>
          <p>IMC: {imc.toFixed(2)}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </form>
  );
};

export default Form;