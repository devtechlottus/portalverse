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
  isExpand: false,
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
const inputNameOpenFormStepOne = {
  ...InputInit,
  iconLeft: "person",
  label: "Nombre",
};
const inputSurnameOpenFormStepOne = {
  ...InputInit,
  iconLeft: "person",
  label: "Apellidos",
};
const inputPhoneOpenFormStepOne = {
  ...InputInit,
  iconLeft: "person",
  label: "Celular",
};
const inputEmailOpenFormStepOne = {
  ...InputInit,
  iconLeft: "person",
  label: "Correo Electrónico",
};
const buttonConfigOpenFormStepOne = {
  ...ButtonInit,
  isExpand: false,
  title: "Continuar"
};
const buttonConfigOpenFormStepThree = {
  ...ButtonInit,
  isExpand: false,
  title: "Solicita información"
};
const inputCommentOpenFormStepOther = {
  ...InputInit,
  label: "Agrega un comentario",
  type: "textarea",
  maxlength: "100",
};

export default {
  inputConfig,
  buttonConfigStepOne,
  inputMailConfig,
  inputPhoneConfig,
  inputCompanyConfig,
  buttonConfigStepTwo,
  inputNameOpenFormStepOne,
  inputSurnameOpenFormStepOne,
  inputPhoneOpenFormStepOne,
  inputEmailOpenFormStepOne,
  buttonConfigOpenFormStepOne,
  buttonConfigOpenFormStepThree,
  inputCommentOpenFormStepOther,
}