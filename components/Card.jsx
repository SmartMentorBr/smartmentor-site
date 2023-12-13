export default ({children, index, className}) => (
    <div className={"bg-white rounded-lg p-2 flex flex-col gap-1 h-fit " + className}>
        {children}
    </div>
)