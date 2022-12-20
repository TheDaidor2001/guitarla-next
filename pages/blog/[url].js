import Image from "next/image";
import Layout from "../../components/layout";
import styles from '../../styles/blog.module.css'
import { formatearFecha } from "../../utils/helpers";


export default function Post({post}) {

    const {titulo, contenido, imagen, publishedAt} = post[0].attributes


  return (
    <Layout
        title={titulo}
    >
        <article>
            <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen blog ${titulo}`} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
            </div>
        </article>
    </Layout>
  )
}


export async function getStaticPaths(){
    const res = await fetch(`${process.env.API_URL}/posts`)
    const {data} = await res.json()

    const paths = data.map(post => ({
        params: {
            url: post.attributes.url
        }
    })) 


    return{
        paths,
        fallback: false
    }
}


export async function getStaticProps({params: {url}}){

    const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const {data: post} = await res.json()


    return {
        props : {
            post
        }
    }
}
