import cn from "classnames"
import ContentLayoutProps from "@/types/ContentLayout.types"

export default function ContentLayout({ children, classNamesOutside, classNamesInside } : ContentLayoutProps) {
  return <section className={cn("grid grid-cols-12-gap w-t:grid-cols-8-gap w-p:grid-cols-4-gap gap-grid-gap max-w-d-base mx-auto w-d-base:px-6", classNamesOutside)}>
    <section className={cn("col-span-12 w-t:col-span-8 w-p:col-span-4", classNamesInside)}>
      { children }
    </section>
  </section>
}