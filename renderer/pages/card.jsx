import React, { useState} from "react";
import Clock from "../Components/Clock";
import Table from "../Components/Table";
import Header from "../Components/Header";
import { Trash } from "react-bootstrap-icons";

export default function Card() {
  const [isPlateBarActive, setIsPlateBarActive] = useState(false);

  return (
    <>
      <Header />
      <div className="card--container">
        <div className="card--search">
          <div className="card--counter">
            <div>
              <h3>Disponibles</h3>
              {/* Agregar aqui espacios disponibles */}
            </div>
          </div>
          <div className="card--search-div">
            <h1 className="card--title">Control Tarjetas</h1>
            <div>
              <input
                type="number"
                id="card"
                className="card--search--bar input"
                min="0"
              />
              <button
                type="button"
                tabIndex="4"
                className="card--search--clear button"
              >
                <Trash size={25} color="white" />
              </button>
            </div>
          </div>
          <Clock />
        </div>
        <div className="card--main">
          <div className="card--info">
            {/* Implente las tarifas aqui */}


            <div className="card--switch">
              <label htmlFor="">
                Placa:{" "}
                <input
                  type="checkbox"
                />
              </label>
            </div>
          </div>
          <form className="card--form">
            <span className="card--form--ouput  input" id="desde">
              Desde: {}
            </span>
            <span className="card--form--ouput  input" id="hasta">
              Hasta: {}
            </span>
            <span className="card--form--ouput  input" id="tiempo">
              Tiempo:
              <div>{}</div>
            </span>
            <span className="card--form--ouput" id="total">
              Total:
              <div>${}</div>
            </span>
            <div>
              <button
                className="card--button--pay button"
                id="card--button--pay"
                tabIndex="10"
                type="button"
              >
                Finalizar
              </button>
            </div>
          </form>

          <div className="card--table">
            <Table report={[
              {
                codigo: "xxxxxxxxxx",
                entrada: "YYYY-MM-DD HH:mm:ss",
                "placa": "xxxx-xxxx"
              }
            ]} ignore={[]} />
          </div>
        </div>

        {isPlateBarActive && (
          <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
            <input
              id="plate-bar"
              className="w-[80vh] h-[7vh] rounded px-2 text-center border boder-solid border-blue-700 text-3xl"
              placeholder="XXXX-XXXX"
            />
            <button
              type="button"
              className="p-4 rounded text-white bg-red-500"
              >Cancelar</button>
          </div>
        )}
      </div>
    </>
  );
}
