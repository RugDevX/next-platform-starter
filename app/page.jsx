'use client';

import { useEffect, useRef } from 'react';

const pricingPlans = [
    {
        name: 'Optimizare Gold',
        subtitle: 'Focus pe Timpi de Răspuns și FPS Constant',
        features: [
            'Reconfigurare setări Core Logic/BIOS',
            'Optimizare drivere',
            'Reducerea DPC Latency și a input lag-ului sub nivelul standard',
            'Dezactivarea serviciilor Windows inutile și a telemetriei agresive',
            'Creștere FPS constantă și eliminarea Stuttering-ului/Micro-Frânărilor'
        ],
        price: '80 RON'
    },
    {
        name: 'Optimizare Bronze',
        subtitle: 'Stabilitate 100% și Viteză de Boot Instantanee',
        features: [
            'Creștere FPS',
            'Remedierea erorilor de sistem, a Blue Screen of Death (BSOD) recurente',
            'Verificare și optimizare SSD/HDD Health și viteze de citire/scriere (NVMe Gen 5 Ready)',
            'Configurare utilitare esențiale de securitate și backup automatizat',
            'Tuning de rețea (DNS, TCP/IP) pentru o conexiune gaming mai stabilă'
        ],
        price: '25 RON'
    },
    {
        name: 'Optimizare Avansat',
        subtitle: 'Optimizare E-Sports Brută',
        features: [
            'Zero Input Lag & Latență DPC: Eliminarea milisecundelor esențiale pentru o reacție instantanee',
            'Deblocare FPS Brută: Maximizarea setărilor Core Logic/BIOS pentru a forța hardware-ul la potențialul său maxim neexplorat',
            'Stabilitate Militară: Optimizare agresivă a Windows-ului și driverelor pentru un sistem ultra-stabil'
        ],
        price: '250 RON'
    }
];

function StarField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const numStars = Math.floor((canvas.width * canvas.height) / 8000);
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    opacity: Math.random(),
                    speed: Math.random() * 0.02 + 0.005,
                    direction: Math.random() > 0.5 ? 1 : -1
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.opacity += star.speed * star.direction;
                if (star.opacity >= 1) {
                    star.direction = -1;
                } else if (star.opacity <= 0.1) {
                    star.direction = 1;
                }

                const gradient = ctx.createRadialGradient(
                    star.x, star.y, 0,
                    star.x, star.y, star.size * 2
                );
                gradient.addColorStop(0, `rgba(43, 220, 210, ${star.opacity})`);
                gradient.addColorStop(0.5, `rgba(43, 220, 210, ${star.opacity * 0.5})`);
                gradient.addColorStop(1, 'rgba(43, 220, 210, 0)');

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
}

function PricingCard({ plan }) {
    return (
        <div className="relative p-6 rounded-lg border border-cyan-500/30 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">{plan.name}</h3>
            <p className="text-sm text-gray-400 mb-4 font-semibold">**{plan.subtitle}**</p>
            <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="text-center">
                <p className="text-2xl font-bold text-white mb-4">{plan.price}</p>
                <button className="w-full py-3 px-6 rounded bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    ADAUGĂ ÎN COȘ
                </button>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <>
            <StarField />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
                <h1 className="text-4xl md:text-6xl font-black text-cyan-400 mb-6 tracking-tight uppercase">
                    Deblochează Performanța Maximă. Zero Lag, FPS Brut.
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
                    Soluții de optimizare software AI-Ready și asamblare PC High-End. Transformăm sistemul tău într-o mașinărie de e-sports ultra-rapidă și stabilă.
                </p>
                <button className="py-4 px-8 rounded bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-colors">
                    Începe Optimizarea Acum
                </button>
            </section>

            {/* Services Section */}
            <section className="relative py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h2 className="text-3xl md:text-4xl font-black text-cyan-400 uppercase">
                                Optimizare Software | AI-Ready & E-Sports Tuning
                            </h2>
                        </div>
                        <p className="text-gray-300 max-w-4xl mx-auto">
                            Serviciile noastre de optimizare depășesc simpla curățare. Implementăm ajustări complexe la nivel de kernel Windows, reconfigurări de registre și tweak-uri de drivere pentru a garanta cel mai mic input lag și o creștere medie de 15-30% a FPS-ului, esențială în titlurile competitive.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {pricingPlans.map((plan, index) => (
                            <PricingCard key={index} plan={plan} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-cyan-400 mb-6 uppercase">
                        Pregătit să-ți duci PC-ul la următorul nivel?
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Contactează-ne acum pentru o evaluare gratuită a sistemului tău și descoperă cum putem maximiza performanța gaming-ului tău.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#" className="py-3 px-6 rounded bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 transition-colors">
                            Contactează-ne
                        </a>
                        <a href="#" className="py-3 px-6 rounded border border-cyan-400 text-cyan-400 font-bold hover:bg-cyan-400/10 transition-colors">
                            Vezi Galerie Proiecte
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
