import React, { useContext, useEffect, useState, useRef } from "react";
import {
  Power,
  ArrowBarDown,
  ArrowsMove,
  Ethernet,
  Ban,
  WifiOff,
  Wifi,
} from "react-bootstrap-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { MainContext } from "../Context/context";
import Separator from "../Components/Separator";

export default function Header() {
  const {
    usuario,
    message,
  } = useContext(MainContext);
  const router = useRouter();

  const handlerCloseSession = async () => router.push("/caja/cierre");
  const onMinimize = () => window.ipc.send("window:minimize");

  return (
    <header className="">
      <div className="flex justify-between p-3">
        <div className="flex items-center">
          <img
            className="header--logo"
            src="/images/logo.svg"
            alt="Logo Soluciones Plan B"
          />
        </div>
        <div className="flex justify-content items-center">
          {message != "" && <div className="text-white">{message}</div>}
        </div>
        <div className="flex items-center">
          <div className="">V1.11.63</div>
          <Separator />
          <button className="" onClick={onMinimize}>
            <ArrowBarDown size="32" color="white" />
          </button>
          <Separator />
          <button
            className=""
            tabIndex="2"
            type="button"
            onClick={handlerCloseSession}
          >
            <Power size="32" color="white" />
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center bg-purple-700 h-[30px]">
          <div className="flex">
            {usuario?.parqueadero?.tarjeta && (
              <div className="mx-2 hover:underline">
                <Link className="mx-2 hover:underline" href="/card" alt="Panel">
                  Tarjeta (F7)
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
