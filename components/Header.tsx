import Image from "next/image";
import Link from "next/link";
import IconComponent from "@/components/Icon";

const Header = () => {
  return <section className="w-full flex border-b-2 border-solid border-black font-Nunito">
    <div className="py-6 px-7">
      <Link href={"/"}>
        <a>
          <Image src="https://www.fimpes.org.mx/images/universidades/uane.PNG" width={143} height={38} />
        </a>
      </Link>
    </div>
    <div className="grow">
      <div className="flex justify-end gap-6 py-1">
        <span>
          <p>Accesos para:</p>
        </span>
        <span>
          <Link href={"/alumnos"}>
            <a>Alumnos</a>
          </Link>
        </span>
        <span className="pr-7">
          <Link href={"/egresados"}>
            <a>Egresados</a>
          </Link>
        </span>
      </div>
      <div className="flex py-2">
        <div className="grow">
          {/* Aqui van los menus */}
        </div>
        <div className="px-4 cursor-pointer">
          <IconComponent name="search" className="w-6" />
        </div>
        <div className="px-8">
          <button>Pedir informes</button>
        </div>
      </div>
    </div>
  </section> 
}

export default Header;