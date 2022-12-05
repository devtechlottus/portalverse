import { FC, useState } from "react"
import cn from "classnames"
import StepOne from "@/forms/steps/step-one-openform"
import StepTwo from "@/forms/steps/step-two-openform"
import StepThree from "@/forms/steps/step-three-openform"

const OpenForm: FC<any> = ({ classNames, image, pathThankyou }: any) => {

  const [ step, setStep ] = useState<number>(1);

  const handleNextStep = () => {
    setStep(step + 1)
  }

  return <section className={cn("p-6 shadow-15 bg-white", classNames)}>
    <StepOne step={30} classNames={cn({ "hidden": step !== 1 })} image={image} onNext={handleNextStep} />
    <StepTwo step={60} classNames={cn({ "hidden": step !== 2 })} onNext={handleNextStep} />
    <StepThree path={pathThankyou} step={90} data={{ modality: "", program: "", level: "", campus: "" }} classNames={cn({ "hidden": step !== 3 })} />
  </section>
}

export default OpenForm