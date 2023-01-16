export function fetchFoodList(foodItem, setState) {
    let tempFoodInput = foodItem + '';
    if (tempFoodInput.trim() === '') {
        tempFoodInput = 'blueberries';
    }
    //fetch using express proxy server to avoid leaking API key in client
    fetch(
        `https://nutrisearch-api-proxy-server.onrender.com/food-list?query=${tempFoodInput}&pageSize=100`
    )
        .then((response) => {
            if (!response.ok) {
                switch (response.status) {
                    case 400:
                        console.log('400 Bad Request');
                        break;
                    case 401:
                        console.log('401 Unauthorized');
                        break;
                    case 404:
                        console.log('404 Not Found');
                        break;
                    case 500:
                        console.log('500 Internal Server Error');
                        break;
                }
            }
            return response.json();
        })
        .then((foodResults) => {
            console.log(foodResults.foods);
            let updatedFoodArray = removeDuplicateFoods(foodResults.foods);
            setState([...updatedFoodArray]);
        })
        .catch((error) => {
            console.error(`An error occurred: ${error}`);
        });
}

function removeDuplicateFoods(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (
                array[i].description === array[j].description &&
                array[i].brandName === array[j].brandName &&
                array[i].brandOwner === array[j].brandOwner
            ) {
                array[j] = array.pop();
            }
        }
    }
    return array;
}
