import { useCallback, useState } from "react"
import AuthLayout from "../layout"
import { Button } from "../../../components/button"
import { Input } from "../../../components/input"
import { IconMail, IconCheckMark } from "../../../assets/icons"

const ResetPassword = () => {
    const [isMailSent, setIsMailSent] = useState<boolean>(false)

    const handleOnClickSendMailButton = useCallback(() => {
        setIsMailSent(true)
    }, [isMailSent])

    return (
        <AuthLayout>
            {!isMailSent ? <div>
                <div className="text-midblack text-center">
                    <div className="text-30 font-extrabold ">Reset your password</div>
                    <div className="w-86 mx-auto mt-4 font-semibold leading-6">Enter your email and we’ll send you a link to reset your password</div>
                </div>
                <Input className="mt-8 mx-auto w-86" label="E-mail" placeholder="name@gmail.com" icon={<IconMail />} />
                <Button onClick={handleOnClickSendMailButton} className="mt-8 mx-auto w-86" label="Send link to email" type="primary" />
            </div> : 
            <div>
                <div className="rounded-37.5 w-35 h-35 mx-auto bg-tangerine flex justify-center">
                    <span className="m-auto"><IconCheckMark /></span>
                </div>
                <div className="mt-8 text-midblack text-center">
                    <div className="text-30 font-extrabold ">Email sent</div>
                    <div className="w-86 mx-auto mt-4 font-semibold leading-6">Check your email and open the link we sent to continue.</div>
                </div>
            </div>}
        </AuthLayout>
    )
}

export default ResetPassword