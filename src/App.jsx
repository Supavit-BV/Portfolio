import { useState, useEffect } from 'react'

function App() {
  const [activeNav, setActiveNav] = useState('about')
  const [selectedProject, setSelectedProject] = useState(null)
  const [showArchive, setShowArchive] = useState(false)
  const [archiveProject, setArchiveProject] = useState(null)

  const projects = [
    {
      id: 'real-estate-renovation',
      title: "Real Estate Intelligence Platform",
      shortDesc: "A full-stack real estate intelligence platform with multi-source scrapers, AI-driven ROI scoring, and automated auction monitoring to support investment decision-making.",
      fullDesc: "This platform aggregates property data from multiple Belgian real estate sources — ImmoWeb, ImmoScoop, Biddit, Notaris and others — using Selenium-based scrapers orchestrated via systemd services. A modular microservices architecture ties together a React/TypeScript frontend, Express.js backend, PostgreSQL database, MinIO for image storage, and Qdrant for vector search. At its core is a property analysis pipeline that combines AI-driven ROI scoring with geographic heatmaps to surface investment opportunities at a glance. An integrated auction monitoring system captures real-time bid data, while LLM-assisted workflows automate EPC energy certificate classification and interpretation. The full stack runs containerized via Docker with CI/CD pipelines ensuring automated re-scraping for data freshness, centralized logging, and structured data governance — built from the ground up to scale alongside a growing investment portfolio.",
      tags: ["microservices", "Airflow", "Qdrant", "PostgreSQL", "MinIO", "Docker", "Scrapers", "VLM", "LLM"],
      media: "/assets/Icon_BG_Supavit.png",
      year: "2025 - Present",
      featured: true,
    },
    {
      id: 'video-engine',
      title: "Automated Video Engine",
      shortDesc: "A sophisticated n8n-based pipeline that automates end-to-end video editing and asset assembly.",
      fullDesc: "This engine automates the entire post-production workflow. By integrating n8n with FFmpeg, raw footage is automatically trimmed, captioned with AI-generated subtitles, and formatted for various social media platforms without human intervention.",
      tags: ["n8n", "FFmpeg", "AI"],
      media: "/assets/Icon_BG_Supavit.png",
      year: "2025",
      featured: true,
    },
    {
      id: 'intelligence-dashboards',
      title: "Intelligence Dashboards",
      shortDesc: "Custom pipelines that transform fragmented raw data into real-time, actionable insights.",
      fullDesc: "Raw data is retrieved from various sources via Airflow pipelines, cleaned, and structured. The result is an interactive PowerBI dashboard that predicts trends and accelerates decision-making.",
      tags: ["Airflow", "Automation", "PowerBI", "Fabric", "AWS"],
      media: "/assets/Icon_BG_Supavit.png",
      year: "2025",
      featured: true,
    },
    {
      id: 'neural-content',
      title: "Neural Content Pipeline",
      shortDesc: "An autonomous system that generates, formats, and schedules multi-platform content.",
      fullDesc: "This system uses advanced LLM architectures to conduct research and generate creative content in a specific brand voice. The workflow then schedules the content across various channels, ensuring consistency.",
      tags: ["n8n", "LLM", "AI"],
      media: "/assets/Icon_BG_Supavit.png",
      year: "2024",
      featured: true,
    },
    {
      id: 'traffic-analysis',
      title: "Traffic Analysis System",
      shortDesc: "Custom Computer Vision pipelines that transform fragmented raw data into real-time insights.",
      fullDesc: "Developed a traffic analysis system using an YOLO V8 model to detect and track vehicles, pedestrians, and other moving objects in real-time. The project involved collecting detection data, such as object classifications and positions, and storing it in a NoSQL database for further analysis and active learning to further fine-tune the model. This project focuses on enhancing object detection and data management workflows, leveraging computer vision to improve traffic insights and analytics.",
      tags: ["OpenCV", "Automation", "Computer Vision", "Streamlit", "YOLO", "NoSQL", "Business Intelligence"],
      media: "/assets/Icon_BG_Supavit.png",
      year: "2024",
      featured: false,
    },
    {
      id: 'predictive-voka',
      title: "Predictive Analytics Engine",
      shortDesc: "Time-series prediction pipelines designed to forecast business trends and customer behavior.",
      fullDesc: "Developed a Full ETL pipline with Vlaams Netwerk van Ondernemingen (VOKA) CRM data, predicting campaign attendance, Marketing volume allowance. Utilized Machine Learning models for accurate data-driven predictions.",
      tags: ["Scikit-learn", "Power BI", "Machine Learning"],
      media: "/assets/Icon_BG_Supavit.png",
      year: "2023",
      featured: false,
    },
    {
      id: 'predictive-flight',
      title: "Predictive flight data",
      shortDesc: "ETL pipelines for analysis of the flight data.",
      fullDesc: "Scraped data from multiple Airline sites, to build ETL pipelines for analysis of the flight data. Utilized PowerBI, Machine Learning algorithms for efficient data modeling and reporting.",
      tags: ["Scikit-learn", "Power BI", "Machine Learning"],
      media: "/assets/Icon_BG_Supavit.png",
      year: "2022",
      featured: false,
    },
    // ── Voeg hier extra niet-featured projecten toe ──────────
    // {
    //   id: 'mijn-nieuw-project',
    //   title: "Mijn Nieuw Project",
    //   shortDesc: "Korte omschrijving voor de archieflijst.",
    //   fullDesc: "Volledige beschrijving die in de detail-popup verschijnt.",
    //   tags: ["Tag1", "Tag2"],
    //   media: "/assets/Icon_BG_Supavit.png",
    //   year: "2023",
    //   featured: false,
    // },
  ]

  const featuredProjects = projects.filter(p => p.featured)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const element = document.querySelector('.app-container')
      if (element) {
        element.style.setProperty('--mouse-x', `${e.clientX}px`)
        element.style.setProperty('--mouse-y', `${e.clientY}px`)
      }
    }

    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (archiveProject) {
          setArchiveProject(null)
        } else if (showArchive) {
          setShowArchive(false)
        } else {
          setSelectedProject(null)
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('keydown', handleEsc)
    }
  }, [archiveProject, showArchive])

  useEffect(() => {
    const isOpen = !!selectedProject || showArchive
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject, showArchive])

  const closeArchive = () => {
    setShowArchive(false)
    setArchiveProject(null)
  }

  const scrollToSection = (id) => {
    setActiveNav(id)
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-container">
      <header className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-intro">
            <div className="sidebar-header">
              <img src="/assets/Icon_Supavit.png" alt="Supavit logo" className="sidebar-logo" />
              <div className="sidebar-title-group">
                <h1 className="sidebar-title">Supavit</h1>
              </div>
            </div>
            <h2 className="sidebar-subtitle">AI ARCHITECTS</h2>
            <p className="sidebar-description">Transforming complexity into clarity. We engineer custom AI-driven solutions that automate your repetitive tasks.</p>
          </div>

          <nav className="sidebar-nav">
            <ul className="nav-list">
              <li>
                <button onClick={() => scrollToSection('about')} className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}>
                  <span className="nav-indicator"></span> About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className={`nav-link ${activeNav === 'projects' ? 'active' : ''}`}>
                  <span className="nav-indicator"></span> Projects
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section id="about" className="content-section">
          <h2 className="section-title">About</h2>
          <p className="section-text">
            At Supavit, we don't believe in one-size-fits-all automation. In a world saturated with
            generic tools, we focus on building <span className="highlight">custom-engineered solutions </span>
            that align perfectly with your unique business logic. Our journey started with a
            simple observation: most companies lose countless hours to manual bottlenecks
            that could be solved with the right technical architecture.
          <br /><br />
            Our approach is built on <span className="highlight">technical precision</span> and
            deep analysis. We dive into your current workflows to identify exactly where AI
            can make the most impact. By engineering high-performance automations,
            we transform complex data into <span className="highlight">streamlined assets</span>.
            We take care of the technical complexity, so you can focus on high-level strategy and growth.
          <br /><br />
            We are committed to delivering scalable tools that evolve alongside your business.
            Whether it's automating repetitive tasks or architecting a complete AI-driven workflow,
            our goal is to <span className="highlight">maximize your time efficiency</span> and
            provide a long-term competitive edge.
          </p>
        </section>

        <section id="projects" className="content-section">
          <h2 className="section-title">Projects</h2>
          <ul className="projects-list">
            {featuredProjects.map((project) => (
              <li key={project.id} className="collection-item" onClick={() => setSelectedProject(project)}>
                <div className="collection-info">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.shortDesc}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="view-all-container">
            <button className="view-all-button" onClick={() => setShowArchive(true)}>
              View Full Project Archive
            </button>
          </div>
        </section>

        <footer className="content-footer">
          <p>info@supavit.be</p>
          <p>BTW BE1025803308</p>
          <p>Designed and crafted by Supavit • © 2025</p>
        </footer>
      </main>

      {/* ── Project detail modal (homepage featured) ── */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Sluiten">✕</button>
            <div className="modal-media">
              <img src={selectedProject.media} alt={selectedProject.title} />
            </div>
            <div className="modal-body">
              <div className="modal-tags">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.fullDesc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Project archief modal ── */}
      {showArchive && (
        <div className="modal-overlay archive-overlay" onClick={closeArchive}>
          <div className="archive-modal" onClick={(e) => e.stopPropagation()}>

            <div className="archive-header">
              {archiveProject ? (
                <button className="archive-back" onClick={() => setArchiveProject(null)}>
                  ← Back to archive
                </button>
              ) : (
                <div>
                  <h2 className="archive-title">Project Archive</h2>
                  <p className="archive-subtitle">{projects.length} projects</p>
                </div>
              )}
              <button className="modal-close archive-modal-close" onClick={closeArchive} aria-label="Sluiten">✕</button>
            </div>

            {/* Lijst view */}
            {!archiveProject && (
              <div className="archive-body">
                <table className="archive-table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Project</th>
                      <th className="hide-mobile">Tags</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.id} className="archive-row" onClick={() => setArchiveProject(project)}>
                        <td className="archive-year">{project.year}</td>
                        <td className="archive-name">
                          <span>{project.title}</span>
                          <p className="archive-short-desc">{project.shortDesc}</p>
                        </td>
                        <td className="archive-tags-cell hide-mobile">
                          <div className="archive-tags">
                            {project.tags.map(tag => (
                              <span key={tag} className="archive-tag">{tag}</span>
                            ))}
                          </div>
                        </td>
                        <td className="archive-arrow">→</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Detail view binnen archief */}
            {archiveProject && (
              <div className="archive-detail-body">
                <div className="archive-detail-media">
                  <img src={archiveProject.media} alt={archiveProject.title} />
                </div>
                <div className="archive-detail-content">
                  <div className="modal-tags">
                    {archiveProject.tags.map(tag => (
                      <span key={tag} className="modal-tag">{tag}</span>
                    ))}
                  </div>
                  <h2 className="modal-title">{archiveProject.title}</h2>
                  <p className="modal-desc">{archiveProject.fullDesc}</p>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  )
}

export default App