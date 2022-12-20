import Link from "next/link";
import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from '../styles/grid.module.css'


export default  function Tienda({guitarras}) {
    console.log(guitarras);
    return (
        <Layout
            title={'Tienda Virtual'}
            description={'Tienda virtual, venta de Guitarras, instrumentos, GuitarLA'}
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra Colección</h1>

                <div className={styles.grid}>
                {guitarras?.map(guitarra => (
                    <Guitarra 
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                    />
                ))}
                </div>
            </main>
        </Layout>
    );
}

//Consultar la api de manera dinámica
export async function getServerSideProps(){
    const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await res.json()

    return {
        props: {
            guitarras
        }
    }
}


//Consultar la api de manera estática
// export async function getStaticProps(){
//     const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await res.json()

//     return {
//         props: {
//             guitarras
//         }
//     }
// }


