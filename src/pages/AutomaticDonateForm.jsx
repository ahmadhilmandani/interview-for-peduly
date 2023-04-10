import React, { useState } from 'react'

import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { PrimaryButton, SecondaryButton } from '../components/Button'

import imgForMobile from '../assets/img-for-mobile.png'
import imgForDesktop from '../assets/img-for-desktop.png'

export const stepOneFlagContext = React.createContext()

export function AutomaticDonateForm() {
  const [index, setIndex] = useState(0)

  const [temptValue, setTempValue] = useState(
    {
      nominal: '',
      detailWaktu: '0-0-0T0:0:0.0',
    })

  return (
    <section className='w-full h-[calc(100vh+320px)] md:h-[calc(100vh+100px)] mt- lg:flex lg:justify-between lg:items-center lg:gap-8 relative lg:static bg-neutral-100'>

      <div className='lg:hidden h-[160px] md:h-[240px] overflow-hidden bg-cover bg-center object-cover flex justify-center items-center gap-8 md:gap-16' style={{ backgroundImage: `url(${imgForMobile})` }}>
        <button className={index == 0 ? 'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-100':'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-50'}>
          1
        </button>
        <button className={index == 1 ? 'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-100':'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-50'}>
          2
        </button>
        <button className={index == 2 ? 'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-100':'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-50'}>
          3
        </button>
        <button className={index == 3 ? 'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-100':'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-50'}>
          4
        </button>
      </div>

      <div className='w-1/3 h-full hidden lg:flex flex-col justify-center items-center gap-8 md:gap-16 overflow-hidden bg-cover bg-center object-cover' style={{ backgroundImage: `url(${imgForDesktop})` }}>
        <button className={index == 0 ? 'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-100':'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-50'}>
          1
        </button>
        <button className={index == 1 ? 'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-100':'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-50'}>
          2
        </button>
        <button className={index == 2 ? 'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-100':'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-50'}>
          3
        </button>
        <button className={index == 3 ? 'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-100':'w-[40px] h-[40px] flex justify-center items-center bg-peduly-gray text-neutral-400 rounded-full opacity-50'}>
          3
        </button>
      </div>

      <div className='pt-28 md:pt-40 lg:pt-0 px-4 lg:static lg:grow absolute top-0 left-0 right-0'>
        <div className='max-w-[680px] lg:w-full relative lg:static mx-auto'>
          {
            index == 0 ? <StepOne /> : index == 1 ? <StepTwo temptValue={temptValue} setTempValue={setTempValue} /> : index >= 2 ? <StepThree /> : null
          }

          <div className="bg-white py-3 px-5 fixed bottom-0 left-0 right-0 shadow-[0px_-1px_12px_rgba(0,0,0,0.08)] lg:static lg:shadow-none lg:rounded-b-md flex justify-between">
            <SecondaryButton size={'sm'} onClick={() => {
              if (index != 0)
                setIndex(index - 1)
            }} additional={index == 0 ? 'opacity-0' : index > 3 ? 'hidden' : 'opacity-100'}>
              Prev
            </SecondaryButton>

            <PrimaryButton size={'sm'} onClick={() => {
              breakme: {
                if (index != 4) {
                  if ((index == 1 && temptValue.nominal == '') || (index == 1 && temptValue.detailWaktu == '0-0-0T0:0:0.0' || index == 1 && temptValue.detailWaktu == undefined) || (index == 1 && localStorage.getItem('waktu') == '"null"' || index == 1 && localStorage.getItem('waktu') == null) || (index == 1 && localStorage.getItem('metode') == null || index == 1 && localStorage.getItem('metode') == '')) {
                    break breakme;
                  }
                  setIndex(index + 1)
                }
              }
            }} additional={
              index > 3 ? 'w-full bg-emerald-600' : 'opacity-100'}>
              {index == 0 ? 'Next' : index == 1 ? 'Next' : index >= 2 && index <= 3 ? 'Konfirmasi' : index > 3 ? 'Selesai' : null}
            </PrimaryButton>
          </div>
        </div>
      </div>
      {index == 3 ?
        <div className='bg-neutral-700 w-full h-[calc(100vh+320px)] md:h-[calc(100vh+100px)] absolute top-0 left-0 right-0 bottom-0 bg-opacity-80 flex justify-center items-center p-2 lg:p-0'>
          <div className='w-full bg-white max-w-[540px] px-4 py-10 rounded-md'>
            <h1 className="lg:text-4xl text-3xl font-semibold text-peduly-orange text-center">Seluruh data udah bener kan?</h1>
            <p className='mt-4 text-center'>
              Kalau udah, langsung aja klik tombol <b>"konfirmasi"</b>. Tapi kalau ragu-ragu, dicek lagi dulu aja yaa..
            </p>
            <div className='flex justify-center items-center flex-wrap gap-4 mt-10 mx-auto'>
              <SecondaryButton size={'sm'} onClick={() => {
                setIndex(index - 1)
              }} additional='w-full lg:w-fit'>
                Ragu-ragu nih, mau cek dulu ya..
              </SecondaryButton>

              <PrimaryButton size={'sm'} onClick={() => {
                setIndex(index + 1)
              }} additional='w-full lg:w-fit'>
                Konfirmasi! aman kok!
              </PrimaryButton>
            </div>
          </div>
        </div> :
        null}

    </section >
  )
}
