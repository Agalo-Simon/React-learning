
import {useState} from "react"

function Main() {
  // 1. Initialize state with your default ingredients
  const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])

  // 2. Move the mapping logic here so it recalculates on every render
  const ingredientsItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")

    if (newIngredient) {
      // 3. Update state by creating a BRAND NEW array
      // This uses the spread operator (...) to include old items + the new one
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
      
      // Optional: Clear the input field
      event.currentTarget.reset()
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input 
          placeholder="e.g. Garlic" 
          aria-label="add ingredients"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
      <ul className="ingredient">{ingredientsItems}</ul>
    </main>
  )
}

export default Main;