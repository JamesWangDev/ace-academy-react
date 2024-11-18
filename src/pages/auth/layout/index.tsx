import { BgSignUp } from "../../../assets/imgs";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
    return (
        <>
            <div className="w-full flex">
                <div className='w-1/2'>
                    <img src={BgSignUp} className='object-cover' alt='bg-signup' />
                </div>
                <div className='w-1/2 my-auto px-23'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AuthLayout