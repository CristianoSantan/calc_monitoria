import React, { useState } from "react";
import Header from './Header';

export default function Calc() {
    const [total, setTotal] = useState(0);
    const [operacao, setOperacao] = useState('');
    const [resposta, setResposta] = useState(false);
    const [valor, setValor] = useState([]);
    const [formData, setFormData] = useState({
        valor1: '',
        valor2: '',
        operador: '',
    })

    const onChangeInput = (e) => 
        setFormData({ ...formData, [e.target.name]: e.target.value});

    let operador = formData.operador;
    let n1 = Number(formData.valor1);
    let n2 = Number(formData.valor2);

    function calcular(e) {
        e.preventDefault();

        setValor([formData.valor1, formData.valor2]);

        if (operador === '+') {
            setTotal(n1 + n2);
            setOperacao('soma');
          } else if (operador === '-') {
            setTotal(n1 - n2);
            setOperacao('subtração');
          } else if (operador === '*') {
            setTotal(n1 * n2);
            setOperacao('multiplicação');
          } else if (operador === '/') {
            setTotal(n1 / n2);
            setOperacao('divisão');
          }

          setResposta(true);

          setFormData({
              valor1: '',
              valor2: '',
              operador: ''
          })
    }
    
    return (
        <>
        <Header title="Calculadora Recode Pro" />
        <section className="container">
            <div className="p-4">
            <form onSubmit={calcular}>
                <div className="form-group">
                <label htmlFor="valor1">Digite o primeiro valor:</label>
                <input
                    type="number"
                    className="form-control"
                    name="valor1"
                    placeholder="Exemplo: 1"
                    onChange={onChangeInput}
                    value={formData.valor1}
                />
                </div>
                <div className="form-group">
                <label htmlFor="operador">Digite um operador válido:</label>
                <input
                    type="text"
                    className="form-control"
                    name="operador"
                    placeholder="Exemplo: +, -, * ou /."
                    onChange={onChangeInput}
                    value={formData.operador}
                />
                </div>
                <div className="form-group">
                <label htmlFor="valor2">Digite o segundo valor:</label>
                <input
                    type="number"
                    className="form-control"
                    name="valor2"
                    placeholder="Exemplo: 2"
                    onChange={onChangeInput}
                    value={formData.valor2}
                />
                </div>
                <button type="submit" className="btn btn-primary" id="buttonSomar">
                Calcular
                </button>
            </form>
            </div>
            <div className="p-4">
                {resposta === true && (
                    <div style={style.resposta}>
                        A {operacao} entre {valor[0]} e {valor[1]} é igual a {total}
                    </div>
                )}
            </div>
        </section>
        </>
    )
}

const style = {
    resposta: {
        padding: '10px',
        fontSize: '20px',
        background: 'blue',
        borderRadius: '10px',
        color: 'white',
        boxShadow: '2px 2px 8px black'
      }
}
