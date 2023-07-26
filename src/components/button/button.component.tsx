import './button.styles.css';

type ButtonProps = {
    type: "button"
    name: string
    className: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) => {
        return (
            <div className='form-group'>
                <button
                    type={props.type}
                    name={props.name}
                    className={props.className}
                    onClick={props.onClick}
                >Submit Message</button>
            </div>
        )
};

export default Button;