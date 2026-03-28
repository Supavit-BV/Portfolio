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
            <h2 className="sidebar-subtitle">AI ARCHITECTS</h2>
            <p className="sidebar-description">Transforming complexity into clarity. We engineer custom AI-driven solutions that automate your repetitive tasks, giving you back the time to focus on what matters.</p>
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
            At Supavit, we don’t believe in one-size-fits-all automation. In a world saturated with 
            generic tools, we focus on building <span className="highlight">custom-engineered solutions </span> 
            that align perfectly with your unique business logic. Our journey started with a 
            simple observation: most companies lose countless hours to manual bottlenecks 
            that could be solved with the right technical architecture.
          < br /> < br />
            Our approach is built on <span className="highlight">technical precision</span> and 
            deep analysis. We dive into your current workflows to identify exactly where AI 
            can make the most impact. By engineering high-performance automations, 
            we transform complex data into <span className="highlight">streamlined assets</span>. 
            We take care of the technical complexity, so you can focus on high-level strategy and growth.
          <br /> < br />
            We are committed to delivering scalable tools that evolve alongside your business. 
            Whether it’s automating repetitive tasks or architecting a complete AI-driven workflow, 
            our goal is to <span className="highlight">maximize your time efficiency</span> and 
            provide a long-term competitive edge.
          </p>
        </section>

        <section id="projects" className="content-section">
          <h2 className="section-title">Projects</h2>
          <ul className="projects-list">
           <li className="collection-item">
              <div className="collection-image">
                <img src="/assets/Icon_BG_Supavit.png" alt="Video Pipeline" />
              </div>
              <div className="collection-info">
                <h3>Automated Video Engine</h3>
                <p>A sophisticated n8n-based pipeline that automates end-to-end video editing and asset assembly.</p>
                <div className="project-tags">
                  <span>n8n</span>
                  <span>FFmpeg</span>
                  <span>AI</span>
                </div>
              </div>
            </li>

            <li className="collection-item">
              <div className="collection-image">
                <img src="/assets/Icon_BG_Supavit.png" alt="Neural Content Pipeline" />
              </div>
              <div className="collection-info">
                <h3>Neural Content Pipeline</h3>
                <p>An autonomous system that generates, formats, and schedules multi-platform content. By leveraging LLMs for research and creative writing, it maintains a consistent brand voice without manual intervention.</p>
                <div className="project-tags">
                  <span>n8n</span>
                  <span>LLM</span>
                  <span>AI</span>
                </div>
              </div>
            </li>

            <li className="collection-item">
              <div className="collection-image">
                <img src="/assets/Icon_BG_Supavit.png" alt="Intelligence Dashboards" />
              </div>
              <div className="collection-info">
                <h3>Intelligence Dashboards</h3>
                <p>Custom pipelines that transform fragmented raw data into real-time, actionable insights. Automatically fetching, cleaning, and visualizing data to empower data-driven decision-making.</p>
                <div className="project-tags">
                  <span>Airflow</span>
                  <span>Automation</span>
                  <span>streamlit</span>
                </div>
              </div>
            </li>

             <li className="collection-item">
              <div className="collection-image">
                <img src="/assets/Icon_BG_Supavit.png" alt="Predictive Analytics Engine" />
              </div>
              <div className="collection-info">
                <h3>Predictive Analytics Engine</h3>
                <p>Time-series prediction pipelines designed to forecast business trends and customer behavior. Utilizing machine learning models to turn historical data into proactive business strategies.</p>
                <div className="project-tags">
                  <span>Scikit-learn</span>
                  <span>Power BI</span>
                  <span>Machine Learning</span>
                </div>
              </div>
            </li>

            <div className="view-all-container">
              <button className="view-all-button" onClick={() => {/* Hier komt je pop-up logica */}}>
                View Full Project Archive
              </button>
            </div>

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
