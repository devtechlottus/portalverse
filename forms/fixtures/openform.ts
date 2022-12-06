import { OpenFormControls } from "@/types/OpenFormControls.types";
import { OptionConfig } from "@/types/OptionPilll.types";
import { SelectOptionConfig } from "@/types/Select.types"

const OpenFormInit = {
  stepone: {
    title: "¿Quieres conocer más de UANE?",
    subtitle: "Elegir una universidad es una gran decisión y queremos orientarte en cada paso, comparte tus datos para que un asesor de admisiones te oriente a resolver todas tus dudas y puedas estar seguro de tu elección.",
    conditions: "Al llenar tus datos aceptas nuestro Aviso de privacidad",
    modality: "¿Qué modalidad te interesa?",
  },
  steptwo: {
    title: "Cuéntanos ¿Qué programa te interesa?",
    modality: "Modalidad elegida",
    level: "¿Qué nivel quieres estudiar?",
    program: "¿Qué programa educativo deseas estudiar?",
    campus: "¿En dónde te gustaría asistir?",
  },
  stepthree: {
    title: "Gracias por tu interés ",
    description: "Seleccionaste lo siguiente",
    labelModality: "Modalidad: ",
    labelNivel: "Nivel: ",
    labelProgram: "Programa: ",
    labelCampus: "Campus: ",
    contact: "¿Cómo prefieres que te contactemos?",
    schedule: "Elige el horario en el que prefieres que te contactemos",
  },
  stepzero: {
    title: "Escríbenos",
    subtitle: "Si tienes dudas sobre tu universidad o quieres información."
  },
  stepdetails: {
    title: "Escríbenos",
    subtitle: "Si tienes dudas sobre tu universidad o quieres información.",
    conditions: "Al llenar tus datos aceptas nuestro Aviso de privacidad",
  }
}

export const levels: Array<OptionConfig> = [
  {
    name: 'option 1',
    search: 'option1',
    disabled: false,
  },
  {
    name: 'option 2',
    search: 'option2',
    disabled: false,
  },
  {
    name: 'option 3',
    search: 'option3',
    disabled: true,
  },
  {
    name: 'option 4',
    search: 'option4',
    disabled: false,
  },
  {
    name: 'option 5',
    search: 'option5',
    disabled: false,
  },
];

export const contacts: Array<OptionConfig> = [
  {
    name: 'contact 1',
    search: 'contact1',
    disabled: false,
  },
  {
    name: 'contact 2',
    search: 'contact2',
    disabled: false,
  },
  {
    name: 'contact 3',
    search: 'contact3',
    disabled: false,
  },
  {
    name: 'contact 4',
    search: 'contact4',
    disabled: false,
  },
];

export const Modalities: Array<SelectOptionConfig> = [
  {
    value: '01',
    active: false,
    text: 'AGUASCALIENTES',
  },
  {
    value: '02',
    active: false,
    text: 'BAJA CALIFORNIA NORTE',
  },
  {
    value: '03',
    active: false,
    text: 'BAJA CALIFORNIA SUR',
  },
  {
    value: '04',
    active: false,
    text: 'CHIHUAHUA',
  },
];


export const QuestionStepZero: Array<SelectOptionConfig> = [
  {
    text: 'Quiero información sobre los programas educativos',
    value: 'programs',
    active: false,
  },
  {
    text: 'Me interesa hablar con alguien de la universidad',
    value: 'university',
    active: false,
  },
  {
    text: 'Soy parte de la comunidad y necesito que me contacten',
    value: 'community',
    active: false,
  },
  {
    text: 'Otro motivo de contacto',
    value: 'other',
    active: false,
  },
];

export const FormConfig: OpenFormControls = {
  level: { hidden: false },
  program: { hidden: false },
  modality: { hidden: false },
  campus: { hidden: false },
}

export default OpenFormInit