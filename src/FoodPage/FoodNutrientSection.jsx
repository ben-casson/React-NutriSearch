import NutrientRow from './NutrientRow';

export default function FoodNutrientSection({ foodDetails }) {
    return (
        <section id='food-nutrients-table-section'>
            <div id='food-nutrients-table-title-container'>
                <p id='food-nutrients-title-name'>Name</p>
                <p id='food-nutrients-title-amount'>Amount</p>
                <p id='food-nutrients-title-daily-value'>% Daily Value</p>
            </div>
            <div id='food-nutrients-table-content-container'>
                {Object.keys(foodDetails).length != 0 && (
                    <NutrientRow nutrientsArray={foodDetails.foodNutrients} />
                )}
            </div>
        </section>
    );
}
