import "./Button.css";

const Button = ({ name }) => {
    return (
        <h3>
            <div className="btn">{name}</div>
        </h3>
    );
};

export default Button;
