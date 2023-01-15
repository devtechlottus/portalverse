import React, { FC, memo, useEffect, useState } from "react"
import cn from "classnames"
import YoutubeComponentData from "@/types/Youtube.types";


const Youtube: FC<YoutubeComponentData> = memo(({ data }: YoutubeComponentData) => {
  const [ url, setURL ] = useState<string>("");
  const [ dimensions, setDimensions ] = useState<any>({});
  
  useEffect(() => {
    if (!!data?.options?.id!) {
      setURL(`https://www.youtube.com/embed/${data?.options?.id!}`);
    }

    if(!!data.hasOwnProperty('dimensions')) {
      const { dimensions } = data;
      // set dimensions
      setDimensions({ ...dimensions, width: !!dimensions.hasOwnProperty('width') ? (dimensions!.width as string) : "100%" ,height: !!dimensions.hasOwnProperty('height') ? (dimensions!.height as string) : "100%" })
    }
  }, [data]);

  return <section className={cn("w-full")}>
    <iframe width={dimensions.width} height={dimensions.height} className="w-full" title="video" src={url} />
  </section>
})

export default Youtube