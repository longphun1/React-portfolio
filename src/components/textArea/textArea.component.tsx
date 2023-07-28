type TextAreaProps = {
  id: string;
  name: string;
  error: string;
  required: string;
  className: string;
  rows: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};

const TextArea = (props: TextAreaProps) => {
  return (
    <div className="form-group">
      <label className="form-label">
        Message: <span className="error">{props.error}</span>
      </label>
      <textarea
        name={props.name}
        id={props.id}
        // required={props.required}
        className={props.className}
        rows={props.rows}
        onChange={props.onChange}
        value={props.value}
        placeholder="Message Here! (required)"
      />
      <span className="error">{props.error}</span>
    </div>
  );
};

export default TextArea;
