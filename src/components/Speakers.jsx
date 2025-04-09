import React from 'react';
import '../styles/Speakers.css';

const speakerData = [
  {
    id: 1,
    name: "Ms. Ashwini Chandrashekharaiah",
    image: "/ashwini-speaker2.png",
    designation: "Senior Manager, Walmart Global Tech India",
    email: "ashwini.chandrashekharaiah@walmart.com",
    topic: "Crack the Code: Mastering the WiDS Datathon 2025",
    date: "15/04/25",
    displayDate: "15th April 2025",
    time: "4:30 PM - 5:30 PM IST",
    linkedin: "https://www.linkedin.com/in/ashwini-chandrashekharaiah/",
  },
  {
    id: 2,
    name: "Ms. Srujana Kaddevarmuth",
    image: "/srujana-speaker1.png",
    designation: "AI Leader, Walmart Global Tech, USA",
    email: "srujana.aba@gmail.com",
    topic: "Trends in Gen AI",
    date: "19/04/25",
    displayDate: "19th April 2025",
    time: "8:30 AM - 10:00 AM IST",
    linkedin: "https://www.linkedin.com/in/srujana-k-37a32b18/",
  },
  {
    id: 3,
    name: "Dr. Saroja A. O",
    image: "/saroja-speaker.png",
    designation: "Professor and Head,\nDepartment of Neurology\nJ N Medical College",
    email: "sarojaaralikatte@gmail.com",
    topic: "Unraveling the Mysteries of the Female Brain",
    date: "19/04/25",
    displayDate: "19th April 2025",
    time: "10:00 AM - 11:00 AM IST",
    // No LinkedIn
  },
];


function Speakers() {
  return (
    <div className="speakers-container">
      <h1>Speakers</h1>

      <div className="speaker-cards">
        {speakerData.map((s) => (
          <div className="speaker-card" key={s.id}>
            <img src={s.image} alt={s.name} />

            <h3>{s.name}</h3>

            {/* Render each line of the designation on its own line */}
            {s.designation && (
              <div className="designation">
                {s.designation.split('\n').map((line, idx) => (
                  <p key={idx} className="designation-line">
                    {line}
                  </p>
                ))}
              </div>
            )}

            <p>
              <strong>Topic:</strong> {s.topic}
            </p>
            <p>
              <strong>Date:</strong> <b>{s.displayDate}</b>
            </p>
            <p>
              <strong>Time:</strong> <b>{s.time}</b>
            </p>
            <p>
              <strong>Email-Id:</strong> {s.email}
            </p>
            {s.linkedin && (
              <a
                href={s.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-button"
              >
                View on LinkedIn
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default Speakers;
