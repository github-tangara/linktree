import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5565996652178";
    const message = encodeURIComponent("Olá! Tenho interesse em criar uma LinkView para minha empresa. Gostaria de saber mais informações.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Head>
        <title>LinkView - Catálogos Digitais para Sua Empresa</title>
        <meta name="description" content="Crie catálogos digitais interativos para sua empresa. Modernize suas vendas com LinkView!" />
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
              <span className={styles.titleMain}>LinkView</span>
              <span className={styles.titleSub}>Digital</span>
            </h1>
            <p className={styles.subtitle}>
              Transforme seus catálogos em experiências digitais incríveis
            </p>
          </div>

          <div className={styles.buttonContainer}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ 
                color: 'white', 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}>
                🚀 Quer uma LinkView para sua empresa?
              </h2>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '2rem'
              }}>
                Crie catálogos digitais modernos e interativos que seus clientes vão adorar!
                <br />
                <strong>✨ Fácil de usar • 📱 Mobile-friendly • 🎨 Design personalizado</strong>
              </p>
            </div>

            <button 
              className={`${styles.button} ${styles.buttonBeleza}`}
              onClick={handleWhatsAppClick}
              style={{ 
                background: 'linear-gradient(135deg, #25d366 0%, #20bf55 100%)',
                border: 'none',
                boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)'
              }}
            >
              <div className={styles.buttonIcon} style={{ fontSize: '2.5rem' }}>💬</div>
              <div className={styles.buttonContent}>
                <span className={styles.buttonTitle} style={{ color: 'white', fontSize: '1.3rem' }}>
                  Falar no WhatsApp
                </span>
                <span className={styles.buttonSubtitle} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Clique e saiba mais!
                </span>
              </div>
              <div className={styles.buttonArrow} style={{ color: 'white' }}>💚</div>
            </button>

            <div style={{ 
              textAlign: 'center', 
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ 
                color: 'white', 
                fontSize: '1.2rem', 
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                🎯 Por que escolher LinkView?
              </h3>
              <div style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                <p>🔗 <strong>Links personalizados</strong> para sua empresa</p>
                <p>📊 <strong>Organização profissional</strong> dos seus produtos</p>
                <p>🌟 <strong>Design exclusivo</strong> com as cores da sua marca</p>
                <p>📈 <strong>Aumente suas vendas</strong> com catálogos digitais</p>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              💼 Modernize sua empresa com catálogos digitais profissionais
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
