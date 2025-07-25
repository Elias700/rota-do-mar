import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Praias</li>
                        <li>Mapa</li>
                        <li>Previsão do Tempo</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </header>

            <section className='container-section'>
                <section>
                    <div>
                        <h1 className={styles.title}>Bem-vindo ao Rota do Mar</h1>
                        <h3>O PraiaFácil é o seu guia digital para descobrir e aproveitar as melhores praias da sua cidade...</h3>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.card}>Previsão do tempo atualizada</div>
                        <div className={styles.card}>Estado da maré em tempo real</div>
                        <div className={styles.card}>Localização das praias</div>
                        <div className={styles.card}>Fotos e descrições exclusivas</div>
                    </div>
                </section>

                <section className={styles.pesquisa}>
                    <h3>Descubra as melhores praias da sua cidade</h3>
                    <input type="text" placeholder="Pesquise sua praia preferida"/>
                </section>
            </section>
        </div>
    );
};

export default Home;
