import React, { useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import baffle from 'baffle'
import Particles from 'components/Particles'
import WorkoutItem from 'components/WorkoutItem'
import Slider from 'components/Slider'
import useWorkouts from 'hooks/useWorkouts'
import './workoutsList.scss'

const WorkoutsListPage: React.FC = () => {
  const workouts = useWorkouts()

  useEffect(() => {
    const target = baffle('h2.obfuscated')
    target.set({
      characters: '█1010101010',
      speed: 50
    })
    target.start()
    target.reveal(1000, 100)
  })

  return (
    <section id="workouts-list">
      <Particles id='workouts-list-particles' />
      <Container id='workouts-list-grid'>
        <Row id="workouts-list-header-container">
          <Col md={12}>
            <h2 className="obfuscated">Space Workouts</h2>
          </Col>
        </Row>
        <Row id="workouts-slider-container">
          <Slider>
            {workouts.map(w => <WorkoutItem key={w.id} workout={w} />)}
          </Slider>
        </Row>
      </Container>
    </section>
  )
}

export default WorkoutsListPage
