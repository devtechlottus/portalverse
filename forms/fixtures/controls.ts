import { ButtonInit, InputInit } from "@/components/fixture";

const inputConfig = {
  ...InputInit,
  iconLeft: "person",
  label: "Ingresa tu matrícula",
  alphanumeric: true,
  alphabetical: false,
};
const buttonConfigStepOne = {
  ...ButtonInit,
  title: "Consultar"
};
const inputMailConfig = {
  ...InputInit,
  iconLeft: "mail",
  label: "Correo electrónico personal"
};
const inputPhoneConfig = {
  ...InputInit,
  iconLeft: "phone",
  label: "Teléfono"
};
const inputCompanyConfig = {
  ...InputInit,
  iconLeft: "apartment",
  label: "Empresa para la que trabajas"
};
const buttonConfigStepTwo = {
  ...ButtonInit,
  title: "Enviar Datos"
};

export default {
  inputConfig,
  buttonConfigStepOne,
  inputMailConfig,
  inputPhoneConfig,
  inputCompanyConfig,
  buttonConfigStepTwo,
}