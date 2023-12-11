export default ({title, content, index}) => (
    <div className="bg-white rounded-lg p-4">
        <div>
            <h2 className="flex gap-4 items-center font-semibold"> 
                <div className="text-4xl lg:text-8xl text-emerald-400">{index + 1}.</div>
                <div className="text-2xl lg:text-4xl">{title}</div>
            </h2>
        </div>
        <h3 className="text-md lg:text-lg">
            {content}
        </h3>            
    </div>
)