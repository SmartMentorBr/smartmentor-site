export default ({href = "", children, classes}) => (
    <a href={href} className={`text-center p-2 rounded w-fit font-semibold ${classes}`}>
        {children}
    </a>
)