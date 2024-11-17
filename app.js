/* app.js */
const nutritionData = {
    apple: { calories: 52, protein: 0.3, fat: 0.2, carbs: 14 },
    banana: { calories: 89, protein: 1.1, fat: 0.3, carbs: 23 },
    chicken: { calories: 239, protein: 27, fat: 14, carbs: 0 },
    mutton: { calories: 294, protein: 25, fat: 21, carbs: 0 },
    beef: { calories: 250, protein: 26, fat: 15, carbs: 0 },
    lentils: { calories: 116, protein: 9, fat: 0.4, carbs: 20 },
    chickpeas: { calories: 164, protein: 8.9, fat: 2.6, carbs: 27 },
    broccoli: { calories: 55, protein: 3.7, fat: 0.6, carbs: 11 },
    spinach: { calories: 23, protein: 2.9, fat: 0.4, carbs: 3.6 },
    tomato: { calories: 18, protein: 0.9, fat: 0.2, carbs: 3.9 },
    carrot: { calories: 41, protein: 0.9, fat: 0.2, carbs: 9.6 },
    potato: { calories: 77, protein: 2, fat: 0.1, carbs: 17 },
    onion: { calories: 40, protein: 1.1, fat: 0.1, carbs: 9.3 },
    bellPepper: { calories: 20, protein: 0.9, fat: 0.2, carbs: 4.6 },
    cucumber: { calories: 16, protein: 0.7, fat: 0.1, carbs: 3.6 },
    almond: { calories: 579, protein: 21, fat: 50, carbs: 22 },
    walnut: { calories: 654, protein: 15, fat: 65, carbs: 14 },
    egg: { calories: 155, protein: 13, fat: 11, carbs: 1.1 },
    salmon: { calories: 208, protein: 20, fat: 13, carbs: 0 },
    tofu: { calories: 76, protein: 8, fat: 4.8, carbs: 1.9 },
    quinoa: { calories: 120, protein: 4.1, fat: 1.9, carbs: 21 },
    avocado: { calories: 160, protein: 2, fat: 15, carbs: 9 },
    grape: { calories: 69, protein: 0.7, fat: 0.2, carbs: 18 },
    strawberry: { calories: 32, protein: 0.7, fat: 0.3, carbs: 7.7 },
    rice: { calories: 130, protein: 2.7, fat: 0.3, carbs: 28 }
};

function addIngredient() {
    const ingredientDiv = document.createElement('div');
    ingredientDiv.classList.add('ingredient');
    ingredientDiv.innerHTML = `
        <input type="text" placeholder="Ingredient" class="ingredient-name">
        <input type="number" placeholder="Quantity (grams)" class="ingredient-quantity">
    `;
    document.getElementById('ingredients').appendChild(ingredientDiv);
}

function calculateNutrition() {
    const ingredients = document.querySelectorAll('.ingredient');
    let totalCalories = 0, totalProtein = 0, totalFat = 0, totalCarbs = 0;

    ingredients.forEach(ingredient => {
        const name = ingredient.querySelector('.ingredient-name').value.toLowerCase();
        const quantity = parseFloat(ingredient.querySelector('.ingredient-quantity').value);

        if (nutritionData[name] && !isNaN(quantity)) {
            totalCalories += (nutritionData[name].calories / 100) * quantity;
            totalProtein += (nutritionData[name].protein / 100) * quantity;
            totalFat += (nutritionData[name].fat / 100) * quantity;
            totalCarbs += (nutritionData[name].carbs / 100) * quantity;
        }
    });

    const nutritionDiv = document.getElementById('nutrition');
    nutritionDiv.innerHTML = `
        <h2>Nutrition Information</h2>
        <p><strong>Total Calories:</strong> ${totalCalories.toFixed(2)} kcal</p>
        <p><strong>Total Protein:</strong> ${totalProtein.toFixed(2)} g</p>
        <p><strong>Total Fat:</strong> ${totalFat.toFixed(2)} g</p>
        <p><strong>Total Carbohydrates:</strong> ${totalCarbs.toFixed(2)} g</p>
    `;
}
