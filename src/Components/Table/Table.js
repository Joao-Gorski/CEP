import React from "react";

import { useRecoilState } from "recoil";

import { dataState } from '../../Atom/Data'

import './style.css'

const Table = () => {
  const [newData] = useRecoilState(dataState);
  const getData = localStorage.getItem("data")
  const oldData = JSON.parse(getData)

  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Cep</th>
          <th>Rua</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>DDD</th>
        </tr>
      </thead>
      <tbody>
        {!newData && !!oldData && oldData.map((item, key) => (
          <tr key={key}>
            <td>{item.cep}</td>
            <td>{item.logradouro}</td>
            <td>{item.bairro}</td>
            <td>{item.localidade}</td>
            <td>{item.uf}</td>
            <td>{item.ddd}</td>
          </tr>
        ))}
        
        {!!newData && newData.map((item, key) => (
          <tr key={key}>
            <td>{item.cep}</td>
            <td>{item.logradouro}</td>
            <td>{item.bairro}</td>
            <td>{item.localidade}</td>
            <td>{item.uf}</td>
            <td>{item.ddd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;