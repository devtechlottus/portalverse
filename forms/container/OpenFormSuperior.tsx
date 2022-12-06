import { FC, useEffect, useState } from "react"
import cn from "classnames"
import StepOne from "@/forms/steps/step-one-openform"
import StepTwo from "@/forms/steps/step-two-openform"
import StepThree from "@/forms/steps/step-three-openform"
import { FormConfig } from "@/forms/fixtures/openform"

const OpenFormSuperior: FC<any> = ({ classNames, image, pathThankyou, controls, copies }: any) => {
  
  const [ step, setStep ] = useState<number>(1);
  const [ controlsConfig, setControlsConfig ] = useState({ ...FormConfig });

  useEffect(() => {
    setControlsConfig({ ...controls });
  }, [controls]);

  const handleNextStep = () => {
    setStep(step + 1)
  }

  return <section className={cn("p-6 shadow-15 bg-white", classNames)}>
    <StepOne data={ copies.stepone } step={30} classNames={cn({ "hidden": step !== 1 })} image={image} onNext={handleNextStep} />
    <StepTwo step={60} classNames={cn({ "hidden": step !== 2 })} onNext={handleNextStep} controls={controlsConfig} />
    <StepThree path={pathThankyou} step={90} data={{ modality: "", program: "", level: "", campus: "" }} classNames={cn({ "hidden": step !== 3 })} />
  </section>
}

export default OpenFormSuperior