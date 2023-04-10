export function NumberInput(props) {
    const { label, id, additional = null } = props
    return (
        <>
            <div className={props.className}>
                <label htmlFor={id} className="block text-neutral-400 text-sm font-semibold">{label}</label>
                <div className="flex justify-end items-end pb-2 border-b">
                    <span className="mr-2">Rp. </span>
                    <input id={id} {...props} type="number" className={"mt-2 w-full focus:border-peduly-orange outline-none " + additional} placeholder="00,0-" name={id} required/>
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
            <input {...props} id={id} type="datetime-local" name={id} className={"mt-2 w-full py-2 border-b focus:border-peduly-orange outline-none " + additional} required/>
        </div>
    )
}


export function SelectInput(props) {
    const { label, id, additional = null, children } = props
    return (
        <div className={props.className}>
            <label htmlFor={id} className="block text-neutral-400 text-sm font-semibold">{label}</label>
            <select {...props} name={id} id={id} className={"mt-2 w-full py-2 border-b focus:border-peduly-orange outline-none " + additional} required>
                {children}
            </select>
        </div>
    )
}