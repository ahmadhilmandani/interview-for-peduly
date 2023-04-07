export function TextInput(props) {
    return (
        <>
            <label htmlFor="">{props.label}</label>
            <input {...props} type="text" className="border border-peduly-orange rounded-full" />
        </>
    )
}