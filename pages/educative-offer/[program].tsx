import Head from "next/head"
import Link from "next/link"
import { useEffect } from "react"

const EducativeOfferProgram = ({ data }: any) => {

  useEffect(() => {
    console.log("post", data)
  }, [])

  return <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <Link href="/">
      <a>Home</a>
    </Link>
    <h1>Carrera: {data.program}</h1>
    <p>{data.description}</p>
  </>
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { program: "design" } }, { params: { program: "code" } }],
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const programs = [
    { program: "design", description: "soy algo", title: "Diseño" },
    { program: "code", description: "soy algo nuevo", title: "Código" }
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