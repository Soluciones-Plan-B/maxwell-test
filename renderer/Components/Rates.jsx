import React, { useState } from 'react';
import Image from "next/image";

export default function Rates() {
    const [selectedRate, setSelectedRate] = useState(null);

    const handleRateClick = (rateId) => {
        setSelectedRate(rateId);
    };

    const rates = [
        {
            id: 1,
            name: "Diuma",
            src: "/images/icon_car.png"
        },
        {
            id: 2,
            name: "Nocturna",
            src: "/images/icon_car.png"
        },
        {
            id: 3,
            name: "Feriados",
            src: "/images/icon_car.png"
        },
        {
            id: 4,
            name: "Noches",
            src: "/images/icon_car.png"
        },
        {
            id: 5,
            name: "Motos",
            src: "/images/icon_car.png"
        }
    ];

    return (
        <>
            <div className={"container-rates"}>
                {rates.map((rate) => (
                    <button
                        className={`rates-cards ${selectedRate === rate.id ? 'selected' : ''}`}
                        key={rate.id}
                        onClick={() => handleRateClick(rate.id)}
                    >
                        <Image className={"bg-cover"} alt={"Icon car"} height={55} width={55} src={rate.src}/>
                        <p>{rate.name}</p>
                    </button>
                ))}
            </div>
        </>
    );
}