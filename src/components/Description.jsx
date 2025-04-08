import React from 'react';

function Description() {
  return (
    <div className="description">
      <div className="content">
        <p>
          WiDS Hubballi is independently organized by KLE Technological University to be part of the mission to increase participation of women in data science and to feature outstanding women doing outstanding work.
        </p>
        <p><b>The 8th Annual WiDS Datathon 2025 Challenge: Unraveling the Mysteries of the Female Brain</b></p>
        <p>The WiDS Datathon continues its mission to empower women in data science, providing a platform for participants worldwide to enhance their skills and connect with like-minded individuals. Open to data scientists of all levels, including beginners, the 8th annual WiDS Datathon focuses on advancing research in women’s brain health. In support of this global challenge, WiDS Hubballi is hosting a Datathon Workshop to help participants build essential data science skills and engage effectively in the competition. Experts in the field will lead sessions, offering valuable insights into machine learning applications in neuroscience and guiding participants in developing analytical solutions for real-world healthcare challenges.</p>
      </div>

      <div className="past-events">
        <h3>Past Events</h3>
        <ul>
          <li><a href="https://drive.google.com/file/d/1mSyf-BHyuCy0Wdy9_H2_UT9se7N10h7Y/view?usp=sharing">WiDS Workshop 2024</a></li>
          <li><a href="https://drive.google.com/file/d/1GrVBC6bRKateIjvTeFQtSRGEV8iRYpM3/view?usp=sharing">WiDS Workshop 2023</a></li>
          <li><a href="https://drive.google.com/file/d/1UvJaNMrJ07rcYHw1LLE964VtXHELZ0rr/view?usp=sharing">WiDS Workshop 2022</a></li>
        </ul>
      </div>

      <div className="updates-placeholder">
        <div className="graphic-overlay">
          <div className="circle"></div>
          <div className="square"></div>
          <div className="globe">
            <span className="updates-text">Updates</span>
            <span className="coming-soon-text">Coming soon!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;