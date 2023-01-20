
import { env } from "process";
import { useState } from "react";

export const fetchStrapi = async (model: string, params: string[] ) => {

    return await fetch(`${env.NEXT_PUBLIC_STRAPI_URL}/api/${model}${!!params.length && '?' + params.join('&')}`, {
      headers:{
        'Authorization': `Bearer ${env.NEXT_PUBLIC_STRAPI_TOKEN}`
      }
    })
  }


