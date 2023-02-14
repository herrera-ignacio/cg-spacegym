import React from 'react'
import type { Engine } from 'tsparticles-engine'
import { Particles as TsParticles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particleOptions from './options'

interface ParticlesProps {
  id: string
}

const Particles: React.FC<ParticlesProps> = ({ id }) => {
  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadFull(engine)
  }

  return (
    <TsParticles
      id={id}
      className='tsparticles'
      init={particlesInit}
      options={particleOptions as any}
    />
  )
}

export default Particles
