import PropTypes from 'prop-types';

const Resultado = ({ imc, classificação }) => {
  return (
    <div>
      <p>Índice de Massa Corporal (IMC): {imc.toFixed(2)}</p>
      <p>Classificação: {classificação}</p>
    </div>
  );
};

Resultado.propTypes = {
  imc: PropTypes.number.isRequired,
  classificação: PropTypes.string.isRequired,
};

export default Resultado;