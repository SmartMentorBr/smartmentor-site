export default ({items}) => (
    <ul>
        {
            items.map((item) => <li className="flex items-center gap-2">
                <img className="w-12" src="/check.svg" alt="" srcset="" />
                {item}
            </li>)
        }
    </ul>
)