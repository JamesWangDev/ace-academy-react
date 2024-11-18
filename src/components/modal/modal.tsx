import { useEffect, useRef } from "react";

interface ModalProps {
    classNames? : string;
    children: React.ReactNode;
    visible: boolean;
    setVisible: (value: boolean) => void;
}

const Modal = ({classNames, children, visible, setVisible}: ModalProps) => {
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setVisible(false);
        }
    };


    const modalClassNames = `p-16 w-131 my-auto justify-center bg-white items-center overflow-x-hidden overflow-y-auto inset-0 z-50 my-auto rounded-5 shadow-custom ${classNames}`;

    return (
        <>
            {visible && <div className="w-full h-screen flex fixed z-50 top-0 left-0 justify-center">
                <div ref={selectRef} className={modalClassNames}>
                    {children}
                </div>
                <div className="fixed opacity-40 inset-0 z-40 bg-black"></div>
            </div>}
        </>
    )
}

export default Modal