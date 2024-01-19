// Function to format the date in YYYY-MM-DD HH:mm:ss
import {useState} from "react";

export const calculateRate = (date) => {
    let result = {
        const: 0,
        durationHour: 0,
        durationMinutes: 0
    }
    const now = new Date();
    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes();

    const dateAux = date.split(" ");
    const timeAux = dateAux[1]?.split(":");

    const hours = parseInt(timeAux[0]);
    const minutes = parseInt(timeAux[1]);

    const elapsedMinutes = (nowHours - hours) * 60 + (nowMinutes - minutes);

    if (elapsedMinutes <= 15) {
        result = {
            cost: 0.25,
            durationHour: nowHours - hours,
            durationMinutes: nowMinutes - minutes
        }
        return result;
    } else if (elapsedMinutes <= 30) {
        result = {
            cost: 0.5,
            durationHour: nowHours - hours,
            durationMinutes: nowMinutes - minutes
        }
        return result;
    } else if (elapsedMinutes <= 45) {
        result = {
            cost: 0.75,
            durationHour: nowHours - hours,
            durationMinutes: nowMinutes - minutes
        }
        return result;
    } else if (elapsedMinutes <= 60) {
        result = {
            cost: 1,
            durationHour: nowHours - hours,
            durationMinutes: nowMinutes - minutes
        }
        return result;
    } else {
        // Handle intervals greater than 60 minutes
        const additionalHours = Math.floor(elapsedMinutes / 60);

        // You can adjust the rate for intervals greater than 60 minutes according to your needs
        const rateForAdditionalHours = 0.5; // Por ejemplo, tarifa adicional de 0.50 por cada hora adicional
        result = {
            const: 1.0 + additionalHours * rateForAdditionalHours,
            durationHour: nowHours - hours,
            durationMinutes: nowMinutes - minutes
        }
        return result;
    }
};

export const dateTimeNow = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    const time = `${hours}:${minutes}:${seconds}`;

    return `${year}-${month}-${day} ${time}`;
};