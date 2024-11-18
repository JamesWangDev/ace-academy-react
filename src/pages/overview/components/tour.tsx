import { TourStepper } from "../../../components/tour-stepper"
import { Input } from "../../../components/input"
import { IconLock, IconDegree, IconToolbox, IconMap, IconCongrats } from "../../../assets/icons"
import { Select } from "../../../components/select"
import { RadioGroup } from "../../../components/radio-group"


const Tour = () => {
    const stepcomponents = [
        <Step1 />,
        <Step2 />,
        <Step3 />,
        <Step4 />,
        <Step5 />,
        <Step6 />
    ]

    return (
        <TourStepper stepComponents={stepcomponents} />
    )
}

const Step1 = () => {
    return (
        <div className="text-midblack text-center">
            <div className="text-30 font-extrabold ">Welcome Jeffrey</div>
            <div className="mt-4 font-semibold leading-6">Please check your mail. We’ve sent you a confirmation link.</div>
        </div>
    )
}

const Step2 = () => {
    return (
        <div>
            <div className="text-midblack text-center">
                <div className="text-30 font-extrabold ">Create a password</div>
                <div className="w-82 mx-auto mt-4 font-semibold leading-6">Your password must be 8 characters long and contain at least one letter, one digit and one special character.</div>
            </div>
            <Input className="mt-8 mx-auto w-77" label="Password" placeholder="Min. 8 character" icon={<IconLock />} />
            <Input className="mt-4 mx-auto w-77" label="Enter your password again" placeholder="Min. 8 character" icon={<IconLock />} />
        </div>
    )
}

const Step3 = () => {
    return (
        <div className="text-midblack text-center">
            <div className="text-30 font-extrabold ">Terms  & Conditions</div>
            <div className="w-82 mt-4 font-semibold leading-6">These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at Website .com.</div>
            <div className="w-82 mx-auto mt-8 font-semibold leading-6">By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.</div>
        </div>
    )
}

const Step4 = () => {
    const options = [
        "Primary education",
        "High school",
        "Bachelor's degree",
        "Master's degree",
        "Doctorate or higher"
    ]

    return (
        <div>
            <div className="text-midblack text-center text-30 font-extrabold ">Tell us about yourself</div>
            <Input className="mt-4 mx-auto w-86" label="Function" placeholder="e.g. Project Manager" icon={<IconToolbox />} />
            <Select className="mt-4 mx-auto w-86" placeholder="e.g. Bachelor's degree" label="Educational attainment" options={options} icon={<IconDegree />} />
            <Input className="mt-4 mx-auto w-86" label="Place" placeholder="e.g. Rotterdam, The Netherlands" icon={<IconMap />} />
            <Input className="mt-4 mx-auto w-86" label="Personal learning objective" placeholder="e.g. develop communication skills" />
        </div>
    )
}

const Step5 = () => {
    const options1 = [
        {
            label: "Disagree", 
            value: "Disagree"
        },
        {
            label: "Neutral", 
            value: "Neutral"
        },
        {
            label: "Agree", 
            value: "Agree"
        },
    ]

    return (
        <div>
            <div className="text-midblack text-center text-30 font-extrabold ">Likert-scale</div>
            <RadioGroup className="mt-8 mx-auto w-86" label="I like technology" options={options1} />
            <RadioGroup className="mt-8 mx-auto w-86" label="I want to learn new things" options={options1} />
            <RadioGroup className="mt-8 mx-auto w-86" label="I’ll subscribe to Ace Acedemy" options={options1} />
        </div>
    )
}

const Step6 = () => {
    return (
        <div>
            <div className="rounded-37.5 w-35 h-35 mx-auto bg-tangerine flex justify-center">
                <span className="m-auto"><IconCongrats /></span>
            </div>
            <div className="mt-8 text-midblack text-center">
                <div className="text-30 font-extrabold ">You’re ready to go!</div>
                <div className="w-82 mx-auto mt-4 font-semibold leading-6">Your account has been created successfully.</div>
            </div>
        </div>
    )
}

export default Tour