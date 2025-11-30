import Link from 'next/link';

export function Footer() {
    return (
        <footer className="relative z-10 pt-16 pb-12 sm:pt-24 sm:pb-16 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-xl font-black text-cyan-400 no-underline">
                        RELICRAFT
                    </Link>
                    <span className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Toate drepturile rezervate.
                    </span>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                        Termeni și Condiții
                    </Link>
                    <Link href="#" className="hover:text-cyan-400 transition-colors">
                        Politica de Confidențialitate
                    </Link>
                    <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
