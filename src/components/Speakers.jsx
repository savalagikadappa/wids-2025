import React from 'react';
import '../styles/Speakers.css';

const speakerData = [
  {
    id: 1,
    name: "Ms. Ashwini Chandrashekharaiah",
    image: "/ashwini-speaker2.png",
    title: "Senior Manager, Walmart Global Tech India",
    email: "ashwini.chandrashekharaiah@walmart.com",
    topic: "Crack the Code: Mastering the WiDS Datathon 2025",
    date: "15/04/25",
    displayDate: "15th April 2025",
    time: "4:30 PM - 5:30 PM IST",
  },
  {
    id: 2,
    name: "Ms. Srujana Kaddevarmuth",
    image: "/srujana-speaker1.png",
    title: "AI Leader, Walmart Global Tech, USA",
    email: "srujana.aba@gmail.com",
    topic: "Trends in Gen AI",
    date: "19/04/25",
    displayDate: "19th April 2025",
    time: "8:30 AM - 10:00 AM IST",
  },
  {
    id: 3,
    name: "Dr. Saroja Naik",
    image: "/saroja-speaker.png",
    title: "Neurologist and Expert in Brain Health",
    email: "sarojaaralikatte@gmail.com",
    topic: "Unraveling the Mysteries of the Female Brain",
    date: "19/04/25",
    displayDate: "19th April 2025",
    time: "10:00 AM - 11:00 AM IST",
  },
];

function Speakers() {
  return (
    <div className="speakers-container">
      {/* Table View */}
      {/* <table className="speakers-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Speaker</th>
            <th>Topic</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {speakerData.map((s) => (
            <tr key={s.id}>
              <td>{s.date}</td>
              <td>
                <img src={s.image} alt={s.name} />
                <br />
                <strong>{s.name}</strong><br />
                {s.title} <br /><br />
                {s.email}
              </td>
              <td>{s.topic}</td>
              <td>{s.time}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* Card View */}
      <h1>Speakers</h1>
      <div className="speaker-cards">
        {speakerData.map((s) => (
          <div className="speaker-card" key={s.id}>
            <img src={s.image} alt={s.name} />
            <h3>{s.name}</h3>
            <p><strong>Topic:</strong> {s.topic}</p>
            <p><strong>Date:</strong> <b>{s.displayDate}</b></p>
            <p><strong>Time:</strong> <b>{s.time}</b></p>
            <p><strong>Email-Id:</strong> {s.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
