import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import './Content.css'

export default function See() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        setMeals(response.data.meals || [])
      } catch (err) {
        setError('Erreur lors du chargement des plats')
        console.error('Erreur API:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMeals()
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <p>Chargement des plats...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <>
  
    <Nav/>
    <div className="content">
      <h1>Plats de fruits de mer</h1>
      
      <div className="meals-grid">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <img  src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
            <div className="meal-info">
              <h3 className="meal-title">{meal.strMeal}</h3>
              <Link  
                to={`/recipe/${meal.idMeal}`} 
                className="btn-details btn link">
                Voir la recette
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {meals.length === 0 && !loading && (
        <div className="no-meals">
          <p>Aucun plat trouvé</p>
        </div>
      )}
    </div>
    <Footer/>
      </>
  )
}