import { FC, Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router";
import cn from "classnames"
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import LinkContactTarget from "@/components/LinkContactTarget";
import LinkIcons from "@/components/LinkLottus";
import FooterPortalverseComponentData from "@/types/FooterPortalverse.types";

const Footer: FC<FooterPortalverseComponentData> = ({ privacyLink, certifications, logotype, social, phone, directorio, sections }: FooterPortalverseComponentData) => {

  const router = useRouter();
  const [ year, setYear ] = useState<string>("0");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return <section className="w-full border-t-[1px] border-solid border-[#282828] mt-[72px]">
    {/* Section logotype */}
    <div className="p-6 w-p:hidden border-b-[1px] border-solid border-[#CDCDCD]">
      <div className="flex justify-between items-center mb-6">
        <Image classNamesImg="w-[200px] h-10" classNames="w-[200px] h-10" src={logotype.src} alt={logotype.alt} />
        <div className="flex">
          <p>Suscríbete a nuestro newsletter</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-9 items-center">
          {
            social.map((item: any, i: number) => <Link key={`social-${i}`} href={item.link} passHref>
                <a target={"_blank"}>
                  <Icon name={item.name} className="w-5 h-5" />
                </a>
              </Link>)
          }
          <div className="flex items-center gap-1">
            <Icon name="phone" className="w-3 h-3" />
            <LinkContactTarget type="tel" info={phone}/>
          </div>
        </div>
        <LinkIcons data={directorio} onClick={() => router.push(directorio.link)} />
      </div>
    </div>
    <div className="p-6 w-d:hidden w-t:hidden flex flex-col border-b-[1px] border-solid border-[#CDCDCD]">
      <div className="flex justify-between items-center mb-6">
        <Image classNamesImg="w-[92px] h-6" classNames="w-[92px] h-6" src={logotype.src} alt={logotype.alt} />
        <LinkIcons data={directorio} onClick={() => router.push(directorio.link)} />
      </div>
      <div className="flex">
        <p>Suscríbete a nuestro newsletter</p>
      </div>
    </div>
    {/* Section logotype */}
    <div className="p-6 w-t:hidden w-p:hidden flex flex-wrap gap-20 border-b-[1px] border-solid border-[#CDCDCD]">
      {
        sections.map((section: any[], i: number) => <div key={`sections-${i}`} className="flex flex-col gap-6">
            {
              section.map((item: any, j: number) => {
                return <Fragment key={`section-access-${j}`}>
                  {
                    !!item.link
                      ? <Link href={item.link} passHref><a><p className={cn({ "font-bold": item.principal })}>{item.label}</p></a></Link>
                      : <p className={cn({ "font-bold": item.principal })}>{item.label}</p>
                  }
                </Fragment>
              })
            }
          </div>)
      }
    </div>
    <div className="p-6 flex flex-col border-b-[1px] border-solid border-[#CDCDCD]">
      <p className="mb-5">{ certifications.title }</p>
      <div className="flex gap-12 w-p:flex-wrap">
        {
          certifications.certificaciones.map(({ src, alt }: any, i: number) => <Image key={`certification-${i}`} classNamesImg="w-11 w-p:w-8 h-12 w-p:h-9" classNames="w-11 w-p:w-8 h-12 w-p:h-9" src={src} alt={alt} />)
        }
      </div>
    </div>
    <div className="p-6 w-t:p-2 w-p:p-4 flex justify-between">
      <p className="w-t:hidden w-p:hidden font-Nunito font-normal italic text-sm leading-[17px] text-[#818181]">Derechos reservados <span className="text-[#000]">Lottus Education { year }</span></p>
      <p className="w-d:hidden font-Nunito font-normal italic text-sm leading-[17px] text-[#818181]">&copy; <span className="text-[#000]">Lottus Education { year }</span></p>
      <Link href={privacyLink.link} passHref>
        <a target={"_blank"}>
          <p className="font-Nunito font-normal italic text-sm leading-[17px] text-[#282828]">{privacyLink.label}</p>
        </a>
      </Link>
    </div>
  </section>
}

export default Footer