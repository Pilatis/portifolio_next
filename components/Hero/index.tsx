import React from 'react'
import { Spotlight } from '../ui/Spotlight'
import { GridBackgroundDemo } from '../ui/GridBackgroundDemo'
import { TextGenerateEffect } from '../ui/TextGenerateEffect'
import MagicButton from '../ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero: React.FC = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
          <Spotlight className="-top-40 left-full md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="-top-30 left-56 md:-left-42 md:-top-20 w-[20vw] h-[80vh]" fill="white" />
          <Spotlight className="-right-2/4 top-20 h-[80vh] w-[45vw]" fill="white" />
        </div>
        <div>
        <GridBackgroundDemo />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic web Magig with Next.js</h2>
            <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words='Transforming Concepts into Seamless User Experiences' />

            <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Lucas, a Next.js Developer based in Brazil
            </div>

            <MagicButton href="#about" iconPosition="right" icon={<FaLocationArrow spacing={2} />}>
              Show my work
            </MagicButton>
          </div>
        </div>
    </div>
  )
}

export default Hero