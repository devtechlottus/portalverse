import { SelectInit } from "@/components/fixture";

const data: { [key: string]: any } = {
  "derecho-fiscal": {
    title: "Derecho Fiscal",
    head: {
      titleGral: "Maestría en Derecho Fiscal",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Derecho Fiscal"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "nutricion-obesidad-diabetes": {
    title: "Nutrición en Obesidad y Diabetes",
    head: {
      titleGral: "Maestría en Nutrición en Obesidad y Diabetes",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Nutrición en Obesidad y Diabetes"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "efectividad-organizacional": {
    title: "Efectividad Organizacional",
    head: {
      titleGral: "Maestría en Efectividad Organizacional",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Efectividad Organizacional"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "impuestos": {
    title: "Impuestos",
    head: {
      titleGral: "Maestría en Impuestos",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Impuestos"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "gestion-servicios-salud": {
    title: "Gestión en Servicios de Salud",
    head: {
      titleGral: "Maestría en Gestión en Servicios de Salud",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Gestión en Servicios de Salud"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "salud-ocupacional": {
    title: "Salud Ocupacional",
    head: {
      titleGral: "Maestría en Salud Ocupacional",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Salud Ocupacional"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
          {
            label: 'Modalidad Online', icons: { primary: '', duplicate: false,}, disabled: false,
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "derecho-laboral": {
    title: "Derecho Laboral",
    head: {
      titleGral: "Maestría en Derecho Laboral",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Derecho Laboral"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "terapia-laboral": {
    title: "Terapia Familiar",
    head: {
      titleGral: "Maestría en Terapia Familiar",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Terapia Familiar"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "justicia-administrativa": {
    title: "Justicia Administrativa",
    head: {
      titleGral: "Maestría en Justicia Administrativa",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Justicia Administrativa"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "derecho-mercantil": {
    title: "Derecho Mercantil",
    head: {
      titleGral: "Maestría en Derecho Mercantil",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Derecho Mercantil"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "gestion-ambiental": {
    title: "Gestión Ambiental",
    head: {
      titleGral: "Maestría en Gestión Ambiental",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Gestión Ambiental"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
          {
            label: 'Modalidad Online', icons: {primary: '', duplicate: false, }, disabled: false,
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
          }
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "docencia": {
    title: "Docencia",
    head: {
      titleGral: "Maestría en Docencia",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Docencia"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "educacion": {
    title: "Educación",
    head: {
      titleGral: "Maestría en Educación",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Educación"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "gestion-negocios-manufactura": {
    title: "Gestión de Negocios de Manufactura",
    head: {
      titleGral: "Maestría en Gestión de Negocios de Manufactura",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Gestión de Negocios de Manufactura"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
          {
            label: 'Modalidad Online', icons: {primary: '', duplicate: false, }, disabled: false,
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
          }
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "administracion-liderazgo": {
    title: "Administración y Liderazgo",
    head: {
      titleGral: "Maestría en Administración y Liderazgo",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Administración y Liderazgo"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
          {
            label: 'Modalidad Online', icons: { primary: '', duplicate: false,}, disabled: false,
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "docencia-investigacion-educativa": {
    title: "Docencia e Investigación Educativa",
    head: {
      titleGral: "Maestría en Docencia e Investigación Educativa",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Docencia e Investigación Educativa"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
          {
            label: 'Modalidad Online', icons: {primary: '', duplicate: false, }, disabled: false,
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
          }
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "sistema-penal-acusatorio": {
    title: "Sistema Penal Acusatorio",
    head: {
      titleGral: "Maestría en Sistema Penal Acusatorio",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "administracion de empresas"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "mercadotecnia-estrategica": {
    title: "Mercadotecnia Estrátegica",
    head: {
      titleGral: "Maestría en Mercadotecnia Estrátegica",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Mercadotecnia Estrátegica"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
      tabs: {
        items: [
          {
            label: 'Modalidad Online', icons: { primary: '', duplicate: false,}, disabled: false,
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "administracion": {
    title: "Administración",
    head: {
      titleGral: "Maestría en Administración",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Administración"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
      tabs: {
        items: [
          {
            label: 'Modalidad Online', icons: {primary: '', duplicate: false, }, disabled: false,
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
          }
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "comunicacion-empresarial": {
    title: "Comunicación Empresarial",
    head: {
      titleGral: "Maestría en Comunicación Empresarial",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Comunicación Empresarial"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
      tabs: {
        items: [
          {
            label: 'Modalidad Online', icons: { primary: '', duplicate: false,}, disabled: false,
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "derecho": {
    title: "Derecho",
    head: {
      titleGral: "Maestría en Derecho",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Derecho"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
      tabs: {
        items: [
          {
            label: 'Modalidad Online', icons: {primary: '', duplicate: false, }, disabled: false,
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
          }
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "desarrollo-organizacional-talento-humano": {
    title: "Desarrollo Organizacional y Talento Humano",
    head: {
      titleGral: "Maestría en Desarrollo Organizacional y Talento Humano",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Desarrollo Organizacional y Talento Humano"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
      tabs: {
        items: [
          {
            label: 'Modalidad Online', icons: {primary: '', duplicate: false, }, disabled: false,
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
          }
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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
  "mercadotecnia-digital": {
    title: "Mercadotecnia Digital",
    head: {
      titleGral: "Maestría en Mercadotecnia Digital",
      description: "lore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend finibus ante. Donec elementum euismod facilisis. Praesent sagittis lacus eget tincidunt maximus. Morbi laoreet tristique justo, quis tristique mauris elementum vitae. Sed lobortis tortor vitae felis mollis dapibus. Mauris sit amet nisl dapibus, convallis tortor eget, rhoncus quam. Proin euismod tincidunt magna, vel bibendum mauris mattis e",
      image: {
        src: "https://picsum.photos/seed/picsum/500/400",
        alt: "Mercadotecnia Digital"
      },
    },
    modality: {
      title: "Modalidades disponibles en esta Maestría:",
      tabs: {
        items: [
          {
            label: 'Modalidad Online', icons: {primary: '', duplicate: false, }, disabled: false,
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
          {
            label: 'Modalidad Ejecutiva', icons: {primary: '', duplicate: false, }, disabled: false,
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
      plan: "Maestría en Administración de Empresas Presencial en Campus Piedras Negras",
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