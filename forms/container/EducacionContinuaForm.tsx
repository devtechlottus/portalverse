import { FC, useEffect, useState } from "react"
import cn from "classnames"
import StepOne from "@/forms/steps/step-one-continuouseducation"
import { getTokenForms } from "@/utils/getTokenForms";
import { getEducativeOffer } from "@/utils/getEducativeOffer";
import { saveDataForms } from "@/utils/saveDataForms";
import Image from "@/components/Image";
import Button from "@/components/Button/Button";
import { ButtonInit } from "@/components/fixture";

const EducacionContinuaForm: FC<any> = ({ classNames, copies, image, pathThankyou }: any) => {

  const [ infoForm, setInfoForm ] = useState<any>({});
  const [ tokenActive, setTokenActive ] = useState<string>("");
  const [ levelDefault ] = useState<string>("Educación Continua");
  const [ activeLoader, setActiveLoader ] = useState<boolean>(false);
  const [ errorLoader, setErrorLoader ] = useState<boolean>(false);
  const [ filteredPrograms, setFilteredPrograms ] = useState<any>([]);


  const { isLoading, isError, token } = getTokenForms();

  const { fetchData: fetchEducativeOffer, filterByLevel, data: dataEO, isLoading: isLoadingEO, isError: isErrorEO, sourceData } = getEducativeOffer();

  const { isLoading: isLoadingSD, isError: isErrorSD, data: dataSD, saveDataEducacionContinua } = saveDataForms();

  const handleFetchEducativeOffer = (modality: string) => {
    const linea = 'ULA';
    fetchEducativeOffer(process.env.NEXT_PUBLIC_EDUCATIVE_OFFER!, modality, linea, tokenActive);
  }

  useEffect(() => {
    if (!isLoading && !isError && !!Object.keys(token).length) {
      setTokenActive(`${token.token_type} ${token.access_token}`);
    }
  }, [isLoading, isError, token]);

  useEffect(() => {
    if (!!Object.keys(tokenActive).length) {
      handleFetchEducativeOffer("");
    }
  }, [tokenActive]);

  useEffect(() => {
    if (!isLoadingEO && !isErrorEO) {
      if (!!Object.entries(dataEO).filter(([ key, level ]: any) => level.value === levelDefault).length) {
        const filterPrograms = filterByLevel(levelDefault);
        setFilteredPrograms([ ...filterPrograms ])        
        return
      }
      setFilteredPrograms([]);
    }
  }, [isLoadingEO, isErrorEO, dataEO]);

  useEffect(() => {
    setActiveLoader(isLoading || isLoadingEO || isLoadingSD)
  }, [isLoading, isLoadingEO, isLoadingSD])
  
  useEffect(() => {
    setErrorLoader(isError || isErrorEO || isErrorSD)
  }, [isError, isErrorEO, isErrorSD])

  const handleNext = (info: any) => {
    setInfoForm({ ...info });
    saveDataEducacionContinua({ ...info, medioContacto: info.contacto, horarioContacto: info.horario }, tokenActive );
  }

  return <section className={cn("p-6 shadow-15 bg-white relative", classNames)}>
    <div className={cn("absolute w-full h-full z-10 flex justify-center items-center left-0 top-0", { "hidden": !activeLoader, "block": activeLoader })}>
      <Image src="/images/loader.gif" alt="loader" classNames={cn("w-10 h-10 top-0 left-0")} />
    </div>
    <div className={cn("bg-white absolute w-full h-full z-10 flex flex-col aspect-2/1 justify-center items-center left-0 top-0", { "hidden": !errorLoader, "block": errorLoader })}>
      <Image src="/images/404.png" alt="error" classNames={cn("w-[50%] h-[50%] top-0 left-0")} />
      <h1>Ha ocurrido un error al procesar tu información</h1>
      <h1>Lamentamos el inconveniente y te pedimos intentarlo de nuevo</h1>
      <Button onClick={() => location.reload()} data={{...ButtonInit, title: "Reintentar" }} />
    </div>
    <StepOne data={ copies } step={30} image={image} programs={filteredPrograms} onNext={(info: any) => handleNext(info)}/>
  </section>
}

export default EducacionContinuaForm