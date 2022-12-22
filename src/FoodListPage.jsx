import { useEffect, useState } from 'react';

export default function FoodListPage({
    food,
    foodIsSelected,
    setFoodIsSelected,
    foodList,
}) {
    const [name, setName] = useState('');

    //temp function for testing
    function getFoods() {
        setFoodIsSelected(!foodIsSelected);
    }

    const foodListItems = () => {
        foodList.forEach((element) => {
            <li key={element.fdcId}>{element.description}</li>;
        });
    };

    useEffect(() => {
        if (foodList.length > 0) setName(foodList[10].description);
    }, [foodList]);

    return (
        <>
            <button onClick={getFoods}>{food}</button>
            <ul>
                <li>{name}</li>
                {/* {foodList.forEach((element) => {
                    <li key={element.fdcId}>{element.description}</li>;
                })} */}
            </ul>
        </>
    );
}
