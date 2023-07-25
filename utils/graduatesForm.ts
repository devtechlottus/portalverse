import { useState } from "react";
import * as yup from "yup";

export const FormSchema = yup.object().shape({
  enrollment: yup.string().required("Campo requerido"),
  email: yup
    .string()
    .required("Campo requerido")
    .email("Ingresa una dirección de correo válida"),
  phone: yup.string().required("Campo requerido"),
  isWorking: yup.boolean().required(),
  company: yup.string(),
});

export type FormValues = {
  enrollment: string;
  email: string;
  phone: string;
  isWorking: boolean;
  company: string | undefined;
};

export const useToken = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getToken = async (): Promise<string | undefined> => {

    setIsLoading(true);

    try {
      const endpoint = process.env.NEXT_PUBLIC_GRADUATES_FORM_TOKEN_ENDPOINT;
      const username = process.env.NEXT_PUBLIC_GRADUATES_FORM_USERNAME;
      const password = process.env.NEXT_PUBLIC_GRADUATES_FORM_PASSWORD;

      const response = await fetch(`${endpoint}?Usuario=${username}&Contrasena=${password}`);
      const data = await response?.json();
      const token = data?.[0]?.token as string;
      return token;
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, getToken };
};

export const useEnrollmentValidation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const validateEnrollment = async (
    token: string = "",
    body: { matricula: string }
  ): Promise<boolean> => {
    setIsLoading(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GRADUATES_FORM_ENROLLMENT_VALIDATION_ENDPOINT!,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );
      const data = await response?.json();
      const result = data?.[0]?.mensaje?.resultado as string;
      const isValid = result === "true";
      return isValid;
    } catch {
      setIsError(true);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, validateEnrollment };
};

/**
 * These are all the available fields we can send to the graduates registration endpoint.
 */
type GraduateData = {
  matricula?: string;
  correo?: string;
  nombrecompleto?: string;
  telefonocelular?: string;
  programa?: string;
  campus?: string;
  estatus?: string;
  empresa?: string;
  labora?: boolean;
};

export const useGraduateRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendGraduateData = async (
    token: string,
    body: FormValues
  ): Promise<any> => {
    setIsLoading(true);

    /**
     * Currently, we are asking graduates to fill only a fractioN of all the available fields we can send to
     * the graduates registration endpoint. In future interations, we will ask for and send more data.
     */
    const graduateData: GraduateData = {
      matricula: body?.enrollment || "",
      correo: body?.email || "",
      telefonocelular: body?.phone || "",
      labora: body?.isWorking,
      empresa: body?.company || "",
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GRADUATES_FORM_REGISTRATION_ENDPOINT!,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(graduateData),
        }
      );
      const data = await response?.json();
      const isSuccessfulResponse = !!data?.[0]?.egresado;

      if(!isSuccessfulResponse) throw new Error();

      return data;

    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, sendGraduateData };
};