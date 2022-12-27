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

export function createNutrientModel(nutrientArray) {
    const tempNutrientModel = new Map();
    //call all functions
    createNutrientObject(
        nutrientArray,
        tempNutrientModel,
        'Energy',
        'Energy',
        'kcal',
        2000
    );
    return tempNutrientModel;
}
