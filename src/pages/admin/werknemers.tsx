import { Table } from "../../components/table"
import { TableUserAvatar } from "../../assets/imgs";

const Werknemers = () => {
    const tableColumns = [
        { header: '', width: '4.5%' },
        { header: 'Naam', width: '18%' },
        { header: 'Reports to', width: '15%' },
        { header: 'Budget spent', width: '15%' },
        { header: 'Total active time', width: '30%' },
        { header: '', width: '10%' },
    ];
    const tableData = [
      [<UserAvatar/>, 'John Doe', 'Arnand', '€ 45', '1h 30 min', <ViewUser />],
      [<UserAvatar/>, 'John Doe', 'Arnand', '€ 45', '1h 30 min', <ViewUser />],
      [<UserAvatar/>, 'John Doe', 'Arnand', '€ 45', '1h 30 min', <ViewUser />],
      [<UserAvatar/>, 'John Doe', 'Arnand', '€ 45', '1h 30 min', <ViewUser />],
      [<UserAvatar/>, 'John Doe', 'Arnand', '€ 45', '1h 30 min', <ViewUser />],
    ];

    return (
        <>
            <div className="text-30 text-midblack font-extrabold">Employees</div>
            <div className="mt-7.5">
                <Table columns={tableColumns} data={tableData} showCheckbox />
            </div>
        </>
    )
}

const UserAvatar = () => {
    return (
        <img className="my-2.5" src={TableUserAvatar} alt="table user avatar" />
    )
}

const ViewUser = () => {
    return (
        <button className="rounded-2.5 bg-tangerine px-5 py-2 font-semibold text-midblack">View user</button>
    )
}

export default Werknemers