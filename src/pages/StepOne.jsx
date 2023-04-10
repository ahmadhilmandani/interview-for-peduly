import { useContext, useState } from 'react'

import { PrimaryButton } from "../components/Button"

import { stepOneFlagContext } from './AutomaticDonateForm'

export function StepOne() {
    const [index, setIndex] = useState(0)

    const indexChange = () => {
        setIndex(index + 1)
        localStorage.setItem('index', JSON.stringify(index + 1))
    }

    return (
        <>
            <div className='bg-white p-4 lg:p-8 rounded-md lg:rounded-t-md lg:rounded-b-none absolute top-0 left-0 right-0 lg:static shadow-sm'>
                <h1 className="lg:text-4xl text-3xl font-semibold text-peduly-orange">Mekanisme Donatur Tetap</h1>
                <p className="text-neutral-400 mt-2 mb-6" >Biar ga <i>miskom</i> mohon dibaca dengan seksama ya..</p>

                <ol className='lg:hidden block pl-4 list-decimal mb-8 break-normal'>
                    <li className='mb-2'>Isi seluruh data pada form ini</li>
                    <li className={index < 1 ? 'mb-2 hidden' : 'mb-2 list-item'}>
                        Jika sudah terisi, klik tombol "Konfirmasi"
                    </li>
                    <li className={index < 2 ? 'mb-2 hidden' : 'mb-2 list-item'}>
                        Anda dapat berhenti atau mengubah jumlah donasi yang diberikan kapanpun
                    </li>
                    <li className={index < 3 ? 'mb-2 hidden' : 'mb-2 list-item'}>
                        Anda akan otomatis berdonasi lewat e-wallet yang anda akan pilih nanti
                    </li>
                    <li className={index < 4 ? 'mb-2 hidden' : 'mb-2 list-item'}>
                        E-wallet kosong? Tenang! Kami akan beritahukan bahwa donasi tidak dapat dilanjutkan sampai e-wallet terisi lagi
                    </li>
                    <li className={index < 5 ? 'mb-2 hidden' : 'mb-2 list-item'}>
                        Ketika anda berhenti atau mengubah jumlah donasi, donasi sebelumnya tidak dapat ditarik kembali
                    </li>
                </ol>

                <ol className='lg:block hidden pl-4 list-decimal mb-8 break-normal'>
                    <li className='mb-2'>Isi seluruh data pada form ini</li>
                    <li className='mb-2'>
                        Jika sudah terisi, klik tombol "Konfirmasi"
                    </li>
                    <li className='mb-2'>
                        Anda dapat berhenti atau mengubah jumlah donasi yang diberikan kapanpun
                    </li>
                    <li className='mb-2'>
                        Anda akan otomatis berdonasi lewat e-wallet yang anda akan pilih nanti
                    </li>
                    <li className='mb-2'>
                        E-wallet kosong? Tenang! Kami akan beritahukan bahwa donasi tidak dapat dilanjutkan sampai e-wallet terisi lagi
                    </li>
                    <li className='mb-2'>
                        Ketika anda berhenti atau mengubah jumlah donasi, donasi sebelumnya tidak dapat ditarik kembali
                    </li>
                </ol>

            </div>


            <div className={index < 5 ? "lg:hidden bg-white py-3 px-5 fixed bottom-0 left-0 right-0 shadow-[0px_-1px_12px_rgba(0,0,0,0.08)] lg:static lg:shadow-none lg:rounded-b-md z-50" : 'hidden'} >
                <div className='flex justify-end'>
                    {
                        index < 5 ?
                            <PrimaryButton size={'sm'} additional='opacity-50 hover:opacity-100' onClick={indexChange}>
                                Siapp..
                            </PrimaryButton>
                            :
                            null
                    }
                </div>
            </div>



        </>
    )
}