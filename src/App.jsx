function App() {
  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="header-content">
          <img src="/assets/Icon_Supavit.png" alt="Supavit the flavico" className="logo" />
          <h1 className="brand-name">Supavit the flavico</h1>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Discover Bold Flavors</h2>
          <p>Supavit brings authentic taste and culinary excellence to every plate</p>
        </section>

        <section className="about">
          <h2>Our Brand</h2>
          <p>Supavit the flavico is dedicated to creating exceptional flavor experiences. With our curated selection and commitment to quality, we transform ordinary meals into extraordinary culinary moments.</p>
        </section>

        <section className="features">
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Premium Quality</h3>
              <p>Carefully selected ingredients and time-honored recipes</p>
            </div>
            <div className="feature-card">
              <h3>Authentic Taste</h3>
              <p>Traditional flavors with a modern twist</p>
            </div>
            <div className="feature-card">
              <h3>Culinary Excellence</h3>
              <p>Expert crafted for the discerning palate</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Supavit the flavico. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
