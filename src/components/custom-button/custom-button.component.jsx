import './custom-button.styles.scss'

const CustomButton = ({ children, ...props }) => {
    return (
        <button className="custom-button" {...props}>
            {children}
        </button>
    );
}

export default CustomButton;