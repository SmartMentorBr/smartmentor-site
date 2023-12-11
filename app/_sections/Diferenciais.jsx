const Check = ({checked}) => {
  return checked ? 
    <img className="w-12 m-auto" src="/check.svg" alt="" srcset="" />
    : <></>
}

const TableItem = ({title, vals}) => (
  <tr>
    <td className="font-bold">{title}</td>
    <td><Check checked={vals[0]}/></td>
    <td><Check checked={vals[1]}/></td>
    <td><Check checked={vals[2]}/></td>
  </tr>
)

export default () => (
    <section id="diferenciais">
    <h2 className="text-2xl">Confira os nossos diferenciais</h2>
    <table className="w-full">
      <thead>
        <tr>
          <th></th>
          <th>Aceleradoras</th>
          <th>Instituições</th>
          <th>Smartmentor</th>
        </tr>
      </thead>
      <tbody>
        <TableItem
          title={"Acompanhamento Contínuo"}
          vals={[
            true,
            true,
            true
          ]}
        />
        <TableItem
          title={"Processo Estruturado"}
          vals={[
            true,
            true,
            true
          ]}
        />

        <TableItem
          title={"Mentores Qualificados"}
          vals={[
            true,
            true,
            true
          ]}
        />

        <TableItem
          title={"Apoio nos estágios iniciais"}
          vals={[
            true,
            true,
            false
          ]}
        />
      </tbody>
   </table>
   </section>
)