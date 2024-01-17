import React, { useState, useRef, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Person, Lock } from "react-bootstrap-icons";
import { MainContext } from "../Context/context";

export default function Login() {
  const router = useRouter();
  const { setUsuario } = useContext(MainContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const buttonRef = useRef(null);
  const passwordRef = useRef(null);

  const handlerUserName = (event) => setUserName(event.target.value);
  const handlerPassword = (event) => setPassword(event.target.value);

  const SubmitHandler = async () => {
    if (!userName && !password) {
      setMessage("Campos vacios !");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    window.ipc.send("user:search", {
      channel: "search-user",
      collection: "Usuario",
      query: { usuario: { $eq: userName }, clave: { $eq: password } },
      options: {},
    });
  };

  const handlerKeyDownUserName = (ev) => {
    if (ev.key === "Enter") passwordRef.current.focus();
  };

  const handlerKeyDownButton = (ev) => {
    if (ev.key === "Enter") buttonRef.current.focus();
  };

  const handlerWhatsApp = () => alert("Pronto podrás comunicarte con nosotros por WhatsApp !");

  const handlerCloseMaxWell = () => window.ipc.send("close-maxwell");

  useEffect(() => {
    const listener = window.ipc.on("search-user", (response) => {
        sessionStorage.setItem("usuario", JSON.stringify(response));
        setUsuario(() => response);
        if (response) router.push("/card");
    });

    return () => {
      listener();
    }
  }, [])

  return (
    <main className="login">
      <img
        className="login--logo"
        src="/images/logo_spb.png"
        alt="Soluciones Plan B"
      />
      <button
        onClick={handlerWhatsApp}
        className="login--whatsapp--button"
        type="button"
      >
        <img
          className="login--whatsapp"
          src="/images/icon_whatsapp.png"
          alt="Suport Conctact by Whatsapp"
        /> 
      </button>

      <button
        type="button"
        className="px-5 py-2 bg-purple-700 rounded mb-2"
        onClick={handlerCloseMaxWell}
      >
        Cerrar
      </button>

      <form className="login--form">
        <h1 className="login--form--title">Iniciar Sesión</h1>
        <div className="login--wrapperInput">
          <Person width="32" color="black" />
          <input
            className="login--input"
            onKeyDown={handlerKeyDownUserName}
            type="text"
            autoComplete="username"
            value={userName}
            onChange={handlerUserName}
          />
        </div>
        <div className="login--wrapperInput">
          <Lock width="32" color="black" />
          <input
            className="login--input"
            ref={passwordRef}
            onKeyDown={handlerKeyDownButton}
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={handlerPassword}
          />
        </div>
        {message && (
          <div className="rounded border border-solid border-red-700 mb-4 bg-red-100 text-black py-1 px-1 text-sm">
            {message}
          </div>
        )}
        <button
          className="login--button button"
          type="button"
          ref={buttonRef}
          onClick={SubmitHandler}
        >
          Ingresar
        </button>
      </form>
    </main>
  );
}
