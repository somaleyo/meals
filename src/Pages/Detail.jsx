import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import './Detail.css'

export default function Detail() {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        if (response.data.meals && response.data.meals.length > 0) {
          setMeal(response.data.meals[0])
        } else {
          setError('Recette non trouvée')
        }
      } catch (err) {
        setError('Erreur lors du chargement de la recette')
        console.error('Erreur API:', err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchMealDetails()
    }
  }, [id])

  // Fonction pour extraire les ingrédients et quantités
  const getIngredients = (meal) => {
    const ingredients = []
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]
      const measure = meal[`strMeasure${i}`]
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          name: ingredient.trim(),
          measure: measure ? measure.trim() : ''
        })
      }
    }
    return ingredients
  }

  if (loading) {
    return (
      <>
        <Nav />
        <div className="loading">
          <p>Chargement de la recette...</p>
        </div>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Nav />
        <div className="error">
          <p>{error}</p>
          <Link to="/" className="btn-back link btn">Retour à l'accueil</Link>
        </div>
        <Footer />
      </>
    )
  }

  if (!meal) {
    return (
      <>
        <Nav />
        <div className="error">
          <p>Recette non trouvée</p>
          <Link to="/" className="btn-back link btn">Retour à l'accueil</Link>
        </div>
        <Footer />
      </>
    )
  }

  const ingredients = getIngredients(meal)

  return (
    <>
      <Nav />
      <div className="detail-container">
        <Link to="/" className="btn-back link btn">Retour aux recettes</Link>
        
        <div className="detail-content">
          <div className="detail-header">
            <div className="detail-image">
              <img className='meal-image' src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
            
            <div className="detail-info">
              <h1 className="detail-title">{meal.strMeal}</h1>
              
              <div className="detail-meta">
                {meal.strCategory && (
                  <div className="meta-item">
                    <strong>Catégorie:</strong> {meal.strCategory}
                  </div>
                )}
                
                {meal.strArea && (
                  <div className="meta-item">
                    <strong>Origine:</strong> {meal.strArea}
                  </div>
                )}
                
                {meal.strTags && (
                  <div className="meta-item">
                    <strong>Tags:</strong> {meal.strTags}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="detail-body">
            {ingredients.length > 0 && (
              <div className="ingredients-section">
                <h2>Ingrédients</h2>
                <ul className="ingredients-list">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">
                      <span className="ingredient-measure">{ingredient.measure}</span>
                      <span className="ingredient-name">{ingredient.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {meal.strInstructions && (
              <div className="instructions-section">
                <h2>Instructions</h2>
                <div className="instructions-text">
                  {meal.strInstructions.split('\n').map((instruction, index) => (
                    instruction.trim() && (
                      <p key={index} className="instruction-step">
                        {instruction.trim()}
                      </p>
                    )
                  ))}
                </div>
              </div>
            )}

            {(meal.strYoutube || meal.strSource) && (
              <div className="links-section">
                <h2>Liens utiles</h2>
                <div className="external-links">
                  {meal.strYoutube && (
                    <a 
                      href={meal.strYoutube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="youtube-link btn link"
                    >
                      Voir la vidéo YouTube
                    </a>
                  )}
                  
                  {meal.strSource && (
                    <a 
                      href={meal.strSource} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="source-link btn link"
                    >
                      Source originale
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}