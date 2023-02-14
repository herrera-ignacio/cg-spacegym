import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import baffle from 'baffle'
import Particles from 'components/Particles'
import useWorkout from 'hooks/useWorkout'
import './workoutDetails.scss'

const WorkoutDetailsPage: React.FC = () => {
  const { workoutId } = useParams()
  const { loading, workout } = useWorkout(workoutId)

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
    <section id="workout-details">
      <Particles id='workouts-list-particles' />
      {
        loading
          ? (
          /* It'd make sense to add a Spinner if this were really async */
          <div>Loading</div>
            )
          : (workout != null)
              ? (
            <Container id="workout-details-grid">
              <h2 className="obfuscated">{workout.title}</h2>
              <Row id="workout-details-video">
              {/* TODO: Fix accessibility issue, captions are needed */}
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video controls>
                <source src={workout.media} type="video/mp4"/>
              </video>
              </Row>
              <Row id="workout-details-info">
                <Col xs={12}>
                  <p id="workout-details-info-description">{workout.description}</p>
                </Col>
                <Col sm={4} xs={12}><span>Level: {workout.levelTag}</span></Col>
                <Col sm={4} xs={12}><span>Duration: {workout.duration}m</span></Col>
                <Col sm={4} xs={12}><span>Impact: {workout.impactTag}</span></Col>
              </Row>
            </Container>
                )
              : <p>Oops! Workout was not found</p>
      }
    </section>
  )
}

export default WorkoutDetailsPage
