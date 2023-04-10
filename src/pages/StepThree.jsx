import bni_logo from '../assets/bni_logo.svg'
import bri_logo from '../assets/bri_logo.svg'
import dana_logo from '../assets/dana_logo.svg'

export function StepThree(props) {
    const nominal = JSON.parse(localStorage.getItem('nominal'))
    const waktu = JSON.parse(localStorage.getItem('waktu'))
    const detailWaktu = JSON.parse(localStorage.getItem('detailWaktu'))
    const metode = JSON.parse(localStorage.getItem('metode'))

    const [yyyy, mm, dd, hh, mi] = detailWaktu.split(/[/:\-T]/)
    return (
        <>
            <div className='bg-white rounded-md lg:rounded-t-md lg:rounded-b-none absolute top-0 left-0 right-0 lg:static shadow-sm'>
                <h1 className="lg:text-4xl text-3xl font-semibold text-peduly-orange pt-4 px-8">Konfirmasi</h1>
                <div className='lg:mt-10 mt-5'>
                    <p className='text-gray-400 font-sm font-semibold px-8'>Jumlah donasi</p>
                    <p className='mt-2 text-white bg-peduly-orange font-semibold lg:text-3xl text-xl py-4 px-8'>Rp. {nominal} / {waktu}</p>
                </div>
                <div className='mt-3 lg:flex justify-between items-center border-t py-4 px-8'>
                    <p className='text-gray-400 font-sm font-semibold'>Metode donasi:</p>
                    <img src=
                        {metode == 'bni' ? bni_logo : metode == 'bri' ? bri_logo : metode == 'dana' ? dana_logo : null}
                        className='mt-2 w-[80px]' />
                </div>
                <div className='lg:flex justify-between items-center border-t border-b py-4 px-8'>
                    <p className='text-gray-400 font-sm font-semibold'>Detail waktu donasi:</p>
                    <p className='mt-2'>{dd + '-' + mm + '-' + yyyy + ' jam ' + hh + ':' + mi}</p>
                </div>
                <p className='lg:mt-10 mt-5 py-4 px-8'>
                    <sup className='font-semibold text-peduly-orange text-sm'>
                        *</sup>
                    <i>Catatan : </i>
                    Donasi per{waktu} akan dilakukan satu kali dalam se{waktu} terhitung dari tanggal yang tertera diatas
                </p>
            </div>
        </>
    )
}