import { Button } from "../button";
import { useState, useCallback, useEffect } from 'react'

interface TourStepperProps {
    classNames? : string;
    stepComponents: React.ReactNode[];
}

const TourStepper = ({classNames, stepComponents}: TourStepperProps) => {
    const modalClassNames = `p-16 w-131 my-auto justify-center bg-white items-center overflow-x-hidden overflow-y-auto inset-0 z-50 my-auto rounded-5 shadow-custom ${classNames}`;
    const stepsCount = stepComponents?.length;
    const [currentStep, setCurrentStep] = useState<number>(0)
    const [showTour, setShowTour] = useState<boolean>(true)

    useEffect(() => {
        if(showTour) document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showTour])

    const handleNextStep = useCallback(() => {
        setCurrentStep(prevStep => prevStep + 1);
    }, [setCurrentStep])

    const handlePrevStep = useCallback(() => {
        setCurrentStep(prevStep => prevStep - 1);
    }, [setCurrentStep])

    const handleCloseTour = useCallback(() => {
        setShowTour(false)
    }, [showTour, setShowTour])

    return (
        <>
            {showTour && <div className="w-full h-screen flex fixed z-50 top-0 left-0 justify-center">
                <div className={modalClassNames}>
                    <div className="flex justify-center">
                        <Stepper count={stepsCount} currentStep={currentStep} />
                    </div>
                    <div className="mt-16 flex justify-center">
                        {stepComponents[currentStep]}
                    </div>
                    <div className="mt-16 flex justify-center gap-2">
                        {currentStep !== stepsCount - 1 && <Button disabled={currentStep === 0} onClick={handlePrevStep} label={currentStep === 0 ? "Send again" : "Go back"} />}
                        <Button onClick={currentStep === stepsCount - 1 ? handleCloseTour : handleNextStep} label="Continue" type="primary" />
                    </div>
                </div>
                <div className="fixed inset-0 z-40 backdrop-blur-md"></div>
            </div>}
        </>
    )
}

interface StepperProps {
    count: number;
    currentStep: number;
}
  
const Stepper = ({ count, currentStep }: StepperProps) => {
    const steps = Array.from({ length: count }, (_, index) => index);

    return (
        <div className="flex items-center gap-2">
            {steps.map((step) => (
                <div key={step} className={`rounded-7.5 w-15 h-1.5 ${step <= currentStep ? 'bg-primary-500' : 'bg-tangerine'}`}></div>
            ))}
        </div>
    );
};

export default TourStepper