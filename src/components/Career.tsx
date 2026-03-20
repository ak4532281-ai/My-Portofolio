import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Code Soft</h5>
              </div>
              <h3>June 2024 - August 2024</h3>
            </div>
            <p>
              Designed and developed full stack web projects including a hospital
              management system and shopping website. Collaborated on responsive
              UI/UX and optimized backend APIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence Intern</h4>
                <h5>Corizo</h5>
              </div>
              <h3>Jan 2026 - Feb 2026</h3>
            </div>
            <p>
              Worked on AI-based analytics components and data workflows for
              real-time insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Corizo</h5>
              </div>
              <h3>Feb 2026 - Mar 2026</h3>
            </div>
            <p>
              Performed data preprocessing, model training, and evaluation for
              business intelligence use cases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
