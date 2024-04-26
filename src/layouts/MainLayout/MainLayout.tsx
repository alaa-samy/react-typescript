import { Container } from 'react-bootstrap';
import styles from './MainLayout.module.css'
import {Header, Footer} from '@components/shared';
import { Outlet } from 'react-router-dom';

const { container, wrapper } = styles;
function MainLayout() {
    return (
        <Container className={container}>
            <Header />
            <div className={wrapper}>
                <Outlet />
            </div>
            <Footer />
        </Container>
    )
}

export default MainLayout