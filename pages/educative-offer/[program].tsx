import { useEffect } from "react"
import Head from "next/head"
import Routes from "@/routes/Routes"

const EducativeOfferProgram = ({ data }: any) => {

  useEffect(() => {
    console.log("post", data)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <h1>Carrera: {data.program}</h1>
    <p>{data.description}</p>
  </>
}

export async function getStaticPaths() {
  return {
    paths: Routes["educative-offer"],
    fallback: false,
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const path = "program";
  const programs = [
    { [path]: "design", description: "soy algo", title: "Diseño" },
    { [path]: "code", description: "soy algo nuevo", title: "Código" }
  ];
  const { params: { program } } = context;
  const preFilter = programs.filter((item: any) => item.program === program)
  let dataProgram: {};
  if (!preFilter.length) {
    dataProgram = { error: true, message: "Info no avaliable" }
  } else {
    dataProgram = { ...preFilter[0] }
  }

  return {
    props: { data: {...dataProgram} },
  }
}

export default EducativeOfferProgram;