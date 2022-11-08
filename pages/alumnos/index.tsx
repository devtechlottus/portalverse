import { ReactElement } from "react"
import ContentLayout from "@/layouts/Content.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"

const Alumnos = () => {
  return <p>Esto es alumnos</p>
}

Alumnos.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>
    <ContentLayout>
      { page }
    </ContentLayout>
  </HeaderFooterLayout>
}

export default Alumnos