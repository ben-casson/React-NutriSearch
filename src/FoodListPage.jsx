import { useState } from "react";
import { foodResults } from "./api/fetchFoodList";

export default function FoodListPage({ foodIsSelected, setFoodIsSelected }) {
    const [foodList, setFoodList] = useState([]);

    //looks at foodResults array and creats array of food objects (description, id, category)


    //temp function for testing
    function getFood() {
        setFoodIsSelected(!foodIsSelected);
    }

    return <button onClick={getFood}>Food List</button>;
}
