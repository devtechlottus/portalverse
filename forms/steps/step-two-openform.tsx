import { FC, useEffect, useState } from "react"
import cn from "classnames"
import OpenFormInit, { levels, Modalities } from "@/forms/fixtures/openform"
import Select from "@/components/Select"
import { SelectInit } from "@/components/fixture"
import Button from "@/components/Button"
import configControls from "@/forms/fixtures/controls"
import ProgressBar from "@/components/ProgressBar"
import OptionPill from "@/components/OptionPill"
import { OpenFormControls } from "@/types/OpenFormControls.types"

const StepTwo: FC<any> = ({ classNames, data, onNext, step, controls }: any) => {

  const [ config, setConfig ] = useState<any>({ ...OpenFormInit.steptwo });
  const [ controlsConfig, setControlsConfig ] = useState<OpenFormControls | null>(null);
  const [ activePill, setActivePill ] = useState<number>(-1);
  const [ progress, setProgress ] = useState<number>(0);

  useEffect(() => {
    setControlsConfig({...controls});
  }, [controls])

  useEffect(() => {
    setConfig({ ...config, ...data });
  }, [data]);
  
  useEffect(() => {
    setProgress(step);
  }, [step]);

  const handleNext = () => {
    if (!!onNext) {
      onNext()
    }
  }

  const handleSelect = (pill: number, status: boolean, value: string) => {
    if (!status) {
      setActivePill(pill)
    }
  }

  return <section className={cn(classNames)}>
    <h1>{ config.title }</h1>
    <div className="mb-6">
      <ProgressBar data={{ progress }} />
    </div>
    <div className={cn("flex flex-col", { "hidden": controlsConfig?.modality?.hidden })}>
      <p className="font-Nunito font-normal text-[14px] leading-5 text-[#282828] mt-6">{ config.modality }</p>
      <Select onClick={(option: CustomEvent) => console.log("option", option)} options={[...Modalities]} data={{ ...SelectInit, textDefault: "Elige una modalidad" }}  />
    </div>
    <div className={cn("flex flex-col", { "hidden": controlsConfig?.level?.hidden })}>
      <p className="font-Nunito font-normal text-[14px] leading-5 text-[#282828] mt-6 mb-1">{ config.level }</p>
      <div className="w-full flex justify-start gap-6 flex-wrap mt-1">
        {
          levels.map((level: any, i: number) => <OptionPill onClick={(value: string) => handleSelect(i, level.disabled, value)}  key={`pill-${i}`} data={{...level}} active={i === activePill} />)
        }
      </div>
    </div>
    <div className={cn("flex flex-col", { "hidden": controlsConfig?.program?.hidden })}>
      <p className="font-Nunito font-normal text-[14px] leading-5 text-[#282828] mt-6">{ config.program }</p>
      <Select onClick={(option: CustomEvent) => console.log("option", option)} options={[...Modalities]} data={{ ...SelectInit, textDefault: "Elige un programa" }}  />
    </div>
    <div className={cn("flex flex-col", { "hidden": controlsConfig?.campus?.hidden })}>
      <p className="font-Nunito font-normal text-[14px] leading-5 text-[#282828] mt-6">{ config.campus }</p>
      <Select onClick={(option: CustomEvent) => console.log("option", option)} options={[...Modalities]} data={{ ...SelectInit, textDefault: "Elige un campus" }}  />
    </div>
    <div className="mt-6">
      <Button onClick={handleNext} data={ configControls.buttonConfigOpenFormStepOne } />
    </div>
  </section>
}

export default StepTwo