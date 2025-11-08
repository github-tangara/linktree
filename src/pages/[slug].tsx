import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import companiesData from "@/data/companies.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface Magazine {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  url: string;
  buttonClass: string;
  isInternal?: boolean;
}

interface Theme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradient: string;
}

interface Company {
  id: string;
  company_id: string;
  name: string;
  displayName: string;
  subtitle: string;
  description: string;
  theme: Theme;
  magazines: Magazine[];
  footer: {
    text: string;
  };
}

interface CompanyPageProps {
  company: Company | null;
  error?: string;
}

export default function CompanyPage({ company, error }: CompanyPageProps) {
  const router = useRouter();

  if (error || !company) {
    return (
      <>
        <Head>
          <title>Empresa não encontrada</title>
          <meta name="description" content="A empresa solicitada não foi encontrada" />
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
                <span className={styles.titleMain}>Ops!</span>
                <span className={styles.titleSub}>Não encontrado</span>
              </h1>
              <p className={styles.subtitle}>
                A empresa solicitada não foi encontrada
              </p>
            </div>
          </main>
        </div>
      </>
    );
  }

  const handleButtonClick = (url: string, isInternal?: boolean) => {
    if (isInternal) {
      router.push(url);
    } else {
      window.open(url, '_blank');
    }
  };

  const handleWhatsAppPromo = () => {
    const phoneNumber = "5565996652178";
    const message = encodeURIComponent("Olá! Vi o LinkView da " + company.name + " e gostaria de criar um igual para minha empresa. Pode me ajudar?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // CSS personalizado para aplicar o tema da empresa
  const customStyle = `
    .gradient {
      background: ${company.theme.gradient} !important;
    }
    .titleSub {
      background: linear-gradient(45deg, ${company.theme.primaryColor}, ${company.theme.secondaryColor}) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
    }
    .buttonArrow {
      color: ${company.theme.primaryColor} !important;
    }
    .buttonBeleza {
      border-left-color: ${company.theme.primaryColor} !important;
    }
    .buttonCasa {
      border-left-color: ${company.theme.secondaryColor} !important;
    }
    .buttonNatura {
      border-left-color: ${company.theme.accentColor} !important;
    }
    .buttonDestaques {
      border-left-color: ${company.theme.primaryColor} !important;
    }
    .button:focus {
      outline-color: ${company.theme.primaryColor} !important;
    }
  `;

  return (
    <>
      <Head>
        <title>{company.displayName} - {company.subtitle}</title>
        <meta name="description" content={company.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{ __html: customStyle }} />
      </Head>
      
      <div className={`${styles.container} ${inter.variable}`}>
        <div className={styles.background}>
          <div className={styles.gradient}></div>
        </div>
        
        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>{company.displayName.split(' ')[0]}</span>
              <span className={styles.titleSub}>
                {company.displayName.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className={styles.subtitle}>
              {company.description}
            </p>
          </div>

          <div className={styles.buttonContainer}>
            {company.magazines.map((magazine) => (
              <button 
                key={magazine.id}
                className={`${styles.button} ${styles[magazine.buttonClass]}`}
                onClick={() => handleButtonClick(magazine.url, magazine.isInternal)}
              >
                <div className={styles.buttonIcon}>{magazine.icon}</div>
                <div className={styles.buttonContent}>
                  <span className={styles.buttonTitle}>{magazine.title}</span>
                  <span className={styles.buttonSubtitle}>{magazine.subtitle}</span>
                </div>
                <div className={styles.buttonArrow}>→</div>
              </button>
            ))}
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              {company.footer.text}
            </p>
          </div>

          {/* Seção de Publicidade LinkView - Versão Discreta */}
          <div style={{ 
            marginTop: '2.5rem',
            padding: '1rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.6)', 
              fontSize: '0.75rem',
              lineHeight: '1.3',
              marginBottom: '0.8rem'
            }}>
              Gostou deste catálogo digital? Crie um igual para sua empresa
            </p>
            <button 
              onClick={handleWhatsAppPromo}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '15px',
                padding: '8px 16px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.75rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(5px)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              }}
            >
              <span style={{ fontSize: '0.7rem' }}>💬</span> Saiba mais
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { slug } = context.params!;
  
  // Simula consulta à API
  const companies = companiesData as Record<string, Company>;
  const company = companies[slug as string] || null;

  if (!company) {
    return {
      props: {
        company: null,
        error: "Empresa não encontrada"
      }
    };
  }

  return {
    props: {
      company
    }
  };
};
