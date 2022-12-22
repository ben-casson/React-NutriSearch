import { useEffect, useState } from 'react';

export default function FoodListPage({
    food,
    foodIsSelected,
    setFoodIsSelected,
    foodList,
}) {
    // const [name, setName] = useState('');
    const [arr, setArr] = useState([]);

    //temp function for testing
    function getFoods() {
        setFoodIsSelected(!foodIsSelected);
    }

    useEffect(() => {
        // if (foodList.length > 0) setName(foodList[10].description);
        if (foodList.length > 0) setArr([...foodList]);
    }, [foodList]);

    return (
        <>
            <button onClick={getFoods}>{food}</button>
            <ul>
                {arr.map((element) => (
                    <li key={element.fdcId}>{element.description}</li>
                ))}
            </ul>
        </>
    );
}
