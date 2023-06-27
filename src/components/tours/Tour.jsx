import React from 'react'
import TourCard from './TourCard'
import Container from 'react-bootstrap/Container';

import TourHeading from './TourHeading';

const Tour = () => {
  // https://course-api.com/react-tours-project
  return (
    <div className='tour-container'>
       <Container>
        <TourHeading title='Our Tours' />
        <TourCard />
    </Container>
    </div>
  )
}

export default Tour