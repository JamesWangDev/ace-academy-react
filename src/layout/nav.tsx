import { useCallback } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { Input } from "../components/input";
import { IconSearch } from "../assets/icons";
import { Avatar } from "../components/avatar";
import { UserAvatar, AdminAvatar } from "../assets/imgs";
import { IconWhiteHeart, IconUser } from "../assets/icons";

interface NavProps {
    isAdmin?: boolean;
}

const Nav = ({isAdmin} : NavProps) => {
    const navigate = useNavigate()
    const navigation = useLocation()
    const pathName = navigation.pathname

    const gotoHome = useCallback(() => {
        navigate('/overview')
    }, [navigate])

    const gotoAllCourses = useCallback(() => {
        navigate('/all-courses')
    }, [navigate])

    return (
        <>
            <div className="fixed top-0 bg-white z-40 px-32 w-full h-24 flex justify-between">
                <div className="flex my-auto items-center gap-x-22.5">
                    <div className="text-2xl text-midblack font-extrabold cursor-pointer" onClick={gotoHome}>ACE ACADEMY</div>
                    {!isAdmin && <Input className="w-101" type="rounded" placeholder="Search courses, skills, teachers" icon={<IconSearch />} />}
                </div>
                <div className="flex my-auto items-center gap-x-12.5">
                    {!isAdmin && <div className="flex gap-x-5 text-midblack font-extrabold">
                        <span className="cursor-pointer" onClick={gotoAllCourses}>All courses</span>
                        <span className="cursor-pointer">My courses</span>
                    </div>}
                    <div>
                        <Avatar isAdmin={isAdmin} img={isAdmin ? AdminAvatar : UserAvatar} status="online" />
                    </div>
                </div>
            </div>
            {isAdmin && <div className="fixed top-24 bg-white border font-bold text-midblack border-bannergrey z-30 px-32 w-full h-15 flex gap-8">
                <NavLink to={'/admin/dashboard'} className={`flex items-center gap-2.5 border-b-2 ${pathName === '/admin/dashboard' ? "border-primary-500" : "border-white"}`}><IconWhiteHeart /><span>Dashboard</span></NavLink>
                <NavLink to={'/admin/werknemers'} className={`flex items-center gap-2.5 border-b-2 ${pathName === '/admin/werknemers' ? "border-primary-500" : "border-white"}`}><IconUser /><span>werknemers</span></NavLink>
                <NavLink to={'/admin/requests'} className={`flex items-center gap-2.5 border-b-2 ${pathName === '/admin/requests' ? "border-primary-500" : "border-white"}`}><span>requests</span><span className="w-3.25 h-3.25 rounded-full bg-primary-500" /></NavLink>
                <NavLink to={'/admin/analytics'} className={`flex items-center border-b-2 ${pathName === '/admin/analytics' ? "border-primary-500" : "border-white"}`}><span>analytics</span></NavLink>
                <NavLink to={'/admin/settings'} className={`flex items-center border-b-2 ${pathName === '/admin/settings' ? "border-primary-500" : "border-white"}`}><span>settings</span></NavLink>
            </div>}
        </>
    )
}

export default Nav