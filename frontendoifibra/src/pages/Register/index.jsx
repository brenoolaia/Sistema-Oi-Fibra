import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"

import jpIMG from '../../assets/logooifibra.png'


export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [senha, setSenha] = useState("");


  return (
    <LayoutComponents >
      <form className="login-form">
        <span className="login-form-title"></span>

        <span className="login-form-title">
          <img src={jpIMG} alt="Logo Oi Fibra" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome Completo"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Usuário (NOME.SOBRENOME)"></span>
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

        <div className="wrap-input">
          <input
            className={senha !== "" ? "has-val input" : "input"}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Confirme Sua Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">CADASTRAR</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui cadastro? </span>
          <Link className="txt2" to="/login">
            LOGIN
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}