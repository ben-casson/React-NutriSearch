import { useState, useEffect } from 'react';
import './NutrientRow.css';
import uuid from 'react-uuid';

export default function NutrientRow({ nutrientsArray }) {
    const [nutrientsList, setNutrientsList] = useState([]);

    const createNutrientRow = (nutrientType) => {
        return (
            <>
                <p>{nutrientType.nutrient.name}</p>
                <p>{nutrientType.amount + "" + nutrientType.nutrient.unitName}</p>
            </>
        );
    };

    useEffect(() => {
        if (nutrientsArray.length > 0) setNutrientsList([...nutrientsArray]);
    }, [nutrientsArray]);

    //loop over

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
