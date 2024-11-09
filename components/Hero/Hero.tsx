import React from 'react'
import { Spotlight } from '../ui/Spotlight'

const Hero: React.FC = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
          <Spotlight className="left-2/4 top-65 h-[80vh] w-[40vw]" fill="blue" />
        </div>
    </div>
  )
}

export default Hero