import Image from "next/image"

const Check = ({checked}) => {
    return checked ? 
      <Image className="m-auto" src="/check.svg" alt="" width={30} height={30}/>
      : <></>
  }
  
  const TableItem = ({title, values}) => (
    <tr className="grid grid-cols-3 lg:grid-cols-4 items-center p-1">
        <td className="font-bold p-1 py-2 col-span-3 lg:col-span-1">{title}</td>
        {values.map(value => <td className="">
            <Check checked={value}/>
        </td>)}
    </tr>
  )  

export default ({head = [], items = []}) => {
    return (
    <table className="sm:w-10/12 overflow-hidden rounded-lg">
        <thead className="bg-primary text-black">
            <tr className="grid grid-cols-3 lg:grid-cols-4 text-[0.7rem] md:text-base">
                <th className="hidden lg:block"></th>
                {head.map(item => <th className="p-[0.8rem] sm:p-1">{item}</th>)}
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