import React from 'react';
import '../styles/Committee.css';

const members = {
    advisors: [
        { name: "Dr. Uma Mudenagudi", designation: "Dean R&D", image: "/advisor-uma.jpg" },
        { name: "Dr. Meena S. M", designation: "Dean, FSC", image: "/ambassador-meena.jpg" },
        { name: "Dr. Vijayalakshmi M", designation: "HoD, Dept of CSE", image: "/hod-vijayalakshmi-1.jpg" },
        { name: "Dr. Narayan D G", designation: "HoD, Dept of CSE-AI", image: "/narayan.jpg" }
    ],
    ambassador: [
        { name: "Dr. Sujatha C", designation: "Faculty, Dept of CSE", image: "/co-ambassador-sujatha.jpg" }
    ],
    coAmbassadors: [
        { name: "Dr. Padmashree Desai", designation: "Faculty, Dept of CSE", image: "/co-ambassador-padmashree.jpg" },
        { name: "Prof. Neha Tarannum", designation: "Faculty, Dept of CSE", image: "/nehamadam.jpeg" }
    ]
};

const MemberCard = ({ name, designation, image, role }) => (
    <div className="member">
        <img src={image} alt={name} className="memberImage" />
        <p className="name">{name}</p>
        {role && <p className="role">{role}</p>}
        <p className="designation">{designation}</p>
    </div>
);

const Committee = () => {
    return (
        <div className="committee" id="committee">
            <div className="header">WiDS Committee</div>

            <div className="section">
                <p className="title">Advisors</p>
                <div className="memberGroup">
                    {members.advisors.map((m, i) => (
                        <MemberCard key={i} {...m} />
                    ))}
                </div>
            </div>

            <div className="section ambassadorContainer">
                <div className="subsection">
                    <p className="title">Ambassador</p>
                    <div className="memberGroup">
                        {members.ambassador.map((m, i) => (
                            <MemberCard key={i} {...m} />
                        ))}
                    </div>
                </div>

                <div className="subsection">
                    <p className="title">Co-Ambassadors</p>
                    <div className="memberGroup">
                        {members.coAmbassadors.map((m, i) => (
                            <MemberCard key={i} {...m} />
                        ))}
                    </div>
                </div>

            </div>
            <div className="section">
                <p className="title">Organizing Committee</p>
                <ul className="organizers">
                    <li>Dr. P.G Sunitha Hiremath</li>
                    <li>Prof. Sneha Varur</li>
                    <li>Prof. Channabasappa M</li>
                    <li>Ms. Shilpa S. Hotagi</li>
                    <li>Ms. Vaishnavi M</li>
                </ul>
            </div>

        </div>
    );
};

export default Committee;