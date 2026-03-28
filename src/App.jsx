import { useState, useEffect } from 'react'

function App() {
  const [activeNav, setActiveNav] = useState('about')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      // Update glow position
      const element = document.querySelector('.app-container')
      if (element) {
        element.style.setProperty('--mouse-x', `${e.clientX}px`)
        element.style.setProperty('--mouse-y', `${e.clientY}px`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id) => {
    setActiveNav(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-container">
      {/* Sticky Header / Sidebar */}
      <header className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-intro">
            <div className="sidebar-header">
              <img src="/assets/Icon_Supavit.png" alt="Supavit logo" className="sidebar-logo" />
              <div className="sidebar-title-group">
                <h1 className="sidebar-title">Supavit</h1>
                <nav className="sidebar-nav-inline" aria-label="Quick nav">
                </nav>
              </div>
            </div>
            <h2 className="sidebar-subtitle">AI automators</h2>
            <p className="sidebar-description">We enhance and automate your data and needs through AI-driven innovation.</p>
          </div>

          <nav className="sidebar-nav">
            <ul className="nav-list">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
                >
                  <span className="nav-indicator"></span>
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`nav-link ${activeNav === 'projects' ? 'active' : ''}`}
                >
                  <span className="nav-indicator"></span>
                  Projects
                </button>
              </li>
            </ul>
          </nav>

          <ul className="social-links">
            {/* <li><a href="mailto:info@supavit.be" title="Email" aria-label="Email">info@supavit.be</a></li> */}
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section id="about" className="content-section">
          <h2 className="section-title">About</h2>
          <p className="section-text">
            Supavit is about <span className="highlight">passion for flavor</span> powered by <span className="highlight">intelligent automation</span>. Every creation tells a story of meticulous ingredient selection, time-honored techniques, and cutting-edge AI optimization.
          </p>
          <p className="section-text">
            With years of experience in culinary arts, we've developed a distinctive approach to flavor curation that honors tradition while embracing innovation. From sourcing premium ingredients to perfecting recipes through AI-driven analysis, every detail matters.
          </p>
        </section>

        <section id="projects" className="content-section">
          <h2 className="section-title">Projects</h2>
          <ul className="projects-list">
            <li className="collection-item">
              <div className="collection-image">
                <img src="/assets/Icon_BG_Supavit.png" alt="Heritage Collection" />
              </div>
              <div className="collection-info">
                <h3>Heritage Collection</h3>
                <p>Time-tested recipes inspired by culinary traditions from around the world.</p>
              </div>
            </li>

            <li className="collection-item">
              <div className="collection-image">
                <img src="/assets/Icon_BG_Supavit.png" alt="Modern Essentials" />
              </div>
              <div className="collection-info">
                <h3>Modern Essentials</h3>
                <p>Contemporary flavor profiles designed for the modern kitchen.</p>
              </div>
            </li>

            <li className="collection-item">
              <div className="collection-image">
                <img src="/assets/Icon_BG_Supavit.png" alt="Signature Series" />
              </div>
              <div className="collection-info">
                <h3>Signature Series</h3>
                <p>Exclusive, limited-edition flavors created for discerning palates.</p>
              </div>
            </li>
          </ul>
        </section>

        <footer className="content-footer">
          <p>Designed and crafted by Supavit • © 2025</p>
        </footer>
      </main>
    </div>
  )
}

export default App
