export default ({title, subtitle, align = "center"}) => (
    <div className={"text-" + align}>
        <h2 className="text-xl font-bold text-emerald-500 uppercase">{title}</h2>
        <h3 className="text-4xl">{subtitle}</h3>
    </div>
)