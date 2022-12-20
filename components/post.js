import Image from "next/image"
import Link from "next/link"
import {formatearFecha} from '../utils/helpers'
import styles from '../styles/blog.module.css'


export default function Post({post}) {

    const {contenido, imagen, titulo, url, publishedAt} = post

  return (
    <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image src={imagen.data.attributes.url} width={1000} height={600} alt={`Imagen blog ${titulo}`} />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link href={`/blog/${url}`} legacyBehavior>
                <a className={styles.enlace}>
                    Leer Post
                </a>
            </Link>
        </div>
    </article>
  )
}
