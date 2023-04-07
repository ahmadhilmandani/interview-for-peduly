import { PrimaryButton, SecondaryButton } from '../components/Button'
import { TextInput } from '../components/Input'
function AutomaticDonateForm() {
  return (
    <div className='w-full h-screen flex justify-center items-center gap-8'>
      <form action="get" className='flex justify-center items-center gap-20 flex-wrap'>
        <TextInput />
      </form>
    </div>
  )
}

export default AutomaticDonateForm
