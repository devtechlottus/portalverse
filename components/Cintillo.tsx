import { FC, useEffect, useState } from "react" 
import cn from "classnames"
import LinkContactTarget from "@/components/LinkContactTarget"
import CintilloData from "@/types/Cintillo.types"

const Cintillo: FC<CintilloData> = ({ image, title, subtitle, email, phone, classNames }: CintilloData) => {
  
  const [ changeDetect, setChangeDetect ] = useState<number>(0);
  const [ bgImage, setBgImage ] = useState<string>("");
  const [ bgImages, setBgImages ] = useState<any>({});

  const detectResize = () => {
    setChangeDetect((prevState: number) => prevState + 1);
  }

  useEffect(() => {
    setBgImages({ ...image });
  }, [image]);

  useEffect(() => {
    detectResize();
    window.addEventListener('resize', detectResize);
    return () => window.removeEventListener('resize', detectResize);
  }, []);

  useEffect(() => {
    const { outerWidth} = window;
    if (outerWidth < 1024 && outerWidth >= 600) {
      setBgImage(bgImages.desktop || image?.desktop);
    }
    if ( outerWidth < 600) {
      setBgImage(bgImages.mobile || image?.mobile);
    }
  }, [changeDetect]);// eslint-disable-line react-hooks/exhaustive-deps

  return <div style={{"backgroundImage":`url(${bgImage})`}} className={cn("col-span-12 w-t:col-span-8 w-p:col-span-4 bg-cover p-10", classNames)}>
    <h1 className="font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-6.5 w-t:text-6 w-p:text-6 text-black w-p:text-white">{ title }</h1>
    <h3 className="font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5 text-black w-p:text-white">{ subtitle }</h3>
    {
      email != "" ? 
      <div className="flex my-4">
        <span className="material-icons pr-2 pt-1 text-2 text-black w-p:text-white">mail</span>
        <LinkContactTarget classNames="text-black w-p:text-white" type="email" info={email} />
      </div>
      : null
    }
      {
        phone != "" ? 
        <div className="flex  my-4">
          <span className="material-icons pr-2 pt-1 text-2 text-black w-p:text-white">phone</span>
          <LinkContactTarget classNames="text-black w-p:text-white" type="phone" info={phone} />
          </div>
        : null
      }
  </div>
  }

export default Cintillo