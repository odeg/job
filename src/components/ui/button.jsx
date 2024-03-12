const Button = ({title , link}) => {
    return (
        <div>
            <a href={link} className="text-center font-semibold bg-black p-2 rounded-md text-white hover:bg-black/50 ">
                {title}
            </a>
        </div>
    )
}
export default Button