import { useState, useEffect } from 'react';
import './NutrientRow.css';
import uuid from 'react-uuid';

export default function NutrientRow({ nutrientsArray }) {
    const [nutrientsList, setNutrientsList] = useState([]);

    const createNutrientRow = (nutrientType) => {
        return <p key={nutrientType.nutrient.name}>{nutrientType.nutrient.name}</p>;
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
                            <div className='nutrient-row'>
                                {createNutrientRow(nutrientType)}
                            </div>
                        ) : (
                            <div className='nutrient-row dark-background'>
                                {createNutrientRow(nutrientType)}
                            </div>
                        )
                    )}
                </>
            )}
        </>
    );
}
