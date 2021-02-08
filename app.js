const searchMeals = () => {
  const searchText = document.getElementById('search-field').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

//<--Search Meal part-->
const displayMeals = meals => {
  const mealContainer = document.getElementById('meal-container')

  meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.className = 'row row-cols-1 row-cols-md-4 g-4';
    mealDiv.innerHTML = `
              <div class="col container SearchMeal">
              <div class="card h-100">
                  <div class="card-body">
                  <img onclick ="ingredientPart(${meal.idMeal})" src ="${meal.strMealThumb}">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    </div>
                </div>
              </div>
            `
    mealContainer.appendChild(mealDiv);
  })
}

//<--ingredientPart-->
const ingredientPart = (id) => {
  const ingredientApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  fetch(ingredientApi)
  .then(res => res.json())
  .then(data =>{
    const meal = data.meals[0];
    document.getElementById("ingredientPart").innerHTML =`
    <h2>Ingredient</h2>
    <br>
    <h4>${meal.strIngredient1}</h4>
    <h4>${meal.strIngredient2}</h4>
    <h4>${meal.strIngredient3}</h4>
    <h4>${meal.strIngredient4}</h4>
    <h4>${meal.strIngredient5}</h4>
    <h4>${meal.strIngredient6}</h4>
    <h4>${meal.strIngredient7}</h4>
    <h4>${meal.strIngredient8}</h4>
    <h4>${meal.strIngredient9}</h4>
    <br>
     
    <h2>Measure</h2>
    <br>
    <h4>${meal.strMeasure1}</h4>
    <h4>${meal.strMeasure2}</h4>
    <h4>${meal.strMeasure3}</h4>
    <h4>${meal.strMeasure4}</h4>
    <h4>${meal.strMeasure5}</h4>
    <h4>${meal.strMeasure6}</h4>
    <h4>${meal.strMeasure7}</h4>
    <h4>${meal.strMeasure8}</h4>
    <h4>${meal.strMeasure9}</h4>
    <br>
    
    <h2>Instructions</h2>
    <br>
    <p>${meal.strInstructions}</p>

    <img src ="${meal.strMealThumb}">
    `
  })
}