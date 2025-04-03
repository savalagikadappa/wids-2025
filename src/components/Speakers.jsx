import React from 'react';

function Speakers() {
  return (
    <div className="speakers-table-container">

      {/* Table - Visible for large screens */}
      <table className="speakers-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Speaker</th>
            <th>Topic</th>
            <th>Mail</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15/04/25</td>
            <td>
              <img src="/ashwini-speaker2.png" alt="Ashwini Chandrashekharaiah" /><br />
              <strong>Ms. Ashwini Chandrashekharaiah</strong><br />
              Senior Manager, Walmart Global Tech India
            </td>
            <td>Crack the Code: Mastering the WiDS Datathon 2025</td>
            <td>ashwini.chandrashekharaiah@walmart.com</td>
            <td>4:30 PM - 5:30 PM IST</td>
          </tr>

          <tr>
            <td>19/04/25</td>
            <td>
              <img src="/srujana-speaker1.png" alt="Srujana Kaddevarmuth" /><br />
              <strong>Ms. Srujana Kaddevarmuth</strong><br />
              AI Leader, Walmart Global Tech, USA
            </td>
            <td>Trends in Gen AI</td>
            <td>srujana.aba@gmail.com</td>
            <td>8:30 AM - 10:00 AM IST</td>
          </tr>

          <tr>
            <td>19/04/25</td>
            <td>
              <img src="/saroja-speaker.png" alt="Dr. Saroja Naik" /><br />
              <strong>Dr. Saroja Naik</strong><br />
              Neurologist and Expert in Brain Health
            </td>
            <td>Unraveling the Mysteries of the Female Brain</td>
            <td>sarojaaralikatte@gmail.com</td>
            <td>10:00 AM - 11:00 AM IST</td>
          </tr>
        </tbody>
      </table>

      {/* Cards - Visible only below 900px */}
      <div className="speaker-cards">
        <div className="speaker-card">
          <img src="/ashwini-speaker2.png" alt="Ashwini Chandrashekharaiah" />
          <h3>Ms. Ashwini Chandrashekharaiah</h3>
          <p><strong>Topic:</strong> Crack the Code: Mastering the WiDS Datathon 2025</p>
          <p><strong>Mail:</strong> ashwini.chandrashekharaiah@walmart.com</p>
          <p><strong>Date:</strong> 15/04/25</p>
          <p><strong>Time:</strong> 4:30 PM - 5:30 PM IST</p>
        </div>

        <div className="speaker-card">
          <img src="/srujana-speaker1.png" alt="Srujana Kaddevarmuth" />
          <h3>Ms. Srujana Kaddevarmuth</h3>
          <p><strong>Topic:</strong> Trends in Gen AI</p>
          <p><strong>Mail:</strong> srujana.aba@gmail.com</p>
          <p><strong>Date:</strong> 19/04/25</p>
          <p><strong>Time:</strong> 8:30 AM - 10:00 AM IST</p>
        </div>

        <div className="speaker-card">
          <img src="/saroja-speaker.png" alt="Dr. Saroja Naik" />
          <h3>Dr. Saroja Naik</h3>
          <p><strong>Topic:</strong> Unraveling the Mysteries of the Female Brain</p>
          <p><strong>Mail:</strong> sarojaaralikatte@gmail.com</p>
          <p><strong>Date:</strong> 19/04/25</p>
          <p><strong>Time:</strong> 10:00 AM - 11:00 AM IST</p>
        </div>
      </div>

    </div>
  );
}

export default Speakers;
