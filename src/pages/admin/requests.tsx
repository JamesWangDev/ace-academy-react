import { useCallback, useState } from "react";
import { Table } from "../../components/table";
import { TableUserAvatar } from "../../assets/imgs";
import { IconOk, IconCancel } from "../../assets/icons";
import { Modal } from "../../components/modal";
import { Button } from "../../components/button";
import { TextArea } from "../../components/textarea";

const Requests = () => {
    const [approveModal, setApproveModal] = useState<boolean>(false)
    const [denyModal, setDenyModal] = useState<boolean>(false)

    const handleApproveModal = useCallback((value: boolean) => () => {
        setApproveModal(value)
    }, [approveModal, setApproveModal])

    const handleDenyModal = useCallback((value: boolean) => () => {
        setDenyModal(value)
    }, [denyModal, setDenyModal])

    const tableColumns = [
        { header: '', width: '5%' },
        { header: 'Naam', width: '20%' },
        { header: 'Course', width: '20%' },
        { header: 'Date', width: '20%' },
        { header: 'Price', width: '15%' },
        { header: '', width: '20%' },
    ];
    const tableData = [
      [<UserAvatar/>, 'John Doe', 'Arnand', '28/11/2023', '€ 245', <ViewUser handleApprove={handleApproveModal} handleDeny={handleDenyModal} />],
      [<UserAvatar/>, 'John Doe', 'Arnand', '28/11/2023', '€ 245', <ViewUser handleApprove={handleApproveModal} handleDeny={handleDenyModal} />],
      [<UserAvatar/>, 'John Doe', 'Arnand', '28/11/2023', '€ 245', <ViewUser handleApprove={handleApproveModal} handleDeny={handleDenyModal} />],
      [<UserAvatar/>, 'John Doe', 'Arnand', '28/11/2023', '€ 245', <ViewUser handleApprove={handleApproveModal} handleDeny={handleDenyModal} />],
      [<UserAvatar/>, 'John Doe', 'Arnand', '28/11/2023', '€ 245', <ViewUser handleApprove={handleApproveModal} handleDeny={handleDenyModal} />],
    ];

    return (
        <>
            <div className="text-30 text-midblack font-extrabold">Employees</div>
            <div className="mt-7.5">
                <Table columns={tableColumns} data={tableData} />
            </div>
            
            <Modal visible={approveModal} setVisible={setApproveModal}>
                <div>
                    <div className="text-midblack text-center">
                        <div className="text-30 font-extrabold ">Approve request</div>
                        <div className="mt-4 font-semibold leading-6">Are you sure you want to approve this request?</div>
                    </div>
                    <div className="mt-16 w-full flex items-center justify-center gap-2">
                        <Button label="No" onClick={handleApproveModal(false)} />
                        <Button label="Yes" onClick={handleApproveModal(false)} type="success" />
                    </div>
                </div>
            </Modal>

            <Modal visible={denyModal} setVisible={setDenyModal}>
                <div>
                    <div className="text-midblack text-center">
                        <div className="text-30 font-extrabold ">Deny request</div>
                    </div>
                    <TextArea className="mt-16" label="Reason" placeholder="Why do you want to deny this course request?" />
                    <div className="mt-16 w-full flex items-center justify-center gap-2">
                        <Button label="Back" onClick={handleDenyModal(false)} />
                        <Button label="Deny" type="warning" onClick={handleDenyModal(false)} />
                    </div>
                </div>
            </Modal>
        </>
    )
}

const UserAvatar = () => {
    return (
        <img className="ml-3 my-2.5" src={TableUserAvatar} alt="table user avatar" />
    )
}

interface ViewUserProps {
    handleApprove: (value: boolean) => () => void;
    handleDeny: (value: boolean) => () => void;
}

const ViewUser = ({handleApprove, handleDeny}: ViewUserProps) => {
    return (
        <div className="flex gap-3 items-center">
            <button className="rounded-2.5 bg-tangerine px-5 py-2 font-semibold text-midblack">View course</button>
            <span onClick={handleApprove(true)}><IconOk /></span>
            <span onClick={handleDeny(true)}><IconCancel /></span>
        </div>
    )
}


export default Requests