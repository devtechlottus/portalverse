import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/old-components/Button/Button";
import Image from "@/old-components/Image";
import Input from "@/old-components/Input/Input";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormSchema,
  useGraduateRegistration,
  useToken,
  useEnrollmentValidation,
} from "@/utils/graduatesForm";
import cn from "classnames";
import type { FormValues } from "@/utils/graduatesForm";

const GraduatesForm = () => {
  const router = useRouter();

  const [token, setToken] = useState<string>("");
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isValidEnrollment, setIsValidEnrollment] = useState<boolean>(false);

  const {
    isLoading: isLoadingToken,
    isError: isErrorToken,
    getToken,
  } = useToken();

  const {
    isLoading: isLoadingEnrollmentValidation,
    isError: isErrorEnrollmentValidation,
    validateEnrollment,
  } = useEnrollmentValidation();

  const {
    isLoading: isLoadingForm,
    isError: isErrorForm,
    sendGraduateData,
  } = useGraduateRegistration();

  const isLoading = isLoadingToken || isLoadingEnrollmentValidation || isLoadingForm;
  const isError = isErrorToken || isErrorEnrollmentValidation || isErrorForm;

  const goNextStep = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const methods = useForm<FormValues>({
    mode: "all",
    resolver: yupResolver(FormSchema),
    defaultValues: {
      enrollment: "",
      email: "",
      phone: "",
      company: ""
    },
  });

  const { watch, trigger } = methods;
  const values = watch();
  const enrollment = watch("enrollment");

  const isValidEnrollmentValue = (value: string) => {
    /**
     * "0" and empty strings are valid enrollment value that exists in the database for testing purposes. We need to check against these values
     * to prevent users from using it to send registries without a proper enrollment number.
     */
    return !!value?.trim() && value !== "0";
  }

  const validateStep = async () => {
    switch (currentStepIndex) {
      case 0: {
        const isValidStep = await trigger("enrollment");

        if (!isValidStep) return;

        if (isValidEnrollmentValue(enrollment)) {
          const token = await getToken();

          if (!token) return;

          setToken(token);
          
          const isValidEnrollment = await validateEnrollment(token, {
            matricula: enrollment,
          });

          setIsValidEnrollment(isValidEnrollment);
        }

        goNextStep();
        break;
      }
      case 1: {
        const isValidStep = await trigger();

        if (!isValidStep) return;

        try {
          await sendGraduateData(token, values);
          router?.push("/thank-you?type=egresados");
        } catch {
          return;
        }
      }
      default:
        return;
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-15 bg-white relative">
      {isLoading && (
        <div className="absolute w-full h-full z-10 flex justify-center items-center left-0 top-0">
          <Image
            src="/images/loader.gif"
            alt="loader"
            classNames={cn("w-10 h-10 top-0 left-0")}
          />
        </div>
      )}
      {isError ? (
        <div className="bg-white w-full h-full p-4 z-10 flex flex-col space-y-6 justify-center items-center left-0 top-0">
          <div
            style={{ maxWidth: "24rem" }}
            className="w-full flex justify-center"
          >
            <img src="/images/404.png" alt="error" />
          </div>
          <div className="text-center">
            <h1>Ha ocurrido un error al procesar tu información</h1>
            <p>Lamentamos el inconveniente y te pedimos intentarlo de nuevo</p>
          </div>
          <Button
            dark
            onClick={() => location.reload()}
            data={{ title: "Reintentar" }}
          />
        </div>
      ) : (
        <div>
          <FormProvider {...methods}>
            {currentStepIndex === 0 && <StepOne validateStep={validateStep} />}
            {currentStepIndex === 1 && (
              <StepTwo
                validateStep={validateStep}
                isValidEnrollment={isValidEnrollment}
              />
            )}
          </FormProvider>
        </div>
      )}
    </div>
  );
};

const StepOne = ({ validateStep }: { validateStep: () => Promise<void> }) => {
  const methods = useFormContext();
  const {
    control,
    formState: { errors },
  } = methods;

  return (
    <div className="flex flex-col space-y-6">
      <p className="font-Poppins text-5 font-semibold leading-7">
        Descubre y disfruta los servicios y eventos creados para nuestra
        comunidad de egresados.
      </p>
      <p className="font-Nunito-Sans font-normal text-base leading-5">
        Actualiza tus datos y únete a nuestra comunidad de egresados.
      </p>
      <div>
        <Controller
          name="enrollment"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              errorMessage={errors?.enrollment?.message?.toString()}
              hasError={!!errors?.enrollment?.message}
              value={value}
              data={{
                alphanumeric: true,
                disabled: false,
                iconLeft: "how_to_reg",
                label: "Ingresa tu matrícula",
                name: "enrollment",
                onPaste: true,
                type: "text",
                typeButton: "classic",
              }}
              eventKeyPress={(e: CustomEvent) => {
                const value = e?.detail?.value;
                onChange(value);
              }}
            />
          )}
        />
      </div>
      <p className="font-Nunito-Sans font-normal text-base leading-5">
        Si has olvidado tu matrícula te pedimos solicitarla con tu comprobante
        de estudios en el correo:{" "}
        <a href="mailto:egresados@uane.edu.mx" className="font-Nunito-Sans font-bold">
          egresados@uane.edu.mx
        </a>
      </p>
      <div>
        <Button
          dark
          onClick={validateStep}
          data={{
            size: "small",
            title: "Consultar",
            type: "primary",
          }}
        />
      </div>
    </div>
  );
};

