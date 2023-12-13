export default ({title, subtitle, align = "center"}) => (
    <div className={"py-4 flex flex-col gap-1 text-" + align}>
        {title && <h2 className="subtitle">{title}</h2>}
        {subtitle && <h3 className="title">{subtitle}</h3>}        
    </div>
)