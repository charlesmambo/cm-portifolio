import React from 'react';
import '../about/About.css'
import Skills from '../../components/skills/Skills';

const About = () => {
  return (
    <div className='abt-wrapper'>
        <div className="img-profile">
            <div className="img left-img">
                
            </div>
            <div className="img main-img">
                
            </div>
            <div className="img right-img">
                
            </div>
        </div>

        <div className="intro">
            <p className='intro-heading'>Hello, I'm <span className='abt-h'>Charles Mambo</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt commodi sint harum quisquam veniam, maxime itaque blanditiis. Corporis possimus laudantium quas! Tempora sed enim iure fuga reprehenderit aspernatur! Atque ullam ducimus quis recusandae dolorum voluptatibus impedit, nulla enim aliquam repellendus provident, dolores temporibus quisquam facilis at quidem possimus! Suscipit, est. Quaerat iste ipsum dolorum soluta dignissimos neque, nam commodi accusantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt commodi sint harum quisquam veniam, maxime itaque blanditiis. Corporis possimus laudantium quas! Tempora sed enim iure fuga reprehenderit aspernatur! Atque ullam ducimus quis recusandae dolorum voluptatibus impedit, nulla enim aliquam repellendus provident, dolores temporibus quisquam facilis at quidem possimus! Suscipit, est. Quaerat iste ipsum dolorum soluta dignissimos neque, nam commodi accusantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt commodi sint harum quisquam veniam, maxime itaque blanditiis. Corporis possimus laudantium quas! Tempora sed enim iure fuga reprehenderit aspernatur! Atque ullam ducimus quis recusandae dolorum voluptatibus impedit, nulla enim aliquam repellendus provident, dolores temporibus quisquam facilis at quidem possimus! Suscipit, est. Quaerat iste ipsum dolorum soluta dignissimos neque, nam commodi accusantium.</p>
        </div>

        <Skills/>
    </div>
  )
}

export default About