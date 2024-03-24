
export const Input = ({text, result}) => {
    const combinedText = text + result;
    return (
        <div className="h-52 flex flex-col justify-end items-end p-4 text-white">
            <div className="text-5xl font-light">{combinedText}</div>
        </div>
    )
}