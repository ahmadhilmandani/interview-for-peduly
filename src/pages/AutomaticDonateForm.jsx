import { useState } from 'react'

import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { PrimaryButton, SecondaryButton } from '../components/Button'

import imgForMobile from '../assets/img-for-mobile.png'
import imgForDesktop from '../assets/img-for-desktop.png'


export function AutomaticDonateForm() {
  const [index, setIndex] = useState(0)

  return (
    <section className='w-full h-[calc(100vh+320px)] md:h-[calc(100vh+100px)] mt- lg:flex lg:justify-between lg:items-center lg:gap-8 relative lg:static bg-neutral-100'>

      <div className='lg:hidden h-[160px] md:h-[240px] overflow-hidden bg-cover bg-center object-cover flex justify-center items-center gap-8 md:gap-16' style={{ backgroundImage: `url(${imgForMobile})` }}>
        <button className='w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full'>
          1
        </button>
        <button className='w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full'>
          2
        </button>
        <button className='w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full'>
          3
        </button>
        <button className='w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full'>
          4
        </button>
      </div>

      <div className='w-1/3 h-full hidden lg:flex flex-col justify-center items-center gap-8 md:gap-16 overflow-hidden bg-cover bg-center object-cover' style={{ backgroundImage: `url(${imgForDesktop})` }}>
        <button className='w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full'>
          1
        </button>
        <button className='w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full'>
          2
        </button>
        <button className='w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full'>
          3
        </button>
        <button className='w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full'>
          4
        </button>
      </div>

      <div className='pt-28 md:pt-40 lg:pt-0 px-4 lg:static lg:grow absolute top-0 left-0 right-0'>
        <div className='max-w-[680px] lg:w-full relative lg:static mx-auto'>
          {
            index == 0 ? <StepOne /> : null
          }
          {
            index == 1 ? <StepTwo /> : null
          }
          {
            index == 2 ? <StepThree /> : null
          }
          {
            index == 3 ? <StepFour /> : null
          }


          <div className="bg-white py-3 px-5 fixed bottom-0 left-0 right-0 shadow-[0px_-1px_12px_rgba(0,0,0,0.08)] lg:static lg:shadow-none lg:rounded-b-md flex justify-between">

            <SecondaryButton size={'sm'} onClick={() => {
              setIndex(index - 1)
            }}>
              Prev
            </SecondaryButton>

            <PrimaryButton size={'sm'} onClick={() => {
              setIndex(index + 1)
            }}>
              Next
            </PrimaryButton>

          </div>

        </div>
      </div>
    </section >
  )
}
