

const Button = ({ variant, onClick , children }) => {

    if (!variant)
        return (
            <button onClick={onClick} class="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                {children}
            </button>
    )
    
    if (variant === "Blue")
        return (
            <button onClick={onClick} class="inline-flex items-center justify-center px-4 py-2 text-base font-medium  text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                {children}
            </button>
    )
}

export default Button