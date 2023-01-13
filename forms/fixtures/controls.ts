import { ButtonInit, InputInit } from "@/components/fixture";

const patternEmail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z0-9]{2,4}$/i;

const inputConfig = {
  ...InputInit,
  iconLeft: "person",
  label: "Ingresa tu matrícula",
  alphanumeric: true,
  alphabetical: false,
  id: "matricula"
};
const buttonConfigStepOne = {
  ...ButtonInit,
  isExpand: false,
  title: "Consultar"
};
const inputMailConfig = {
  ...InputInit,
  iconLeft: "mail",
  label: "Correo electrónico personal",
  alphanumeric: false,
  alphabetical: false,
  onlyNumbers: false,
  id: "email"
};
const inputPhoneConfig = {
  ...InputInit,
  iconLeft: "phone",
  label: "Teléfono",
  alphanumeric: false,
  alphabetical: false,
  onlyNumbers: true,
  id: "phone"
};
const inputCompanyConfig = {
  ...InputInit,
  iconLeft: "apartment",
  label: "Empresa para la que trabajas",
  id: "company"
};
const buttonConfigStepTwo = {
  ...ButtonInit,
  title: "Enviar Datos"
};
const inputNameOpenFormStepOne = {
  ...InputInit,
  iconLeft: "person",
  label: "Nombre",
  id: "name"
};
const inputSurnameOpenFormStepOne = {
  ...InputInit,
  iconLeft: "person",
  label: "Apellidos",
  id: "surname"
};
const inputPhoneOpenFormStepOne = {
  ...InputInit,
  iconLeft: "call",
  label: "Celular",
  alphanumeric: false,
  alphabetical: false,
  onlyNumbers: true,
  maxlength: '10',
  id: "phone"
};
const inputEmailOpenFormStepOne = {
  ...InputInit,
  iconLeft: "mail",
  label: "Correo Electrónico",
  alphanumeric: false,
  alphabetical: false,
  onlyNumbers: false,
  id: "mail"
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
const buttonConfigSend = {
  ...ButtonInit,
  isExpand: false,
  title: "Enviar"
};
const inputCommentOpenFormStepOther = {
  ...InputInit,
  label: "Agrega un comentario",
  type: "textarea",
  maxlength: "100",
  id: "comments"
};

const errorMessagesStepOneOpenForm = {
  name: 'Ingresa un nombre',
  surname: 'Ingresa tus apellidos',
  email: 'Ingresa un correo electrónico válido',
  phone: 'Ingresa un teléfono de 10 dígitos',
  modality: 'Debes elegir una modalidad'
}
const errorMessagesStepTwoOpenForm = {
  modality: 'Debes elegir una modalidad',
  level: 'Debes elegir un nivel',
  program: 'Debes elegir un programa',
  campus: 'Debes elegir un campus'
}
const errorMessagesStepThreeOpenForm = {
  contacto: 'Debes elegir un Medio de Contacto',
  horario: 'Debes elegir un Horario de Contacto'
}
const errorMessagesStepOneOpenFormContinuous = {
  name: 'Ingresa un nombre',
  surname: 'Ingresa tus apellidos',
  email: 'Ingresa un correo electrónico válido',
  phone: 'Ingresa un teléfono de 10 dígitos',
  program: 'Debes elegir un programa'
}

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
  buttonConfigSend,
  patternEmail,
  errorMessagesStepOneOpenForm,
  errorMessagesStepTwoOpenForm,
  errorMessagesStepThreeOpenForm,
  errorMessagesStepOneOpenFormContinuous
}