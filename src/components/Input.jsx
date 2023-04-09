// import { Children } from "react"

export function TextInput(props) {
    const { label, id, additional = null, icon } = props
    return (
        <>
            <div className={props.className}>
                <label htmlFor={id} className="block text-neutral-400 text-sm font-semibold">{label}</label>
                <div className="flex justify-end items-end pb-2 border-b">
                    <span className="text-gray-400 mr-2">Rp. </span>
                    <input id={id} {...props} type="number" className={"mt-2 w-full focus:border-peduly-orange outline-none " + additional} placeholder="00,0-" />
                </div>
            </div>
        </>
    )
}


export function TimeInput(props) {
    const { label, id, additional = null } = props
    return (
        <div className={props.className}>
            <label htmlFor={id} className="block text-neutral-400 text-sm font-semibold">{label}</label>
            <input {...props} id={id} type="time" name="waktu donasi" className={"mt-2 w-full py-2 border-b focus:border-peduly-orange outline-none " + additional} />
        </div>
    )
}


export function SelectInput(props) {
    const { label, id, additional = null, children } = props
    return (
        <div className={props.className}>
            <label htmlFor={id} className="block text-neutral-400 text-sm font-semibold">{label}</label>
            <select {...props} name="" id="" className={"mt-2 w-full py-2 border-b focus:border-peduly-orange outline-none " + additional}>
                {children}
            </select>
        </div>
    )
}