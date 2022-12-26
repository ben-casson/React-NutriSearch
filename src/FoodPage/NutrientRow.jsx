import { useState, useEffect } from 'react';
import './NutrientRow.css';
// import uuid from 'react-uuid';

export default function NutrientRow({
    nutrientsArray,
    foodDetails,
    portionAmount,
}) {
    const [nutrientsList, setNutrientsList] = useState([]);
    const [portionQuantity, setPortionQuantity] = useState(0);
    const [mockDV, setMockDV] = useState({
        carbs: 15
    })


    const createNutrientRow = (nutrientType) => {
        return (
            <>
                <p className='nutrient-name'>{nutrientType.nutrient.name}</p>
                <p className='nutrient-amount'>
                    {(portionAmount
                        ? Math.round(
                              nutrientType.amount * portionQuantity * 10
                          ) / 1000
                        : nutrientType.amount) +
                        '' +
                        nutrientType.nutrient.unitName}
                </p>
                <p className='nutrient-dv'>{(portionAmount
                        ? (Math.round(
                              nutrientType.amount * portionQuantity * 10 / mockDV.carbs
                          ) / 10) 
                        : Math.round(nutrientType.amount / mockDV.carbs * 1000) / 10)}%</p>
            </>
        );
    };

    useEffect(() => {
        if (nutrientsArray.length > 0) setNutrientsList([...nutrientsArray]);
    }, [nutrientsArray]);

    useEffect(() => {
        setPortionQuantity(portionAmount);
    }, [portionAmount]);

    // useEffect(() => {
    //     setMockDV()
    // },[portionAmount])

    return (
        <>
            {nutrientsList.length != 0 && (
                <>
                    {nutrientsList.map((nutrientType, i) =>
                        i % 2 == 0 ? (
                            <div
                                key={Math.random() * 20000}
                                className='nutrient-row'
                            >
                                {createNutrientRow(nutrientType)}
                            </div>
                        ) : (
                            <div
                                key={Math.random() * 20000}
                                className='nutrient-row dark-background'
                            >
                                {createNutrientRow(nutrientType)}
                            </div>
                        )
                    )}
                </>
            )}
        </>
    );
}
