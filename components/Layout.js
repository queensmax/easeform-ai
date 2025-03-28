import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children, title = 'EaseForm AI - Intelligent Form Building Made Simple' }) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Create, manage, and analyze forms with the power of AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container">
        <header className="header">
          <div className="logo">
            <Link href="/">
              <span>EaseForm</span>AI
            </Link>
          </div>
          
          <nav className="nav">
            <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/pricing" className={`nav-link ${router.pathname === '/pricing' ? 'active' : ''}`}>
              Pricing
            </Link>
            <Link href="/documents" className={`nav-link ${router.pathname === '/documents' ? 'active' : ''}`}>
              Documents
            </Link>
            <Link href="/privacy" className={`nav-link ${router.pathname === '/privacy' ? 'active' : ''}`}>
              Privacy
            </Link>
          </nav>
          
          <div className="auth-buttons">
            <Link href="/login" className="button button-secondary" style={{ marginRight: '1rem' }}>
              Sign In
            </Link>
            <Link href="/register" className="button button-primary">
              Get Started
            </Link>
          </div>
        </header>
        
        <main>{children}</main>
        
        <footer className="footer">
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/documents">Documents</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/subscription">Subscription</Link>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} EaseForm AI. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
