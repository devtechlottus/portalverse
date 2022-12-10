import OptionMenuConfig from "@/types/Header.menus.types"

const Menus: Array<OptionMenuConfig> = [
  { label: "Admisiones", route: "/", items: [] },
  { label: "Oferta Educativa", route: "/oferta-educativa", items: [
    { label: "Bachillerato", route: "/oferta-educativa/bachillerato", },
    { label: "Licenciaturas", route: "/oferta-educativa/licenciatura", },
    { label: "Maestria", route: "/oferta-educativa/maestria", },
    { label: "Posgrados", route: "/oferta-educativa/posgrados", },
    { label: "Escpecialidades", route: "/oferta-educativa/especialidad", },
  ] },
  { label: "Nosotros", route: "/", items: [] },
  { label: "Comunidad UANE", route: "/", items: [] },
]

export default Menus