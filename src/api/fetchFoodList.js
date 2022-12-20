export default function fetchFood(foodItem) {
    fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=lWLhwUp3ZfGng76exaxb8ddTvr5SlfSs9G8wk3b9&query=${foodItem}`
    )
        .then((response) => response.json())
        .then((foodData) => {
            console.log(foodData);
        })
        .catch((error) => {
            console.error(`An error occurred: ${error}`);
        });
}
