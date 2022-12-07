import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"

import jpIMG from '../../assets/mega.svg'


export const Register = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] =useState ("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnh, setCnh] = useState("");
  const [endereço, setEndereço] = useState("");
  const [placa, setPlaca] = useState("");
  


  return (
    <LayoutComponents >
      <form className="login-form">
        <span className="login-form-title"> Criar Conta </span>

        <span className="login-form-title">
          <img src={jpIMG} alt="Logo" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
          className={cpf !== "" ? "has-val input" : "input"}
          type="number"
          value={cpf}
          onChange={(e) => setCpf (e.target.value)}
          />
          <span className="focus-input" data-placeholder="Cpf"></span>
        </div>

        <div className="wrap-input">
          <input
          className={cnh !== "" ? "has-val input" : "input"}
          type="string"
          value={cnh}
          onChange={(e) => setCnh (e.target.value)}
          />
          <span className="focus-input" data-placeholder="Cnh"></span>
        </div>


        <div className="wrap-input">
          <input
          className={placa!== "" ? "has-val input" : "input"}
          type="string"
          value={placa}
          onChange={(e) => setPlaca (e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nº da Placa"></span>
        </div>


        <div className="wrap-input">
          <input
          className={endereço !== "" ? "has-val input" : "input"}
          type="string"
          value={endereço}
          onChange={(e) => setEndereço (e.target.value)}
          />
          <span className="focus-input" data-placeholder="Endereço"></span>
        </div>


        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
      

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>


        <div className="container-login-form-btn">
          <button className="login-form-btn">Criar Conta</button>
        </div>

        <div className="text-center">
          {/* <span className="txt1">Já possui conta? </span> */}
          <Link className="txt2" to="/login">
            {/* Acessar com Email e Senha. */}
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}