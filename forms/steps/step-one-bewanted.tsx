import { FC, useEffect, useState } from "react"
import cn from "classnames"
import BeWantedInit from "@/forms/fixtures/bewanted"
import Input from "@/components/Input/Input"
import RichtText from "@/components/Richtext/Richtext"
import Button from "@/components/Button"
import configControls from "@/forms/fixtures/controls"
import BeWantedStepComponentData from "@/types/BeWantedStep.types"

const StepOne: FC<BeWantedStepComponentData> = ({ data, classNames, onNext }: BeWantedStepComponentData) => {

  const { inputConfig, buttonConfigStepOne: buttonConfig } = configControls;

  const [ config, setConfig ] = useState<any>({ ...BeWantedInit });
  const [ enrollment, setEnrollment ] = useState<string>("");

  useEffect(() => {
    setConfig({ ...config, ...data });
  }, [data]);

  const handleNext = () => {
    if (!!onNext) {
      onNext(enrollment)
    }
  }

  const handleKeyPress = (e: CustomEvent) => {
    const { detail: { value } } = e;
    setEnrollment(value);
  }

  return <section className={cn(classNames)}>
    <h1 className="font-Poppins font-semibold text-[22px] leading-7">{ config.title }</h1>
    <p className="font-Nunito-Sans font-normal text-base leading-4 mt-6">{ config.subtitle }</p>
    <div className="mt-6">
      <Input data={ inputConfig } eventKeyPress={(e: CustomEvent) => handleKeyPress(e)} />
    </div>
    <div className="mt-6">
      <RichtText data={{ content: config.message }} />
    </div>
    <div className="flex mt-8">
      <Button onClick={handleNext} data={ buttonConfig } />
    </div>
  </section>
}

export default StepOne