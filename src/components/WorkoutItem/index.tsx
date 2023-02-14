import React, { useEffect, useState, useCallback } from 'react'
import Tilt from 'react-parallax-tilt'
import baffle from 'baffle'
import { useNavigate } from 'react-router-dom'
import type Workout from 'entities/Workout'
import './workoutItem.scss'

interface WorkoutItemProps {
  workout: Workout
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({ workout }) => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const handleOnClick = useCallback(() => {
    navigate(`/workouts/${workout.id}`, { replace: true })
  }, [navigate, workout.id])

  useEffect(() => {
    const target = baffle('h4.obfuscated')
    target.set({
      characters: '█1010101010',
      speed: 50
    })
    target.start()
    target.reveal(1000, 100)
  })

  return (
    <Tilt>
      <div className='workout-item shadow'
        onMouseEnter={() => { setShow(true) }}
        onKeyDown={() => { setShow(true) }}
        onMouseLeave={() => { setShow(false) }}
        onKeyUp={() => { setShow(false) }}
        role="button"
        tabIndex={Number(workout.id)}
        onClick={handleOnClick}
      >
        <img src={workout.thumbnail} alt={workout.title} />
        {show && (
          <div className='workout-item-info-container'>
            <div className='workout-item-info'>
              <h4 className='obfuscated'>{workout.title}</h4>
              <p>{workout.levelTag} - {workout.duration}m</p>
            </div>
          </div>
        )}
      </div>
    </Tilt>
  )
}

export default WorkoutItem
