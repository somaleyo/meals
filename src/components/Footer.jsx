import './Footer.css'

export default function Footer(props) {
    

    return(
        <>
                <footer className="footer">
  <div className="footer-container">
    <div className="footer-content">
      {/* Section À propos */}
      <div className="footer-section">
        <h3>À propos</h3>
        <p>
          Nous somme une entreprise innovante dédiée à créer des solutions
          numériques exceptionnelles pour nos clients.
        </p>
      
      </div>

     
      {/* Section Contact */}
      <div className="footer-section">
        <h3>Contact</h3>
        <p>
           123 Rue de la Technologie
          <br />
          1000 Bruxelles, Belgique
        </p>
        <p> +32 2 123 45 67</p>
        <p> contact@gmail.com</p>
      </div>
    </div>
    {/* Bas du footer */}
    <div className="footer-bottom">
      <p>© 2025 Emil.</p>

    </div>
  </div>
</footer>

        </>
    )
}