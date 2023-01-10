import { createRef, FC, memo, useEffect } from "react"
import YoutubeComponentData from "@/types/Youtube.types"

const Youtube: FC<YoutubeComponentData> = memo(({ data }: YoutubeComponentData) => {
  const youtubeRef = createRef();

  useEffect(() => {
    const { options } = data;
    (youtubeRef.current as any).data = { ...options };
    // set title iframe
    if (!!(youtubeRef.current as any).querySelector('iframe')) {
      ((youtubeRef.current as any).querySelector('iframe') as HTMLIFrameElement).setAttribute("title", "video");
      ((youtubeRef.current as any).querySelector('iframe') as HTMLIFrameElement).setAttribute("src", `https://www.youtube-nocookie.com/embed/${options?.id}`);
    }
    if(data.hasOwnProperty('dimensions')) {
      const { dimensions } = data;
      // set dimensions
      if(!!dimensions && dimensions.hasOwnProperty('height')) {
        (youtubeRef.current as HTMLElement).style.height = (dimensions!.height as string);
      }
      if(!!dimensions && dimensions.hasOwnProperty('width')) {
        (youtubeRef.current as HTMLElement).style.width = (dimensions!.width as string);
      }
    }
  }, [data, youtubeRef]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-youtube ref={youtubeRef}></lottus-youtube>
});

export default Youtube