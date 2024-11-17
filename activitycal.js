/* app.js */
const activityMETs = {
    running: 9.8,
    cycling: 7.5,
    swimming: 8.0,
    walking: 3.8,
    jumpingRope: 12.0
};

function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const activity = document.getElementById('activity').value;
    const duration = parseFloat(document.getElementById('duration').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(weight) || isNaN(duration)) {
        resultDiv.innerHTML = '<p>Please enter valid values for weight and duration.</p>';
        return;
    }

    const met = activityMETs[activity];
    const caloriesBurned = (met * 3.5 * weight / 200) * duration;

    resultDiv.innerHTML = `Calories Burned: ${caloriesBurned.toFixed(2)} kcal`;
}
