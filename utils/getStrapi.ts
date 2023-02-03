
import { env } from "process";
import { useState } from "react";

export const fetchStrapi = async (model: string, params: string[] ) => {

    return await fetch(`${env.NEXT_PUBLIC_STRAPI_URL}/api/${model}${!!params.length && '?' + params.join('&')}`, {
      headers:{
        'Authorization': `Bearer ${env.NEXT_PUBLIC_STRAPI_TOKEN}`
      }
    })
  }

export const replaceURL = (image: any, format?: string) => {
  let urlImage = format 
    ? image.data.attributes.formats[format].url
    : image.data.attributes.url
  urlImage.replace(env.NEXT_PUBLIC_IMAGE_URL, env.NEXT_PUBLIC_ASSETS_URL)
  return urlImage
}