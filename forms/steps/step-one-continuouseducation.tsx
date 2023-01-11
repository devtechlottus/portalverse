import { FC, useState } from "react"
import { useRouter } from "next/router"
import cn from "classnames"
import OpenFormInit, { Modalities } from "@/forms/fixtures/openform"
import Image from "@/components/Image"
import Input from "@/components/Input/Input"
import configControls from "@/forms/fixtures/controls"
import Select from "@/components/Select"
import Button from "@/components/Button/Button"
import { SelectInit } from "@/components/fixture"


const StepOne: FC<any> = ({ classNames, data, image, path }: any) => {

  const router = useRouter()

  const [ config, setConfig ] = useState<any>({ ...OpenFormInit.steponecontinuos });
  const [ infoControls, setInfoControls ] = useState<any>({
    name: "",
    surname: "",
    phone: "",
    email: "",
    modality: "",
  });

  const handleNext = () => {
    router.push(path!);
  };

  const handleKeyPress = (e: CustomEvent, control: string ) => {
    const { detail: { value } } = e;
    setInfoControls({ ...infoControls, [control]: value });
  };

  const handleOptionSelected = (option: CustomEvent) => {};

  return <section className={cn(classNames)}>
    <div className="flex gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="font-Nunito-Sans font-bold text-5 leading-6">{ config.title }</h1>
        <p className="font-Nunito font-normal text-[14px] leading-4">{ config.subtitle }</p>
      </div>
      <div className={"w-[112px] h-[112px]"} >
        <Image classNamesImg="rounded-full" classNames="aspect-1/1 w-[112px] h-[112px]" src={image.src} alt={image.alt} />
      </div>
    </div>
    <p className="mt-8 mb-6 text-[14px] leading-5 text-[#282828]">{  config.conditions }</p>
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
      <p className="font-Nunito font-normal text-[14px] leading-5">{ config.modality }</p>
      <Select onClick={(option: CustomEvent) => handleOptionSelected(option)} options={[...Modalities]} data={{ ...SelectInit, textDefault: "Elige un programa" }}  />
    </div>
    <div className="mt-6">
      <Button onClick={handleNext} data={ configControls.buttonConfigSend } />
    </div>
  </section>
}

export default StepOne