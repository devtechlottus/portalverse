import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound: FC = _ => {
  return <section className="w-full flex font-Poppins justify-center items-center flex-col bg-SC-Actions-AC-200 pt-12.5 mx-auto pb-6">
    <h1 className=" font-bold text-8.5 leading-8.6">¡Qué oso! no encontré esta página...</h1>
    <p className="leading-16.25 font-bold text-13">404</p>
    <Image src="/images/404.png" alt="error_image" layout="fixed" width={384} height={288} priority />
    <p className="text-UNI-066 font-semibold text-5.5 py-6">Pero puedes volver al home</p>
    <Link href={'/'}>
      <a className="py-4 px-8 bg-black rounded text-white text-base mb-18">
      <span className="material-icons material-symbols-outlined text-xs">home</span> Ir al home</a>
    </Link>
  </section>
}

export default NotFound;