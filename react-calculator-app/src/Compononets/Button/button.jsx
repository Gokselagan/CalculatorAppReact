import "./button.css";

export const Button = ({value, bgColor, color, handleClick}) => {
    return (
        <button className="btn" style={{backgroundColor : bgColor, color: color}} onClick={() => handleClick(value)}>{value}</button>
    )
}