import React from 'react'

function About() {
  return (
    <div className='about-page-container'>
        <div className="page-wrapper">
          <div className='section1'>
            <Section
              title="Why Art?"
              desc="Art has always been a prominent part of my life.
               My parents are both artisans who created and ran their own business
                making cowboy tack and wear as a way to showcase who their clients 
                are as people. After watching them I found my own way to do this in
                 my own style, through colored pencil, paint, sculpture and more I 
                 showcase stories of the most beautiful people and parts of the world. 
"/>
            <img id="pic1" className='section-img' src="/images/justine-portrait.jpg"/>
          </div>
          <div className='section2'>
            <img className='section-img' src="/images/justine-prof.jpg"/>
            <Section
                title="My Art Journey"
                desc="My art has been showcased all over Indiana through many different
                 contests such as Scholastics Art and Writing Awards, The Indiana State Fair, 
                 and through the Indiana Connections Calendar. Notable achievements within this
                  include one gold key as well as eight other awards through scholastics, seven 
                  indiana state fair special merits, and Artist of the year for the 2024 indiana
                   Connection Calendar.
"/>
          </div>
          <div className='last-section'>
            <img className='section-last-img' src="/images/justine-family.jpg"/>
            <div className="about-title">Commisions</div>
            <div className='last-about-desc'>I enjoy creating art with a story. 
              If you want a custom and meaningful piece of art in any medium, 
              I would be more than happy to work with you to make it a reality. 
              I specialize in organic things such as people, plants and animals 
              but I enjoy a challenge so if you're not sure just ask!
            </div>
          </div>
        </div>
    </div>
  )
}

function Section(props) {
  return(
    <div className='about-section'>
      <div className='about-title'>{props.title}</div>
      <div className='about-desc'>{props.desc}</div>
    </div>
  )
}

export default About