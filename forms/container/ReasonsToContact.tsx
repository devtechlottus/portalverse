import { FC, useState } from "react"
import cn from "classnames"
import StepZero from "@/forms/steps/step-zero-openform"
import StepOtherReason from "@/forms/steps/step-otherreason-openform";
import OpenForm from "@/forms/container/OpenForm";

const ReasonsToContact: FC<any> = ({ classNames }: any) => {

  const [ reason, setReason ] = useState<string>("");

  const handleReasonSelected = (value: string) => {
    setReason(value)
  }

  return <section className={cn("p-6 shadow-15 bg-white", classNames)}>
    <StepZero step={50} classNames={cn({ "hidden": !!reason })} onNext={(value: string) => handleReasonSelected(value) } />
    <OpenForm classNames={cn({ "hidden": reason === "" || reason !== "programs" })} pathThankyou={`/ThankYouPage`} image={{ src: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg", alt:"image-person" }} />
    <StepOtherReason pathThankyou={`/ThankYouPage`} step={90} classNames={cn({ "hidden": reason === "" || reason === "programs" })} />
  </section>
}

export default ReasonsToContact