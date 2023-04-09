import { useState } from 'react'

import { PrimaryButton } from "../components/Button"
import { TextInput, TimeInput, SelectInput } from '../components/Input'

import bni_logo from '../assets/bni_logo.svg'
import bri_logo from '../assets/bri_logo.svg'
import dana_logo from '../assets/dana_logo.svg'

export function StepTwo(props) {
    const [index, setIndex] = useState(0)

    const getLength = (e) => {
        if (e.target.value != 0 && e.target.value != null) {

            // console.log(e.target)
            // e.target.classList.add('text-neutral-400')
            // e.target.classList.add('border-emerald-400')
        }
    }

    return (
        <>
            <div className='bg-white p-4 lg:p-8 rounded-md lg:rounded-t-md lg:rounded-b-none absolute top-0 left-0 right-0 lg:static shadow-sm'>
                <h1 className="lg:text-4xl text-xl font-semibold text-peduly-orange">Jumlah donasi</h1>
                    <TextInput id={'nominal'} label={'Nominal donasi'} className={'lg:w-full mt-10'} onChange={getLength} icon={'attach_money'} />
         

                <div className='lg:flex items-center gap-x-8 mt-6'>
                    <SelectInput id={'periode'} label={'Periode donasi'} onChange={getLength} className={'lg:w-1/2'}>
                        <option value="harian" className='bg-red-50 mt-2 p-3 block'>Harian</option>
                        <option value="mingguan" className='bg-red-50 mt-2 p-3 block'>Mingguan</option>
                        <option value="bulanan" className='bg-red-50 mt-2 p-3 block'>Bulanan</option>
                    </SelectInput>
                    <TimeInput id={'waktu'} label={'Waktu donasi'} onChange={getLength} className={'lg:w-1/2'} />
                </div>

                <p className='mt-8 text-neutral-400 text-sm font-semibold'>Metode pembayaran</p>
                <div className='flex gap-8 mt-2 flex-wrap'>
                    <div className='flex justify-center items-center'>
                        <input type="radio" id="metode" value='BNI' name="metode" className='mr-2' />
                        <label>
                            <img src={bni_logo} alt="" className='w-[64px]' />
                        </label>
                    </div>
                    <div className='flex justify-center items-center'>
                        <input type="radio" id="metode" value='BCA' name="metode" className='mr-2' />
                        <label>
                            <img src={bri_logo} alt="" className='w-[64px]' />
                        </label>
                    </div>
                    <div className='flex justify-center items-center'>
                        <input type="radio" id="metode" value='DANA' name="metode" className='mr-2' />
                        <label>
                            <img src={dana_logo} alt="" className='w-[64px]' />
                        </label>
                    </div>
                </div>

            </div>
        </>
    )
}