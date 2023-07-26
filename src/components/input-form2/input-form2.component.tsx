import './input-form2.styles.css';

type InputForm2Props = {
    name: string
    error: string
    type: string
    className: string
    value: string
    required: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm2 = (props: InputForm2Props) => {
    return (
        <div className='form-group'>
            <label className="form-label">Email: <span className='error'>{props.error}</span></label>
            <input
                type={props.type}
                name={props.name}
                className={props.className}
                // required={props.required}
                onChange={props.onChange}
                value={props.value}
                placeholder="Please Enter Email (required)"
            />
        </div>
    )
}

export default InputForm2;