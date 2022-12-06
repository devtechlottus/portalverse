import { FC, useEffect, useState } from "react"
import cn from "classnames"
import ProgressBar from "@/components/ProgressBar"
import OpenFormInit from "@/forms/fixtures/openform";
import configControls from "@/forms/fixtures/controls"
import Input from "@/components/Input/Input";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const StepOtherReason: FC<any> = ({ classNames, step, pathThankyou }: any) => {

  const router = useRouter();

  const [ progress, setProgress ] = useState<number>(0);
  const [ config, setConfig ] = useState<any>({ ...OpenFormInit.stepdetails });

  const [ infoControls, setInfoControls ] = useState<any>({
    name: "",
    surname: "",
    phone: "",
    email: "",
    comment: "",
  });

  useEffect(() => {
    setProgress(step);
  }, [step]);

  const handleKeyPress = (e: CustomEvent, control: string ) => {
    const { detail: { value } } = e;
    setInfoControls({ ...infoControls, [control]: value });
  };

  const handleNext = () => {
    router.push(pathThankyou)
  }

  return <section className={cn(classNames)}>
    <h1 className="font-Poppins font-semibold text-[22px] leading-7">{ config.title }</h1>
    <p className="font-Nunito-Sans font-normal text-base leading-4 mt-6">{ config.subtitle }</p>
    <p className="mt-8 mb-6 text-[14px] leading-5 text-[#282828]">{  config.conditions }</p>
    <div className="mb-6">
      <ProgressBar data={{ progress }} />
    </div>
    <div className="mt-6 flex">
      <div>
        <Input data={ configControls.inputNameOpenFormStepOne } eventKeyPress={(e: CustomEvent) => handleKeyPress(e, "name")} />
      </div>
      <div>
        <Input data={ configControls.inputSurnameOpenFormStepOne } eventKeyPress={(e: CustomEvent) => handleKeyPress(e, "surname")} />
      </div>
      </div>
      <div className="mt-6">
        <Input data={ configControls.inputPhoneOpenFormStepOne } eventKeyPress={(e: CustomEvent) => handleKeyPress(e, "phone")} />
      </div>
      <div className="mt-6">
        <Input data={ configControls.inputEmailOpenFormStepOne } eventKeyPress={(e: CustomEvent) => handleKeyPress(e, "email")} />
      </div> 
      <div className="mt-6">
        <Input data={ configControls.inputCommentOpenFormStepOther } eventKeyPress={(e: CustomEvent) => handleKeyPress(e, "email")} />
      </div> 
    <div className="flex mt-8">
      <Button onClick={handleNext} data={ configControls.buttonConfigOpenFormStepOne } />
    </div>
  </section>
}

export default StepOtherReason