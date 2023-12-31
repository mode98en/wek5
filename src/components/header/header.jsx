import Link from 'next/link'
import { Container } from '../container/container'
import styles from './header.module.css'



export const Header = () => {
    return <div className={styles.header}>
        <Container>
            <div className={styles.content}>
                <h3>Aon Blog</h3>
                <ul>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link href={"/help"}>Help</Link>
                    </li>
                </ul>
            </div>
        </Container>
    </div>
}