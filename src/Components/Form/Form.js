import React from "react";

import { GET_CEP } from "../../Service/Api";
import { useRecoilState } from "recoil";
import useFetch from "../../Hooks/useFetch";

import { dataState } from '../../Atom/Data'

import "./style.css";

const Formulario = () => {
  const [data, setData] = useRecoilState(dataState);
  const { request } = useFetch();
  const [inputValor, setInputValor] = React.useState("");
  const [erro, setErro] = React.useState("");

  const getCepAndSave = async () => {
    const { url, options } = GET_CEP(inputValor);
    const { json } = await request(url, options);

    const storedData = localStorage.getItem("data");
    let dataArray = [];

    if (!storedData) {
      dataArray = [json];
      setData([json]);
    } else {
      const oldData = JSON.parse(storedData);
      dataArray = [...oldData, json];
      setData(dataArray);
    }

    console.log(data)

    localStorage.setItem("data", JSON.stringify(dataArray));
  };

  const handleEnviar = () => {
    const cepRegex = /^\d{5}-?\d{3}$/; 
    if (!cepRegex.test(inputValor)) {
      setErro("Digite um CEP válido.");
      return;
    }

    getCepAndSave();

    setInputValor("");
    setErro("");
  };

  const handleCancelar = () => {
    setInputValor("");
    setErro("");
  };

  const handleClean = () => {
    setInputValor("");
    setErro("");
    localStorage.removeItem("data")
    setData([])
  }

  return (
    <div className="form-container">
      <label>
        Digite o CEP:
        <input
          type="text"
          value={inputValor}
          onChange={(e) => {
            setInputValor(e.target.value);
            setErro("");
          }}
          className={erro ? "error-input" : "field-input"}
        />
      </label>

      {erro && <p className="error-message">{erro}</p>}

      <button onClick={handleEnviar} className="send-button">
        Enviar
      </button>
      <button onClick={handleCancelar} className="cancel-button">
        Cancelar
      </button>
      <button onClick={handleClean} className="send-button">
        Limpar dados
      </button>
    </div>
  );
};

export default Formulario;