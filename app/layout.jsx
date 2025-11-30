import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Relicraft',
        default: 'Relicraft - Optimizare PC & Gaming'
    },
    description: 'Soluții de optimizare software AI-Ready și asamblare PC High-End. Transformăm sistemul tău într-o mașinărie de e-sports ultra-rapidă și stabilă.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="ro">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-slate-950">
                <div className="flex flex-col min-h-screen px-6 sm:px-12">
                    <div className="flex flex-col w-full max-w-7xl mx-auto grow">
                        <Header />
                        <main className="grow relative z-10">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
