import { SelectInit } from "@/components/fixture";

const data: { [key: string]: any } = {
  "derecho": {
    title: "Derecho",
    head: {
      titleGral: "Doctorado en Derecho",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Derecho"
      },
    },
    modality: {
      title: "Modalidades disponibles en este Doctorado:",
      tabs: {
        items: [
          {
            label: 'Modalidad Presencial', icons: { primary: '', duplicate: false,}, disabled: false,
            content: {
              title: 'Conoce tu futuro perfil',
              cards: [
                {
                  image: {
                    desktop:
                      'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
                    mobile:
                      'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
                  },
                  title: 'Perfil de ingreso 1',
                  text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
                  backgroundColor: '#8B9BA3',
                },
                {
                  image: {
                    desktop:
                      'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
                    mobile:
                      'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
                  },
                  title: 'Perfil de ingreso 2',
                  text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
                  backgroundColor: '#6F7C82',
                },
                {
                  image: {
                    desktop:
                      'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
                    mobile:
                      'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
                  },
                  title: 'Perfil de ingreso 1',
                  text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
                  backgroundColor: '#8B9BA3',
                },
                {
                  image: {
                    desktop:
                      'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
                    mobile:
                      'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
                  },
                  title: 'Perfil de ingreso 2',
                  text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
                  backgroundColor: '#6F7C82',
                },
                
              ],
              wrapper: false,
            }
          },
        ],
        size: 'medium',
      },
    },
    searchSection: {
      title: "Consulta tu plan de estudios en esta modalidad",
      subtitle: "Elige el campus de tu interés:",
      select: {
        value: "Campus Piedras Negras",
        title: "Los planes de estudio pueden variar por campus *"
      }
    },
    searchResult: {
      title: "Plan de estudios: ",
      plan: "Licenciatura en Administración de Empresas Presencial en Campus Piedras Negras",
      initText:"Inicio: ",
      initValue:"1 / Julio /2023 ",
      duracionText:"Duración: ",
      duracionValue:"10 periodos de 4 meses",
    },
    select: {
      config: { ...SelectInit, icon: "home", disabled: true },
      options: [
        {
          value: '00',
          active: true,
          text: '',
        },
        {
          value: '01',
          active: false,
          text: 'Opción 1',
        },
        {
          value: '02',
          active: false,
          text: 'Opción 2',
        },
        {
          value: '03',
          active: false,
          text: 'Opción 3',
        },
        {
          value: '04',
          active: false,
          text: 'Opción 4',
        },
      ]
    }
  },
  "planeacion-liderazgo-ejecutivo": {
    title: "Planeación y Liderazgo Ejecutivo",
    head: {
      titleGral: "Doctorado en Planeación y Liderazgo Ejecutivo",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Planeación y Liderazgo Ejecutivo"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Doctorado:",
      tabs: {
        items: [
          {
            label: 'Modalidad Presencial', icons: { primary: '', duplicate: false,}, disabled: false,
            content: {
              title: 'Conoce tu futuro perfil',
              cards: [
                {
                  image: {
                    desktop:
                      'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
                    mobile:
                      'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
                  },
                  title: 'Perfil de ingreso 1',
                  text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
                  backgroundColor: '#8B9BA3',
                },
                {
                  image: {
                    desktop:
                      'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
                    mobile:
                      'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
                  },
                  title: 'Perfil de ingreso 2',
                  text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
                  backgroundColor: '#6F7C82',
                },
                {
                  image: {
                    desktop:
                      'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
                    mobile:
                      'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
                  },
                  title: 'Perfil de ingreso 1',
                  text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
                  backgroundColor: '#8B9BA3',
                },
                {
                  image: {
                    desktop:
                      'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
                    mobile:
                      'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
                  },
                  title: 'Perfil de ingreso 2',
                  text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
                  backgroundColor: '#6F7C82',
                },
                
              ],
              wrapper: false,
            }
          },
        ],
        size: 'medium',
      },
    },
    searchSection: {
      title: "Consulta tu plan de estudios en esta modalidad",
      subtitle: "Elige el campus de tu interés:",
      select: {
        value: "Campus Piedras Negras",
        title: "Los planes de estudio pueden variar por campus *"
      }
    },
    searchResult: {
      title: "Plan de estudios: ",
      plan: "Licenciatura en Administración de Empresas Presencial en Campus Piedras Negras",
      initText:"Inicio: ",
      initValue:"1 / Julio /2023 ",
      duracionText:"Duración: ",
      duracionValue:"10 periodos de 4 meses",
    },
    select: {
      config: { ...SelectInit, icon: "home", disabled: true },
      options: [
        {
          value: '00',
          active: true,
          text: '',
        },
        {
          value: '01',
          active: false,
          text: 'Opción 1',
        },
        {
          value: '02',
          active: false,
          text: 'Opción 2',
        },
        {
          value: '03',
          active: false,
          text: 'Opción 3',
        },
        {
          value: '04',
          active: false,
          text: 'Opción 4',
        },
      ]
    }
  },
}

export default data;