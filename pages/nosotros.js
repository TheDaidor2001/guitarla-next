
import Layout from "../components/layout";
import Image from "next/image";
import styles from '../styles/nosotros.module.css'


export default function Nosotros() {
    return (
        <Layout
            title={'Nostros'}
            description={'Sobre nosotros GuitarLA'}
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.contenido}>
                    <Image alt="Imagen sobre nosotros" src="/img/nosotros.jpg" width={1000} height={800}/>
                    <div>
                        <p>
                            Nullam cursus felis sit amet velit consequat gravida. In ipsum sem, ullamcorper egestas fermentum a, ultricies non leo. Duis vulputate purus nulla, quis interdum orci tempor et. Aliquam erat volutpat. Curabitur placerat dignissim enim, ut viverra est gravida vitae. Nulla ac finibus velit.
                        </p>
                        <p>
                            Phasellus risus nibh, lacinia non auctor in, cursus gravida mi. Quisque sagittis odio eget sem vestibulum, at fringilla nisl fermentum. Vivamus lorem metus, iaculis quis suscipit nec, blandit quis ipsum. Sed sit amet quam vitae turpis vulputate lacinia. Praesent urna ligula, viverra sit amet neque eget, convallis semper dui.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}


