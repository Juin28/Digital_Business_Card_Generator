import React, { useState, useRef } from 'react';
// import { generatePDF } from './pdfGenerator';
import Card from "./Card.jsx"
import './App.css';

export default function App() {
    const [profilePicture, setProfilePicture] = useState();
    const [name, setName] = useState('--Name');
    const [title, setTitle] = useState('--Title');
    const [company, setCompany] = useState('--Company');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [email, setEmail] = useState('');
    const [instagram, setInstagram] = useState('');
    const [aboutMe, setAboutMe] = useState('--About Me');
    const [university, setUniversity] = useState('--University');
    const [degree, setDegree] = useState('--Degree');
    const [skills, setSkills] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        if (!name || !title || !email) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }
    };

    const cardRef = useRef(null);

    const handleDownloadPDF = () => {
        generatePDF(cardRef);
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Profile Picture:
                <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfilePicture(e.target.files[0])} 
                />
            </label>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                Company:
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
            </label>
            <label>
                LinkedIn link:
                <input type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
            </label>
            <label>
                GitHub link:
                <input type="url" value={github} onChange={(e) => setGithub(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Instagram link:
                <input type="url" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
            </label>
            <label>
                About Me:
                <textarea value={aboutMe} onChange={(e) => setAboutMe(e.target.value)}></textarea>
            </label>
            <label>
                University:
                <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} />
            </label>
            <label>
                Degree:
                <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
            </label>
            <label>
                Skills (separated by comma, eg. Python, C++, Figma, ):
                <input type="text" value={skills.join(', ')} onChange={(e) => setSkills(e.target.value.split(', '))} />
            </label>

            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <button type="submit">Submit</button>
        </form>

        <Card
            profilePicture={profilePicture}
            name={name}
            title={title}
            company={company}
            linkedin={linkedin}
            github={github}
            email={email}
            instagram={instagram}
            aboutMe={aboutMe}
            university={university}
            degree={degree}
            skills={skills}
        />

        {/* <div ref={cardRef}>
            <Card
                profilePicture={profilePicture}
                name={name}
                title={title}
                company={company}
                linkedin={linkedin}
                github={github}
                email={email}
                instagram={instagram}
                aboutMe={aboutMe}
                university={university}
                degree={degree}
                skills={skills}
            />
            <button onClick={handleDownloadPDF} className='download-btn'>Download PDF</button>
        </div> */}
    </div>
  );
}