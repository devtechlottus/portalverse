import { FC, useEffect, useState } from "react"
import { useRouter } from "next/router"
import cn from "classnames"
import OpenFormInit, { contacts, Modalities } from "@/forms/fixtures/openform"
import ProgressBar from "@/components/ProgressBar"
import Button from "@/components/Button/Button"
import configControls from "@/forms/fixtures/controls"
import Select from "@/components/Select"
import { SelectInit } from "@/components/fixture"
import OptionPill from "@/components/OptionPill"

const StepThree: FC<any> = ({ classNames, step, data, path }: any) => {

  const router = useRouter();

  const [ config, setConfig ] = useState<any>({ ...OpenFormInit.stepthree });
  const [ activePill, setActivePill ] = useState<number>(-1);
  const [ progress, setProgress ] = useState<number>(0);

  useEffect(() => {
    setProgress(step);
  }, [step]);


  const handleNext = () => {
    router.push(path!);
  }

  const handleSelect = (pill: number, status: boolean, value: string) => {
    if (!status) {
      setActivePill(pill);
    }
  }

  return <section className={cn(classNames)}>
    <h1>{ config.title }</h1>
    <div className="mt-6">
      <ProgressBar data={{ progress }} />
    </div>
    <div className="mt-6 p-3 border-solid border rounded-lg border-[#9A9A9A]">
      <h2>{ config.description }</h2>
      <div className="flex">
        <h3 className="font-Nunito-Sans text-base leading-[17px] font-bold">{ config.labelModality }</h3>
        <p className="font-Nunito-Sans text-base leading-[17px]">{ data.modality }</p>
      </div>
      <div className="flex">
        <h3 className="font-Nunito-Sans text-base leading-[17px] font-bold">{ config.labelNivel }</h3>
        <p className="font-Nunito-Sans text-base leading-[17px]">{ data.level }</p>
      </div>
      <div className="flex">
        <h3 className="font-Nunito-Sans text-base leading-[17px] font-bold">{ config.labelProgram }</h3>
        <p className="font-Nunito-Sans text-base leading-[17px]">{ data.program }</p>
      </div>
      <div className="flex">
        <h3 className="font-Nunito-Sans text-base leading-[17px] font-bold">{ config.labelCampus }</h3>
        <p className="font-Nunito-Sans text-base leading-[17px]">{ data.campus }</p>
      </div>
    </div>
    <div className="mt-6 flex flex-col">
      <p>{ config.contact }</p>
      <div className="w-full flex justify-start gap-6 flex-wrap mt-1">
        {
          contacts.map((level: any, i: number) => <OptionPill onClick={(value: string) => handleSelect(i, level.disabled, value)}  key={`pill-${i}`} data={{...level}} active={i === activePill} />)
        }
      </div>
    </div>
    <div className="mt-6 flex flex-col">
      <p>{ config.schedule }</p>
      <Select onClick={(option: CustomEvent) => console.log("option", option)} options={[...Modalities]} data={{ ...SelectInit, textDefault: "Elige un campus" }}  />
    </div>
    <div className="mt-6">
      <Button onClick={handleNext} data={ configControls.buttonConfigOpenFormStepThree } />
    </div>
  </section>
}

export default StepThree