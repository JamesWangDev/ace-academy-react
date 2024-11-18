import { useCallback } from "react"
import AuthLayout from "../layout"
import { Button } from "../../../components/button"
import { Input } from "../../../components/input"
import { Checkbox } from "../../../components/checkbox"
import { IconGoogle, IconMail, IconOutlook, IconLock } from "../../../assets/icons"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const navigate = useNavigate();

    const handleForgotPass = useCallback(() => {
        navigate('/reset-password')
    }, [navigate])

    const handleSignIn = useCallback(() => {
        navigate('/overview')
    }, [navigate])

    return (
        <AuthLayout>
            <div className="text-midblack text-center">
                <div className="text-30 font-extrabold ">Welcome back</div>
                <div className="mt-4 font-semibold leading-6">Sign in to your account to continue</div>
            </div>
            <div className="mt-8 flex gap-3 justify-center">
                <Button label="Google" icon={<IconGoogle />} />
                <Button label="Exchange" icon={<IconOutlook />} />
            </div>
            <div className="mt-8 text-center font-semibold leading-6">Or</div>
            <Input className="mt-4 mx-auto w-86" label="E-mail" placeholder="name@gmail.com" icon={<IconMail />} isRequired />
            <Input className="mt-4 mx-auto w-86" label="Password" placeholder="Min. 8 character" icon={<IconLock />} isRequired />
            <div className="mt-4 flex justify-center gap-16">
                <Checkbox label="Remember me" />
                <div onClick={handleForgotPass} className=" hover:underline hover:underline-offset-8 font-medium cursor-pointer">Forgot password?</div>
            </div>
            <Button onClick={handleSignIn} className="mt-8 mx-auto w-86" label="Sign in" type="primary" />
        </AuthLayout>
    )
}

export default SignIn