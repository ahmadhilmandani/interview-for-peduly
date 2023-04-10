import { NumberInput, TimeInput, SelectInput } from '../components/Input'

import bni_logo from '../assets/bni_logo.svg'
import bri_logo from '../assets/bri_logo.svg'
import dana_logo from '../assets/dana_logo.svg'

export function StepTwo({ temptValue, setTempValue }) {
  
    const getLength = (e) => {
        if (e.target.value != 0 && e.target.value != null) {
            // e.target.classList.add('text-neutral-400')
            // e.target.classList.add('border-emerald-400')
            if (e.target.getAttribute('name') == 'waktu') {
                localStorage.setItem('waktu', JSON.stringify(e.target.value));
            }
            else if (e.target.getAttribute('name') == 'metode') {
                localStorage.setItem('metode', JSON.stringify(e.target.value));
            }
        }
    }

    return (
        <>
            <div className='bg-white p-4 lg:p-8 rounded-md lg:rounded-t-md lg:rounded-b-none absolute top-0 left-0 right-0 lg:static shadow-sm'>
                <h1 className="lg:text-4xl text-3xl font-semibold text-peduly-orange">Jumlah donasi</h1>
                <NumberInput id={'nominal'} label={'Nominal donasi'} className={'lg:w-full mt-10'}
                    onChange=
                    {
                        (event) => {
                            localStorage.setItem('nominal', JSON.stringify(event.target.value))
                            setTempValue({ ...temptValue, nominal: event.target.value }
                            )
                        }
                    } icon={'attach_money'} value={temptValue.nominal} />


                <div className='lg:flex items-center gap-x-8 mt-6'>
                    <SelectInput id={'waktu'} label={'Waktu donasi'} onChange={getLength} className={'lg:w-1/2'}>
                        {
                            JSON.parse(localStorage.getItem('waktu')) == 'null'
                                ?
                                <option value={'null'} className='mt-2 p-3 block' selected>Pilih waktu</option>
                                :
                                <option value={'null'} className='mt-2 p-3 block'>
                                    Pilih waktu
                                </option>
                        }
                        {
                            JSON.parse(localStorage.getItem('waktu')) == 'hari'
                                ?
                                <option value='hari' className='mt-2 p-3 block' selected>Harian</option>
                                :
                                <option value='hari' className='mt-2 p-3 block'>
                                    Hari
                                </option>
                        }
                        {
                            JSON.parse(localStorage.getItem('waktu')) == 'minggu'
                                ?
                                <option value='minggu' className='mt-2 p-3 block' selected>Mingguan</option>
                                : <option value='minggu' className='mt-2 p-3 block'>
                                    Mingguan
                                </option>
                        }
                        {
                            JSON.parse(localStorage.getItem('waktu')) == 'bulan'
                                ?
                                <option value='bulan' className='mt-2 p-3 block' selected>Bulanan</option>
                                : <option value='bulan' className='mt-2 p-3 block'>
                                    Bulanan
                                </option>
                        }
                    </SelectInput>
                    <TimeInput id={'detailWaktu'} label={'Detail waktu donasi'} className={'lg:w-1/2 mt-4 lg:mt-0'}
                        onChange=
                        {
                            (event) => {
                                localStorage.setItem('detailWaktu', JSON.stringify(event.target.value))
                                setTempValue({ ...temptValue, detailWaktu: event.target.value }
                                )
                            }
                        } icon={'attach_money'} value={temptValue.detailWaktu} />
                </div>

                <p className='mt-8 text-neutral-400 text-sm font-semibold'>Metode pembayaran</p>
                <div className='flex gap-8 mt-2 flex-wrap'>
                    <div className='flex justify-center items-center'>
                        {
                            JSON.parse(localStorage.getItem('metode')) == 'bni'
                                ?
                                <input type="radio" id="metode" value='bni' name="metode" className='mr-2' onChange={getLength} checked />
                                :
                                <input type="radio" id="metode" value='bni' name="metode" className='mr-2' onChange={getLength} />
                        }
                        <label>
                            <img src={bni_logo} alt="" className='w-[64px]' />
                        </label>
                    </div>
                    <div className='flex justify-center items-center'>
                        {
                            JSON.parse(localStorage.getItem('metode')) == 'bri'
                                ?
                                <input type="radio" id="metode" value='bri' name="metode" className='mr-2' onChange={getLength} checked />
                                :
                                <input type="radio" id="metode" value='bri' name="metode" className='mr-2' onChange={getLength} />
                        }

                        <label>
                            <img src={bri_logo} alt="" className='w-[64px]' />
                        </label>
                    </div>
                    <div className='flex justify-center items-center'>
                        {
                            JSON.parse(localStorage.getItem('metode')) == 'dana'
                                ?
                                <input type="radio" id="metode" value='dana' name="metode" className='mr-2' onChange={getLength} checked />
                                :
                                <input type="radio" id="metode" value='dana' name="metode" className='mr-2' onChange={getLength} />
                        }
                        <label>
                            <img src={dana_logo} alt="" className='w-[64px]' />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}