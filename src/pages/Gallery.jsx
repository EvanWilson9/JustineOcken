import React from 'react'

function Gallery() {

  const drawings = [
    '/images/drawings/dog1.jpg',
    '/images/drawings/dog2.jpg',
    '/images/drawings/dog3.jpg',
    '/images/drawings/horse.jpg',
    '/images/drawings/horse2.jpg',
    '/images/drawings/horse4.jpg',
    '/images/drawings/horse5.jpg',
    '/images/drawings/objects.jpg',
    '/images/drawings/objects2.jpg',
    '/images/drawings/objects4.jpg',
    '/images/drawings/people1.jpg',
    '/images/drawings/people3.jpg',
    '/images/drawings/people5.jpg',
    '/images/drawings/people7.jpg',
    '/images/drawings/coin1.jpg',
    '/images/drawings/coin2.jpg',
    '/images/drawings/coin3.jpg',
    '/images/drawings/coin4.jpg',
    '/images/drawings/coin5.jpg',
    '/images/drawings/coin6.jpg',
    '/images/drawings/coin7.jpg',
    '/images/drawings/coin8.jpg',
    '/images/drawings/coin9.jpg'  
];

const sculptures = [
  '/images/sculptures/family.jpg',
  '/images/sculptures/family2.jpg',
  '/images/sculptures/brother1.jpg',
  '/images/sculptures/brother2.jpg',
  '/images/sculptures/justine.jpg',
  '/images/sculptures/dog1.jpg',
  '/images/sculptures/dog2.jpg',
  '/images/sculptures/dog3.jpg',
  '/images/sculptures/dog4.jpg',
  '/images/sculptures/cowboy.jpg',
];

  return (
    <div className='page-container'>
      <div className='page-wrapper'>
      <div className='drawings-container'>
        <div className="gallery-title-background">Drawings</div>
        <div className='drawings'>
          {drawings.map((pic)=>{
            return(
              <Drawing image={pic}/>
            )
          })}
        </div>
      </div>
      <div className='sculptures-container'>
        <div className='sculptures-background'>
          <div className="sculptures-title-background">Sculptures</div>
        </div>
        <div className='drawings'>
          {sculptures.map((pic)=>{
            return(
              <Drawing image={pic}/>
            )
          })}
        </div>
      </div>
      </div>
    </div>
    //Add footer and create links for contact, interested in a piece, and socials
  )
}

function Drawing (props){
  return(
  <div className='drawing'>
    <img src={props.image} alt="Drawing" className="gallery-drawing"/>
  </div>
  )
}

export default Gallery;