export function PrimaryButton(props) {
    const { size = 'lg', additional = null } = props
    if (size == 'sm') {
        return (
            <button {...props} className={"px-3 md:px-4 lg:px-5 py-2 bg-peduly-orange rounded-full flex justify-center items-center text-center text-sm text-white transition ease-in-out hover:-translate-y-1 duration-200 font-semibold " + additional}>
                {props.children}
            </button>
        )
    }
    else if (size == 'lg') {
        return (
            <button {...props} className={"px-5 md:px-6 lg:px-7 py-2 bg-peduly-orange rounded-full flex justify-center items-center text-center text-base lg:text-xl text-white transition ease-in-out hover:-translate-y-1 duration-200 font-semibold " + additional}>
                {props.children}
            </button>
        )
    }
}

export function SecondaryButton(props) {
    const { size = 'lg', additional = null } = props
    if (size == 'sm') {
        return (
            <button {...props} className={"px-3 md:px-4 lg:px-5 py-2 bg-peduly-gray rounded-full flex justify-center items-center text-center text-sm text-neutral-600 transition ease-in-out hover:-translate-y-1 duration-200 font-semibold " + additional}>
                {props.children}
            </button>
        )
    }
    else if (size == 'lg') {
        return (
            <button {...props} className={"px-5 md:px-6 lg:px-7 py-2 bg-peduly-gray rounded-full flex justify-center items-center text-center text-base lg:text-xl text-neutral-400 transition ease-in-out hover:-translate-y-1 duration-200 font-semibold " + additional}>
                {props.children}
            </button>
        )
    }
}