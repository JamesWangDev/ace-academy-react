import { useCallback, useState, useRef, useEffect } from "react";
import { IconLgDownArrow, IconUpArrow, IconLanguage } from "../../assets/icons";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";

interface AvatarProps {
    isAdmin?: boolean;
    img: string;
    status: "online" | "offline";
}

const Avatar = ({img, status, isAdmin}: AvatarProps) => {
    const [showPanel, setShowPanel] = useState<boolean>(false)
    const selectRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        setShowPanel(false)
    }, [isAdmin])

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setShowPanel(false);
      }
    };

    const handleClickAvatar =  useCallback(() => {
        setShowPanel(prev => !prev)
    }, [setShowPanel])

    return (
        <div ref={selectRef} className="relative">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleClickAvatar}>
                <div className="relative">
                    <img src={img} alt="avatar" />
                    {!isAdmin && <div className={`w-3.25 h-3.25 absolute rounded-full ${status === "online" ? "bg-green-500" : "bg-primary-500"} top-0 right-0`}></div>}
                </div>
                <div>{showPanel ? <IconUpArrow /> : <IconLgDownArrow />}</div>
            </div>
            {showPanel && <OptionsPanel isAdmin={isAdmin} img={img} />}
        </div>
    )
}

interface OptionsPanelProps {
    isAdmin?: boolean;
    img: string;
}

const OptionsPanel = ({img, isAdmin}: OptionsPanelProps) => {
    const navigate = useNavigate();

    return (
        <div className="absolute top-24 right-0 w-66 p-6 text-midblack bg-white flex flex-col gap-3 rounded-xl shadow-custom2">
            <div className="flex gap-3">
                <img src={img} alt="user avatar" />
                <div>
                    <div className="text-midblack font-extrabold">Arnand Siem</div>
                    <div className="text-sm font-bold text-midgrey">Koppert</div>
                </div>
            </div>
            <Button onClick={() => navigate(isAdmin ? '/overview' : '/admin/dashboard')} label={isAdmin ? "Back to courses" : "Switch to admin"} type="primary" size="md" />
            <div className="font-bold cursor-pointer">My profile</div>
            <div className="font-bold cursor-pointer">Refer a friend</div>
            <div className="font-bold cursor-pointer">Settings</div>
            <hr />
            <div className="flex gap-2">
                <span className="my-auto"><IconLanguage /></span>
                <div className="font-bold cursor-pointer">English</div>
            </div>
            <hr />
            <div className="font-bold cursor-pointer" onClick={() => navigate('/signin')}>Logout</div>
        </div>
    )
}

export default Avatar