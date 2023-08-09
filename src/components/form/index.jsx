import { useState } from 'react';
import { IMaskInput } from "react-imask";
import styles from './Form.module.css';

const Form = () => {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const imc = peso / (altura * altura);

  const grauDeObesidade = () => {
    if (imc < 18.5) {
      return <span>MENOR QUE 18,5 -	MAGREZA -	Grau 0</span>
    } else if (imc > 18.5 && imc <= 24.9) {
      return <span>ENTRE 18,5 E 24,9 -	NORMAL -	Grau 0</span>
    } else if (imc > 24.9 && imc <= 29.9) {
      return <span>ENTRE 25,0 E 29,9 -	SOBREPESO -	Grau I</span>
    } else if (imc > 29.9 && imc <= 39.9) {
      return <span>ENTRE 30,0 E 39,9 -	OBESIDADE -	Grau II</span>
    } else {
      return <span>MAIOR QUE 40,0 -	OBESIDADE GRAVE -	Grau III</span>
    }
  }

  const [resultadoEstaVisivel, setResultadoEstaVisivel] = useState(false);

  return (
    <>
      <div className={styles.container__calc}>
        <h1 className={styles.container__calc__title}>Calculadora IMC</h1>
        <form className={styles.container__calc__title__form}>
          <label htmlFor="altura">Altura:</label>
          <IMaskInput mask="0.00m" type="number" name="altura" id="altura" placeholder='0,00' onChange={e => setAltura(parseFloat(e.target.value))} required />
          <label htmlFor="peso">Peso:</label>
          <IMaskInput mask="000.00" type="number" name="peso" id="peso" placeholder='000,00' onChange={e => setPeso(parseFloat(e.target.value))} required />
          <div className={styles.container__calc__title__form__buttons}>
            <button className={styles.container__calc__title__form__buttons__buttonOne} type="button" onClick={() => setResultadoEstaVisivel(true)}>Calcular</button>
            <button className={styles.container__calc__title__form__buttons__buttonTwo} type="reset" onClick={() => setResultadoEstaVisivel(false)}>Limpar</button>
          </div>
        </form>
        {resultadoEstaVisivel && (
          <div className={styles.container__calc__result}>
            <span className={styles.container__calc__result__imc}>IMC: {imc.toFixed(2)}</span>
            <span>{grauDeObesidade()}</span>
          </div>
        )}
      </div>
    </>
  )
}

export default Form;