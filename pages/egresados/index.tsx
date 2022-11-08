import { ReactElement } from "react"
import ContentLayout from "@/layouts/Content.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"

const Egresados = () => {
  return <p>Esto es egresados</p>
}

Egresados.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>
    <ContentLayout>
      { page }
    </ContentLayout>
  </HeaderFooterLayout>
}

export default Egresados