import Head from "next/head";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import styles from "@/styles/Promocoes.module.css";
import homeStyles from "@/styles/Home.module.css";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import promocoesData from "@/data/promocoes.json";
import companiesData from "@/data/companies.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface Promocao {
  id: string;
  type: "image" | "video";
  title: string;
  description?: string;
  url: string;
  thumbnail?: string;
}

interface Theme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradient: string;
}

interface Company {
  id: string;
  name: string;
  displayName: string;
  theme: Theme;
}

interface PromocoesPageProps {
  promocoes: Promocao[];
  company: Company | null;
  error?: string;
}

export default function PromocoesPage({ promocoes, company, error }: PromocoesPageProps) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (error || !company || !promocoes) {
    return (
      <>
        <Head>
          <title>Promoções não encontradas</title>
          <meta name="description" content="As promoções solicitadas não foram encontradas" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className={`${homeStyles.container} ${inter.variable}`}>
          <div className={homeStyles.background}>
            <div className={homeStyles.gradient}></div>
          </div>
          
          <main className={homeStyles.main}>
            <div className={homeStyles.header}>
              <h1 className={homeStyles.title}>
                <span className={homeStyles.titleMain}>Ops!</span>
                <span className={homeStyles.titleSub}>Não encontrado</span>
              </h1>
              <p className={homeStyles.subtitle}>
                As promoções solicitadas não foram encontradas
              </p>
            </div>
          </main>
        </div>
      </>
    );
  }

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const customStyle = `
    .gradient {
      background: ${company.theme.gradient} !important;
    }
  `;

  return (
    <>
      <Head>
        <title>{company.displayName} - Promoções</title>
        <meta name="description" content={`Confira as promoções de ${company.displayName}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{ __html: customStyle }} />
      </Head>
      
      <div className={`${styles.container} ${inter.variable}`}>
        <div className={styles.background}>
          <div className={homeStyles.gradient}></div>
        </div>
        
        <main className={styles.main}>
          {/* Botão de Voltar */}
          <button 
            className={styles.backButton}
            onClick={() => router.back()}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              color: company.theme.primaryColor,
              borderColor: company.theme.primaryColor
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>←</span>
            <span>Voltar</span>
          </button>

          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>Nossas</span>
              <span 
                className={styles.titleSub}
                style={{
                  background: `linear-gradient(45deg, ${company.theme.primaryColor}, ${company.theme.secondaryColor})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Promoções
              </span>
            </h1>
            <p className={styles.subtitle}>
              Aproveite nossas ofertas especiais! 🎉
            </p>
          </div>

          <div className={styles.cardsContainer}>
            {promocoes.map((promo) => (
              <div key={promo.id} className={styles.card}>
                {promo.type === "image" ? (
                  <div 
                    className={styles.cardMedia}
                    onClick={() => handleImageClick(promo.url)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img 
                      src={promo.url} 
                      alt={promo.title}
                      className={styles.cardImage}
                    />
                    <div className={styles.imageOverlay}>
                      <span className={styles.expandIcon}>🔍</span>
                    </div>
                  </div>
                ) : (
                  <div className={styles.cardMedia}>
                    <video 
                      controls 
                      className={styles.cardVideo}
                      poster={promo.thumbnail}
                    >
                      <source src={promo.url} type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                  </div>
                )}
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{promo.title}</h3>
                  {promo.description && (
                    <p className={styles.cardDescription}>{promo.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              💝 Válido por tempo limitado ou enquanto durarem os estoques
            </p>
          </div>
        </main>

        {/* Modal de Imagem Expandida */}
        {selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>
                ✕
              </button>
              <img 
                src={selectedImage} 
                alt="Promoção expandida" 
                className={styles.modalImage}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { slug } = context.params!;
  
  // Busca dados da empresa
  const companies = companiesData as Record<string, Company>;
  const company = companies[slug as string] || null;

  if (!company) {
    return {
      props: {
        promocoes: [],
        company: null,
        error: "Empresa não encontrada"
      }
    };
  }

  // Busca promoções da empresa
  const allPromocoes = promocoesData as Record<string, Promocao[]>;
  const promocoes = allPromocoes[slug as string] || [];

  return {
    props: {
      promocoes,
      company
    }
  };
};

