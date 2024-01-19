import React, {useEffect, useState} from "react";
import Clock from "../Components/Clock";
import Table from "../Components/Table";
import Header from "../Components/Header";
import { Trash } from "react-bootstrap-icons";
import Rates from "../Components/Rates";
import {dateTimeNow, calculateRate} from "../Utilities/ratesOperation.js"

export default function Card() {
  const [isPlateBarActive, setIsPlateBarActive] = useState(false);
  const [places, setPlaces] = useState(100);
  const [code, setCode] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [report, setReport] = useState([]);
  const [result, setResult] = useState(null);

  const handleFinish = () => {
    let resultOperation = {
      cost: 0,
      durationHour: "00",
      durationMinutes: 0
    }
    const aux = document.getElementById("card");
    const code = aux.value;
    const user = report.find((item) => item.codigo === code);
    setCode(code);
    const { entrada } = user;
    setCheckIn(entrada);
    setCheckOut(dateTimeNow());
    const res = calculateRate(checkOut)
    console.log(res)
    const { cost, durationHour, durationMinutes } = res;

    if ( durationHour < 0) {
      resultOperation = {
        cost: cost,
        durationMinutes: durationMinutes
      }
      return setResult(resultOperation);
    }

    resultOperation = {
      durationHour: durationHour,
      cost: cost,
      durationMinutes: durationMinutes
    }
    setResult(resultOperation);
    aux.value = '';
  }


  const handleAdd = () => {
    const aux = document.getElementById("card");
    const codigo = aux.value;
    const entrada = dateTimeNow();
    const placa = "xxxx-xxxx";
    setReport((prevReport) => [
      ...prevReport,
      { codigo, entrada, placa }
    ]);
    setPlaces(places-1)
    aux.value = '';
  }

  return (
    <>
      <Header />
      <div className="card--container">
        <div className="card--search">
          <div className="card--counter">
            <div>
              <h3>Disponibles</h3>
              <span className={"text-white text-3xl"}>{places}</span>
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
            <Rates/>
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
              Desde: {checkIn ? checkIn : ''}
            </span>
            <span className="card--form--ouput  input" id="hasta">
              Hasta: {checkOut ? checkOut : ''}
            </span>
            <span className="card--form--ouput  input" id="tiempo">
              Tiempo:
              <div>{result ? `${result.durationHour} Horas ${result.durationMinutes} Min` : ''}</div>
            </span>
            <span className="card--form--ouput" id="total">
              Total:
              <div>${result ? ` ${result.cost}` : ''}</div>
            </span>
            <div>
              <button
                  className="card--button--pay button"
                  id="card--button--pay"
                  tabIndex="10"
                  type="button"
                  onClick={handleAdd}
              >
                Registrar
              </button>
              <button
                  className="card--button--pay button"
                  id="card--button--pay"
                  tabIndex="10"
                  type="button"
                  onClick={handleFinish}
              >
                Finalizar
              </button>
            </div>
          </form>

          <div className="card--table">
            <Table report={
                report
            } ignore={[]}/>
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
