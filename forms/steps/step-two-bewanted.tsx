import { FC, SyntheticEvent, useEffect, useState } from "react"
import { useRouter } from "next/router";
import cn from "classnames"
import BeWantedInit from "@/forms/fixtures/bewanted"
import Input from "@/components/Input/Input"
import Button from "@/components/Button"
import configControls from "@/forms/fixtures/controls"
import BeWantedStepComponentData from "@/types/BeWantedStep.types"


const StepTwo: FC<BeWantedStepComponentData> = ({ data, classNames, enrollment, path }: BeWantedStepComponentData) => {

  const router = useRouter();
  
  const { inputMailConfig, inputPhoneConfig, inputCompanyConfig, buttonConfigStepTwo: buttonConfig } = configControls;

  const [ config, setConfig ] = useState<any>({ ...BeWantedInit });
  const [ activeCompany, setActiveCompany ] = useState<boolean>(false);
  
  useEffect(() => {
    setConfig({ ...config, ...data });
  }, [data]);

  const handleNext = () => {
    router.push(path!);
  }
  const handleActiveCompany = (e: SyntheticEvent) => {
    const { defaultValue } = (e.target as HTMLInputElement);
    setActiveCompany(defaultValue === "si" ? true : false)
  }

  return <section className={cn(classNames)}>
    <h1 className="font-Poppins font-semibold text-[22px] leading-7">{ config.title }</h1>
    <p className="font-Nunito-Sans font-normal text-base leading-4 mt-6">{ config.subtitleStep2 }</p>
    <div className="mt-6">
      <p className="text-[#686868] text-[13px]">{ `${config.messageEnrollment}${enrollment}`}</p>
    </div>
    <div className="mt-8">
      <Input data={ inputMailConfig } />
    </div>
    <div className="mt-8">
      <Input data={ inputPhoneConfig } />
    </div>
    <div className="mt-8">
      <p className="mb-4">{ config.messageWork }</p>
      <div className="flex gap-6">
        <span>
          Si <input onClick={handleActiveCompany} type="radio" name="work" value="si" />
        </span>
        <span>
          No <input onClick={handleActiveCompany} type="radio" name="work" value="no" />
        </span>
      </div>
    </div>
    <div className={cn({ "hidden": !activeCompany })}>
      <Input data={ inputCompanyConfig } />
    </div>
    <div className="flex mt-8">
      <Button onClick={handleNext} data={ buttonConfig } />
    </div>
  </section>
}

export default StepTwo