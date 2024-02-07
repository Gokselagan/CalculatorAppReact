import "./input.css";

export const Input = ({text, result}) => {
    const combinedText = text + result;
    return (
        <div className="input">
            <div className="text">{combinedText}</div>
        </div>
    )
}