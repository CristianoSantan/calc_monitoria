import './style.css';
import Footer from '../components/Footer';
import Calc from '../components/Calc';

export default function Home() {
    return (
        <main style={style.main}>
            
            <Calc />
            <Footer url="https://www.recodepro.org.br/wp-content/uploads/2021/04/recodepro.png"/>
        </main>
    );
}

const style = {
    main: {
        height: '100vh',
        position: 'relative',
    }
}