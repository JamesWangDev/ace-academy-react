import { useCallback, useState } from "react";
import { AdminAvatarLg, UserAvatar } from "../../assets/imgs"
import { Switch } from "../../components/switch";
import { Input } from "../../components/input";
import { IconSearch, IconPlus } from "../../assets/icons";
import { Button } from "../../components/button";
import { Checkbox } from "../../components/checkbox";

const Settings = () => {
    const [checked, setChecked] = useState<boolean>(true)

    const handSwitch = useCallback(() => {
        setChecked(prev => !prev)
    }, [setChecked])

    return (
        <>
            <div>
                <div className="text-30 text-midblack font-extrabold">Account settings</div>
                <div className="mt-7.5 rounded-5 bg-white p-10 flex gap-40">
                        <div><img src={AdminAvatarLg} alt="admin avatar" /></div>
                        <div className="w-full">
                            <SettingRow name="Name organization" value={"Koppert"} />
                            <SettingRow 
                                name="E-mailadress" 
                                value={<div>
                                    <div>info@koppert.nl</div>
                                    <div className="mt-1 text-primary-500 leading-6">Verified</div>
                                </div>} 
                            />
                            <SettingRow 
                                name="Billing email" 
                                value={<div>
                                    <div>accounts@koppert.nl</div>
                                    <div className="mt-1 text-primary-500 leading-6">Verified</div>
                                </div>} 
                            />
                            <SettingRow 
                                name="Budget" 
                                value={<div className="flex items-center gap-2">
                                    <Switch checked={checked} onChange={handSwitch} />
                                    <div>€2500</div>
                                </div>} 
                            />
                            <SettingRow name="Office" value={<div className=" text-brightgrey">Not specified</div>} />
                            <SettingRow
                                name="Departments" 
                                value={<div className="flex flex-col gap-1">
                                    <span>HR</span>
                                    <span>Finance</span>
                                    <span>IT</span>
                                    <span>Productior</span>
                                    <span>Overig</span>
                                </div>} 
                            />
                            <SettingRow
                                name="Company information" 
                                value={<div className="flex flex-col gap-1">
                                    <span>KVK</span>
                                    <span>Adress</span>
                                    <span>Place</span>
                                    <span>Place</span>
                                    <span>BTW number</span>
                                </div>} 
                                divider={false}
                            />
                        </div>
                </div>
            </div>
            <div className="mt-12.5">
                <div className="text-30 text-midblack font-extrabold">Admin members</div>
                <div className="mt-25 mb-25 rounded-5 bg-white p-10 h-131">
                    <div className="flex justify-between">
                        <Input className="w-101" type="rounded" placeholder="Search admins" icon={<IconSearch />} />
                        <Button rounded label="Add member" type="primary" icon={<IconPlus />} />
                    </div>
                    <div className="mt-11 grid grid-cols-12 font-extrabold">
                        <div className="col-span-5 flex gap-10">
                            <Checkbox />
                            <div className="">Admins</div>
                        </div>
                        <div className="col-span-7">Status</div>
                    </div>
                    <hr className="mt-6" />
                    <div className="mt-11 grid grid-cols-12 font-extrabold">
                        <div className="col-span-5 flex gap-10">
                            <Checkbox />
                            <div className="flex items-center gap-7.5">
                                <img src={UserAvatar} alt="user avatar" />
                                <div>
                                    <div>Arnand Siem</div>
                                    <div className=" font-semibold text-bannergrey">Product owner</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

interface SettingRowProps {
    name: string;
    value: any;
    divider?: boolean
}

const SettingRow = ({name, value, divider = true}: SettingRowProps) => {
    return (
        <div>
            <div className="mt-5 text-midblack grid grid-cols-10">
                <div className="font-extrabold col-span-4">{name}</div>
                <div className="font-bold  col-span-4">{value}</div>
                <div className="flex justify-end col-span-2">
                    <button className="px-5 text-primary-500 rounded-12.5 h-11 border-[1.5px] border-primary-500 font-bold">Change</button>
                </div>
            </div>
            {divider && <hr className="mt-7.5" />}
        </div>
    )
}

export default Settings