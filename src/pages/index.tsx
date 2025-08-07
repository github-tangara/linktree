import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  const handleButtonClick = (url: string) => {
    // Simplesmente abre em nova aba - funciona em todos os dispositivos
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
              onClick={() => handleButtonClick(
                'https://firebasestorage.googleapis.com/v0/b/foodsonline-a7b19.appspot.com/o/natura%2Fciclo-13%2F13%20Beleza.pdf?alt=media&token=43aa50df-0841-48b6-b503-b64df4175058'
              )}
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
              onClick={() => handleButtonClick(
                'https://firebasestorage.googleapis.com/v0/b/foodsonline-a7b19.appspot.com/o/natura%2Fciclo-13%2F13%20Casa%20%26%20Estilo%202.pdf?alt=media&token=cc94d2e4-35ed-439d-b851-756d03ef20c1'
              )}
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
              onClick={() => handleButtonClick(
                'https://firebasestorage.googleapis.com/v0/b/foodsonline-a7b19.appspot.com/o/natura%2Fciclo-13%2F13%20natura.pdf?alt=media&token=b74e39e3-f3fb-4f6d-a049-eb744162029b'
              )}
            >
              <div className={styles.buttonIcon}>🌿</div>
              <div className={styles.buttonContent}>
                <span className={styles.buttonTitle}>Revista Natura</span>
                <span className={styles.buttonSubtitle}>Completa</span>
              </div>
              <div className={styles.buttonArrow}>→</div>
            </button>

            <button 
              className={`${styles.button} ${styles.buttonDestaques}`}
              onClick={() => handleButtonClick(
                'https://firebasestorage.googleapis.com/v0/b/foodsonline-a7b19.appspot.com/o/natura%2Fciclo-13%2F13%20Brasil.pdf?alt=media&token=2f07187b-7d5d-4f06-b57b-d8165f4375ba'
              )}
            >
              <div className={styles.buttonIcon}>⭐</div>
              <div className={styles.buttonContent}>
                <span className={styles.buttonTitle}>Destaques</span>
                <span className={styles.buttonSubtitle}>Brasil</span>
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
