import React from 'react'

function About() {
  return (
    <div className='about-page-container'>
        <div className="page-wrapper">
          <div className='section1'>
            <Section
              title="Lorem Ipsum Title"
              desc="Lorem ipsum odor amet, consectetuer adipiscing elit.
               Vel donec at risus porttitor at finibus. Potenti rutrum consectetur risus in at.
                Consectetur hendrerit netus cras mi phasellus sodales dapibus imperdiet.
                 Massa velit laoreet urna varius congue dignissim."/>
            <img id="pic1" className='section-img' src="/images/justine-portrait.jpg"/>
          </div>
          <div className='section2'>
            <img className='section-img' src="/images/justine-prof.jpg"/>
            <Section
                title="Lorem Ipsum Title"
                desc="Lorem ipsum odor amet, consectetuer adipiscing elit.
                 Vel donec at risus porttitor at finibus. Potenti rutrum consectetur risus in at.
                  Consectetur hendrerit netus cras mi phasellus sodales dapibus imperdiet.
                   Massa velit laoreet urna varius congue dignissim."/>
          </div>
          <div className='last-section'>
            <img className='section-last-img' src="/images/justine-family.jpg"/>
            <div className='last-about-desc'>Lorem ipsum odor amet, consectetuer adipiscing elit.
               Vel donec at risus porttitor at finibus. Potenti rutrum consectetur risus in at.
                  Egestas finibus ornare feugiat dictumst; odio facilisis aliquet eros.</div>
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