import './input-form.styles.css';

type InputFormProps = {
  name: string
  error: string
  type: string
  className: string
  required: "required"
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm = (props: InputFormProps) => {
  return (
    <div className='form-group'>
      <label className="form-label">
        Name: <span className='error'>{props.error}</span>
      </label>
      <input
        type={props.type}
        name={props.name}
        className={props.className}
        onChange={props.onChange}
        value={props.value}
        placeholder="Please Enter Name (required) "
      />
    </div>
  );
};

export default InputForm