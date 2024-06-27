import React from 'react';
import './Card.css';

export default function Card(props) {

  const defaultPic = 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg';

  return (
    <>
      <div className="gradient-bg">
        <div className='gradient-bg-blue'></div>
      </div>
      <main>
        <img className='display-pic' src={props.profilePicture ? URL.createObjectURL(props.profilePicture) : defaultPic} alt="display picture" />
        

        <div className="personal-info">
          <h2 className='personal-info--name'>{props.name}</h2>
          <h4 className='personal-info--title'>{props.title}</h4>
          <h4 className='personal-info--company'>{props.company}</h4>
        </div>

        <div className='social-media'>
          <a className='social-media--button' href={`mailto:${props.email}`}><img src='https://cdn-icons-png.flaticon.com/128/646/646094.png' /></a>
          <a className='social-media--button' href={props.linkedin}><img src='https://cdn-icons-png.flaticon.com/128/3800/3800073.png' /></a>
          <a className='social-media--button' href={props.github}><img src='https://cdn-icons-png.flaticon.com/128/1051/1051377.png' /></a>
          <a className='social-media--button' href={props.instagram}><img src='https://cdn-icons-png.flaticon.com/128/1384/1384031.png' /></a>
        </div>

        <div className='about-me'>
          <h2 className='about-me--h2'>About Me</h2>
          <p className='about-me--p'>{props.aboutMe}</p>
        </div>

        <div className='education'>
          <h2 className='education--h2'>Education</h2>
          <h3 className='education--h3'>{props.university}</h3>
          <h5 className='education--h5'>{props.degree}</h5>
        </div>

        <div className='skills'>
          <h2 className='skills--h2'>Skills</h2>
          <ul className='skills--ul'>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>


        <div className='photos'>
          <img src='https://cdn.wallpapersafari.com/32/85/SCZIDw.jpg' className='img' />
          <img src='https://www.vlanj.org/wp-content/uploads/2020/05/Artificial-Intelligence.jpg' className='img' />
          <img src='https://www.research-live.com/img/AI%20crop[id:2013292].jpg' className='img' />
          <img src='https://previews.123rf.com/images/kran77/kran771811/kran77181100001/115594457-abstract-tech-background-futuristic-digital-system-technology-interface-with-geometric-shapes.jpg' />
        </div>
      </main>
    </>
  );
}