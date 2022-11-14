import { FC, memo, useEffect } from "react"
import L from "leaflet"
import * as ReactLeaflet from "react-leaflet"
import cn from "classnames"
import "leaflet/dist/leaflet.css"

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png"
import iconUrl from "leaflet/dist/images/marker-icon.png"
import shadowUrl from "leaflet/dist/images/marker-shadow.png"

const { MapContainer } = ReactLeaflet;

const Map: FC<any> = memo(({ classNames, coords, zoom = 15, scroll = false, children }: any) => {

  useEffect(() => {
    (async function init() {
      delete (L.Icon as any).Default.prototype["_getIconUrl"];
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, []);
  
  return <section className={cn(classNames)}>
    <MapContainer center={coords} zoom={zoom} scrollWheelZoom={scroll} className={"h-[214px]"}>
      { children(ReactLeaflet) }
    </MapContainer>
  </section>
});

export default Map