import React from 'react';
import '../styles/Committee.css';

const Committee = () => {
    return (
        <div className="committee" id="committee">
            <div className="header">WiDS Committee</div>

            {/* Advisors Section */}
            <div className="section">
                <div className="advisorsContainer">
                    <p className="title">Advisors</p>
                    <div className="memberGroup">
                        <div className="member">
                            <img src="/hod-vijayalakshmi-1.jpg" alt="Dr. Vijayalakshmi M" className="memberImage" />
                            <p className="name">Dr. Vijayalakshmi M</p>
                            <p className="designation">HoD, Dept of CSE</p>
                        </div>

                        <div className="member">
                            <img src="/advisor-uma.jpg" alt="Dr. Uma Mudenagudi" className="memberImage" />
                            <p className="name">Dr. Uma Mudenagudi</p>
                            <p className="designation">Dean R&D</p>
                        </div>

                        <div className="member">
                            <img src="/ambassador-meena.jpg" alt="Dr. Meena S. M" className="memberImage" />
                            <p className="name">Dr. Meena S. M</p>
                            <p className="designation"> Faculty, Dept of CSE AI</p>
                        </div>

                        <div className="member">
                            <img src="/co-ambassador-sujatha.jpg" alt="Dr. Sujatha C" className="memberImage" />
                            <p className="name">Dr. Sujatha C</p>
                            <p className="designation"> Faculty, Dept of CSE</p>
                        </div>

                        <div className="member">
                            <img src="/co-ambassador-padmashree.jpg" alt="Dr. Padmashree Desai" className="memberImage" />
                            <p className="name">Dr. Padmashree Desai</p>
                            <p className="designation"> Faculty, Dept of CSE</p>
                        </div>

                        <div className="member">
                            <img src="/nehamadam.jpeg" alt="Mrs Neha T" className="memberImage" />
                            <p className="name">Mrs. Neha T</p>
                            <p className="designation"> Faculty, Dept of CSE</p>
                        </div>

                        <div className="member">
                            <img src="/narayan.jpg" alt="Mr. Narayan D G" className="memberImage" />
                            <p className="name">Dr. Narayan D G</p>
                            <p className="designation"> Faculty, Dept of CSE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Committee;