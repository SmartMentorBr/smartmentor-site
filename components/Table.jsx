import Image from "next/image"

const Check = ({checked}) => {
    return checked ? 
      <Image className="w-12 m-auto" src="/check.svg" alt="" width={30} height={30}/>
      : <></>
  }
  
  const TableItem = ({title, values}) => (
    <tr>
        <td className="font-bold p-1 py-2">{title}</td>
        {values.map(value => <td className="">
            <Check checked={value}/>
        </td>)}
    </tr>
  )  

export default ({head = [], items = []}) => {
    return (
    <table className="w-full max-w-sm lg:max-w-3xl m-auto">
        <thead className="bg-primary text-black">
            <tr>
                <th className="p-1"></th>
                {head.map(item => <th className="p-1">{item}</th>)}
            </tr>
        </thead>
        <tbody className="bg-white">
            {items.map(item => {
                const [title, values] = Object.entries(item)[0]
                return <TableItem title={title} values={values}/>
            })}
        </tbody>
    </table>
)
}