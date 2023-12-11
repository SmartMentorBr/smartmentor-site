export default ({img, name, content, role}) => (
    <div className="bg-white rounded-lg p-4 flex gap-4">
        <img className="w-32 h-32 rounded-full" src={img} alt="" />
        <div className="flex flex-col gap-4">
            <p>
                {content}
            </p>
            <div>
                <h4 className="text-emerald-400 font-bold">{name}</h4>
                <h5 className="font-bold">{role}</h5>
            </div>
        </div>
    </div>
)