const StepTwo = ({
  validateStep,
  isValidEnrollment,
}: {
  validateStep: () => Promise<void>;
  isValidEnrollment: boolean;
}) => {

  const methods = useFormContext();
  const {
    watch,
    control,
    setValue,
    formState: { errors },
  } = methods;

  const enrollment = watch("enrollment");
  const isWorking = watch("isWorking");

  useEffect(() => {
    if(!isWorking) {
      setValue("company", "");
    }
  }, [isWorking]);

  return (
    <div>
      {isValidEnrollment ? (
        <div className="flex flex-col space-y-6">
          <p className="font-Poppins text-5 font-semibold leading-7">
            Descubre y disfruta los servicios y eventos creados para nuestra
            comunidad de egresados.
          </p>
          <p className="font-Nunito-Sans font-normal text-base leading-5">
            Revisa que tu matrícula sea la correcta y actualiza tus datos a
            continuación
          </p>
          <p className="font-Nunito font-normal text-xs leading-3 text-SC/Blackandgrey/B-60 p-3 border rounded-lg">
            Matrícula: {enrollment}
          </p>
          <div>
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  data={{
                    alphabetical: false,
                    alphanumeric: false,
                    disabled: false,
                    iconLeft: "mail",
                    label: "Correo electrónico personal",
                    maxlength: "",
                    name: "email",
                    onPaste: true,
                    onlyNumbers: false,
                    pattern: "",
                    placeholder: "",
                    test: "email",
                    type: "text",
                    typeButton: "classic",
                    upperCase: false,
                  }}
                  errorMessage={errors?.email?.message?.toString()}
                  hasError={!!errors?.email?.message}
                  eventKeyPress={(e: CustomEvent) => {
                    onChange(e?.detail?.value);
                  }}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="phone"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value?.toString()}
                  data={{
                    iconLeft: "phone",
                    label: "Teléfono",
                    name: "phone",
                    onPaste: true,
                    onlyNumbers: true,
                    test: "phone",
                    type: "text",
                    typeButton: "classic",
                  }}
                  errorMessage={errors?.phone?.message?.toString()}
                  hasError={!!errors?.phone?.message}
                  // eventFocus={() => handleTouchedControl("phone")}
                  eventKeyPress={(e: CustomEvent) => {
                    onChange(e?.detail?.value);
                  }}
                />
              )}
            />
          </div>
          <div>
            <p className="font-Nunito-Sans font-normal text-base leading-5 mb-4">
              ¿Estás trabajando actualmente?
            </p>
            <div className="flex space-x-6">
              <Controller
                name="isWorking"
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <>
                    <span className="flex items-center space-x-2">
                      <span className="font-Nunito-Sans font-normal text-base leading-5">
                        Si
                      </span>
                      <input
                        className="w-6 h-6"
                        onChange={() => onChange(true)}
                        onBlur={onBlur}
                        type="radio"
                        checked={typeof value === "undefined" ? false : value}
                      />
                    </span>
                    <span className="flex items-center space-x-2">
                      <span className="font-Nunito-Sans font-normal text-base leading-5">
                        No
                      </span>
                      <input
                        className="w-6 h-6"
                        onChange={() => onChange(false)}
                        onBlur={onBlur}
                        type="radio"
                        checked={typeof value === "undefined" ? false : !value}
                      />
                    </span>
                  </>
                )}
              />
            </div>
            {errors?.isWorking?.message && (
              <span className="inline-block font-Nunito text-xs text-[#E57565] font-bold pl-3 text-red mt-3.5">
                Campo requerido
              </span>
            )}
          </div>
          <div
            style={{ height: isWorking ? "76px" : "0px" }}
            className={cn("transition-all overflow-hidden")}
          >
            <Controller
              name="company"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  data={{
                    alphanumeric: true,
                    autocomplete: "off",
                    iconLeft: "mail",
                    label: "Empresa para la que trabajas",
                    name: "company",
                    onPaste: true,
                    type: "text",
                    typeButton: "classic",
                  }}
                  errorMessage={errors?.company?.message?.toString()}
                  hasError={!!errors?.company?.message}
                  // eventFocus={() => handleTouchedControl("email")}
                  eventKeyPress={(e: CustomEvent) => {
                    onChange(e?.detail?.value);
                  }}
                />
              )}
            />
          </div>
          <div>
            <Button
              dark
              onClick={validateStep}
              data={{
                size: "small",
                title: "Enviar datos",
                type: "primary",
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-6">
          <p className="font-Poppins text-5 font-semibold leading-7">
            Matrícula no encontrada
          </p>
          <p className="font-Nunito font-normal text-xs leading-3 text-SC/Blackandgrey/B-60 p-3 border rounded-lg">
            No encontramos la matrícula: {enrollment}
          </p>
          <p className="font-Nunito-Sans font-normal text-base leading-5">
            Asegúrate de haber ingresado correctamente los datos. En caso de que
            no recuerdes tu matrícula o que no puedas acceder ponte en contacto
            con nosotros en el correo:{" "}
            <a
              href="mailto:egresados@uane.edu.mx"
              className="font-Nunito-Sans font-bold"
            >
              egresados@uane.edu.mx
            </a>
          </p>
          <div>
            <Button
              dark
              onClick={() => location.reload()}
              data={{
                size: "small",
                title: "Volver a intentar",
                type: "primary",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GraduatesForm;
