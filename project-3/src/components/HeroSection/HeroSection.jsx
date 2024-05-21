import styles from './HeroSection.module.css';

const Hero = ({toggle}) => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.main}>
                    <div>
                        <img src="/images/dices 1.png" alt="die" />
                    </div>
                    <div>
                        <h1>DICE GAME</h1>
                        <button onClick={toggle} className={styles.play}>Play Now</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;