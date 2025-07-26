
import styles from './Welcome.module.css'

interface WelcomeProps {
    beachImage: string;
}

const Welcome = ({ beachImage }: WelcomeProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.title}>Seja bem vindo</h1>
                <p>
                O PraiaFácil é o seu guia digital definitivo para descobrir e aproveitar as melhores praias da sua cidade. Aqui, você encontra informações completas sobre cada destino: infraestrutura, localização, características da orla, nível de acessibilidade, dicas de segurança e muito mais.
                </p>
                <div className={styles.bttContainer}>
                    <button className={styles.btt}>Saiba mais</button>
                </div>
            </div>
            <div>
                <img src={beachImage} alt="Imagem da praia" className={styles.image}/>
            </div>
        </div>
    );
};

export default Welcome;


/*Fix: Quando for corrigir algo.
Feat: Quando for adicionar algo novo */