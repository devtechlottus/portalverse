import { FC, useState } from "react"
import cn from "classnames"
import StepOne from "@/forms/steps/step-one-egresados"
import StepTwo from "@/forms/steps/step-two-egresados"
import EgresadosFormComponentData from "@/types/EgresadosForm.types"

const BeWantedForm: FC<EgresadosFormComponentData> = ({ classNames, pathThankyou }: EgresadosFormComponentData) => {

  const [ step, setStep ] = useState<number>(1);
  const [ error, setError ] = useState<boolean>(false);
  const [ enrollment, setEnrollment ] = useState<string>("");

  const handleNextStep = (enrollment: string) => {
    setEnrollment(enrollment)
    setStep(step + 1)
  }

  return <section className={cn("p-6 shadow-15 bg-white", classNames)}>
    <StepOne classNames={cn({ "hidden": step !== 1 })} onNext={(enrollment: string) => handleNextStep(enrollment)} />
    <StepTwo path={pathThankyou} enrollment={enrollment} classNames={cn({ "hidden": step !== 2 })} />
  </section>
}

export default BeWantedForm