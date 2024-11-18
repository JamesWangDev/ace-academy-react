import { useState, useCallback } from "react"
import AuthLayout from "../layout"
import { Button } from "../../../components/button"
import { Input } from "../../../components/input"
import { IconLock, IconCheckMark } from "../../../assets/icons"
import { useNavigate } from "react-router-dom"

const NewPassword = () => {
    const navigate = useNavigate();
    const [isNewPass, setIsNewPass] = useState<boolean>(false)

    const handleOnClickReset = useCallback(() => {
        setIsNewPass(true)
    }, [isNewPass])

    const handleOnClickLogin = useCallback(() => {
        navigate('/signin')
    }, [navigate])

    return (
        <AuthLayout>
            {!isNewPass ? <div>
                <div className="text-midblack text-center">
                    <div className="text-30 font-extrabold ">New password</div>
                    <div className="w-86 mx-auto mt-4 font-semibold leading-6">Your password must contain at least 8 characters and 1 number</div>
                </div>
                <Input className="mt-8 mx-auto w-86" label="Password" placeholder="Min. 8 character" icon={<IconLock />} />
                <Input className="mt-4 mx-auto w-86" label="Type your password again" placeholder="Min. 8 character" icon={<IconLock />} />
                <Button onClick={handleOnClickReset} className="mt-8 mx-auto w-86" label="Reset password" type="primary" />
            </div> : 
            <div>
                <div className="rounded-37.5 w-35 h-35 mx-auto bg-tangerine flex justify-center">
                    <span className="m-auto"><IconCheckMark /></span>
                </div>
                <div className="mt-8 text-midblack text-center">
                    <div className="text-30 font-extrabold ">Password reset</div>
                    <div className="w-86 mx-auto mt-4 font-semibold leading-6">Your password has been reset successfully</div>
                    <Button onClick={handleOnClickLogin} className="mt-8 mx-auto w-86" label="Login now" type="primary" />
                </div>
            </div>}
        </AuthLayout>
    )
}

export default NewPassword