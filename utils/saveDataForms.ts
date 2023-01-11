import { useState } from "react"
import axios from "axios"

export const stepsEndpoints: any = {
  step1: process.env.NEXT_PUBLIC_DATOS_PERSONALES,
  step3: process.env.NEXT_PUBLIC_DATOS_COMPLEMENTARIOS
};

export const saveDataForms = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isError, setIsError ] = useState<boolean>(false);
  const [ data, setData ] = useState<any>({});

  const setRegisterBot = () => {
    const id = "F2D4"
    const caracteres = "ABCDEFGHJKMNPQRTUVWXYZ12346789";
    let random = "";
    for (let i = 0; i < 4; i++){
     random += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }  
    let res= random.split("");
    res.splice(Math.floor(Math.random() * res.length), 0, id);
    const lead = res.join("");
   return lead;
  }

  const saveData = (step: string, data: any, Authorization: string, linea?: string) => {
    const bot = setRegisterBot();
    const params = step === 'step1'
      ? `nombre=${data.name}&apellidos=${data.surname}&telefono=${data.phone}&email=${data.email}&lineaNegocio=${linea}&modalidad=${data.modality}&avisoPrivacidad=true&leadSource=Digital&validaRegistroBoot=${bot}&source=landing`
      : `id=${data.id}&nivel=${data.nivel}&campus=${data.campus}&programa=${data.programa}&modalidad=${data.modalidad}&lineaNegocio=${data.lineaNegocio}&medioContacto=${data.medioContacto}&horarioContacto=${data.horarioContacto}`

    setIsLoading(true);
    setIsError(false);
    setData({});
    axios.post(`${stepsEndpoints[step]}?${params}`,{},{
      headers: {
        Authorization,
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
      .then((res: any) => {
        if (res.data.Exitoso === "False") {
          setIsError(true);
          setIsLoading(false);
        } else {
          setData({...res.data});
          setIsError(false);
          setIsLoading(false);
        }
      })
      .catch((err: any) => {
        console.log("err", err)
        setData({});
        setIsLoading(false);
        setIsError(true);
      })
  }

  return {
    isLoading,
    isError,
    data,
    saveData
  }
}