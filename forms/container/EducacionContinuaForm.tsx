import { FC } from "react"
import cn from "classnames"
import StepOne from "@/forms/steps/step-one-continuouseducation"

const EducacionContinuaForm: FC<any> = ({ classNames, copies, image, pathThankyou }: any) => {
  return <section className={cn("p-6 shadow-15 bg-white", classNames)}>
    <StepOne data={ copies.stepone } step={30} image={image} path={pathThankyou} />
  </section>
}

export default EducacionContinuaForm