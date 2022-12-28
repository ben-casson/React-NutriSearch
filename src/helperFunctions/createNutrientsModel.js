function createNutrientObject(
    nutrientArray,
    tempNutrientModel,
    nutrientNameFromAPI,
    type,
    unit,
    dailyValue
) {
    const tempNutrientObj = {};
    for (let nutrientObj of nutrientArray) {
        if (
            nutrientObj.nutrient.name == nutrientNameFromAPI &&
            nutrientObj.nutrient.unitName == unit
        ) {
            tempNutrientObj.type = type;
            tempNutrientObj.amount = nutrientObj.amount;
            tempNutrientObj.dailyValue = dailyValue;
            tempNutrientObj.unit = unit;
            break;
        } else {
            tempNutrientObj.type = type;
            tempNutrientObj.amount = '-';
            tempNutrientObj.dailyValue = '-';
            tempNutrientObj.unit = unit;
        }
    }
    let keyName = type;
    tempNutrientModel.set(keyName, tempNutrientObj);
}

export function createNutrientsModel(nutrientArray) {
    const tempNutrientModel = new Map();
    createNutrientObject(nutrientArray, tempNutrientModel, 'Energy', 'Energy', 'kcal', 2000);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Water', 'Water', 'g', 3500);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Caffeine', 'Caffeine', 'mg', 0);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Alcohol, ethyl', 'Alcohol', 'g', 0);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Carbohydrate, by difference', 'Carbs', 'g', 0);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Sugars, total including NLEA', 'Sugars', 'g', 0);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Sugars, added', 'Added Sugars', 'g', 0);
    createNutrientObject(nutrientArray, tempNutrientModel, 'Fiber, total dietary', 'Fiber', 'g', 28);
    return tempNutrientModel;
}
