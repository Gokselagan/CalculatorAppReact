export const Button = ({value, bgColor, color, handleClick}) => {
    return (
        <button className="h-20 flex justify-center items-center text-3xl bg-neutral-700 text-white flex-1 m-1 border-none cursor-pointer rounded-full" style={{backgroundColor : bgColor, color: color}} onClick={() => handleClick(value)}>{value}</button>
    )
}