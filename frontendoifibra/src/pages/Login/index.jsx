import { Link } from "react-router-dom";
import { useState } from "react";

import jpIMG from "../../assets/logooifibra.png";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title"></span>

        <span className="login-form-title">
          <img src={jpIMG} alt="Logo Oi Fibra" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Usuário"></span>
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
          <button className="login-form-btn">LOGIN</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui cadastro? </span>
          <Link className="txt2" to="/register">
            CADASTRAR
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
