export function TextInput(props) {
    const { label, id, additional = null } = props
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} type="text" className={"mt-2 w-full max-w-[400px] px-4 py-2 border border-peduly-gray rounded-md focus:border-peduly-orange outline-none " + additional} />
        </div>
    )
}