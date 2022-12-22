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
        <main>
            {/* <button onClick={getFoods}>{food}</button> */}

            {arr.map((element, i) => (
                // <p key={element.fdcId}>{element.description}</p>
                <div className='food-row' key={i}>
                    <div className='description-wrapper'>
                        <button key={element.fdcId}>{element.description}</button>
                    </div>
                    <div className='food-category-wrapper'>
                        <p>{element.foodCategory}</p>
                    </div>
                </div>
            ))}
        </main>
    );
}
