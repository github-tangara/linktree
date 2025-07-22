import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  const handleButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Head>
        <title>Revistas Natura - Beleza & Estilo</title>
        <meta name="description" content="Acesse as revistas Natura: Beleza, Casa & Estilo e Revista Natura" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={`${styles.container} ${inter.variable}`}>
        <div className={styles.background}>
          <div className={styles.gradient}></div>
        </div>
        
        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>Revistas</span>
              <span className={styles.titleSub}>Natura</span>
            </h1>
            <p className={styles.subtitle}>
              Descubra as últimas tendências em beleza e estilo
            </p>
          </div>

          <div className={styles.buttonContainer}>
            <button 
              className={`${styles.button} ${styles.buttonBeleza}`}
              onClick={() => handleButtonClick('https://firebasestorage.googleapis.com/v0/b/foodsonline-a7b19.appspot.com/o/natura%2F07-2025%2F12%20Beleza.pdf?alt=media&token=dec10808-0679-49f9-b2f0-4de4600cce7f')}
            >
              <div className={styles.buttonIcon}>💄</div>
              <div className={styles.buttonContent}>
                <span className={styles.buttonTitle}>Revista Avon</span>
                <span className={styles.buttonSubtitle}>Beleza</span>
              </div>
              <div className={styles.buttonArrow}>→</div>
            </button>

            <button 
              className={`${styles.button} ${styles.buttonCasa}`}
              onClick={() => handleButtonClick('https://firebasestorage.googleapis.com/v0/b/foodsonline-a7b19.appspot.com/o/natura%2F07-2025%2F12%20Casa%20%26%20Estilo.pdf?alt=media&token=07f68a5d-b5bf-4503-901a-f4630c1a07c1')}
            >
              <div className={styles.buttonIcon}>🏠</div>
              <div className={styles.buttonContent}>
                <span className={styles.buttonTitle}>Casa & Estilo</span>
                <span className={styles.buttonSubtitle}>Decoração</span>
              </div>
              <div className={styles.buttonArrow}>→</div>
            </button>

            <button 
              className={`${styles.button} ${styles.buttonNatura}`}
              onClick={() => handleButtonClick('https://firebasestorage.googleapis.com/v0/b/foodsonline-a7b19.appspot.com/o/natura%2F07-2025%2F12%20Centro-Oeste%20e%20Minas%20Gerais.pdf?alt=media&token=be09e6e2-73be-4078-ab48-935729eb79f5')}
            >
              <div className={styles.buttonIcon}>🌿</div>
              <div className={styles.buttonContent}>
                <span className={styles.buttonTitle}>Revista Natura</span>
                <span className={styles.buttonSubtitle}>Completa</span>
              </div>
              <div className={styles.buttonArrow}>→</div>
            </button>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              ✨ Descubra produtos incríveis para sua beleza e bem-estar
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
