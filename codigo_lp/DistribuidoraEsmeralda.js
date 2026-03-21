import React, { useState } from "react";
import { 

DollarSign, 
Truck, 
Eye, 
CheckCircle, 
MessageCircle,
Menu,
X,
Gem
} from "lucide-react";

/**
 * Componente para lidar com falhas no carregamento de imagens
 */
function ImageWithFallback(props) {
const [didError, setDidError] = useState(false);
const { src, alt, style, className, ...rest } = props;

return didError ? (
    <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
        style={style}
    >
        <div className="flex items-center justify-center w-full h-full">
            <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
                alt="Erro ao carregar imagem"
                {...rest}
                data-original-url={src}
            />
        </div>
    </div>
) : (
    <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        {...rest}
        onError={() => setDidError(true)}
    />
);
}

export default function LandingPage() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// --- MOCK DATA ---
const products = [
    {
        name: "Inspiração miu-miu",
        material: "Acetato",
        detail: "Design sofisticado modinha",
        image: "https://i.imgur.com/8ki6XnH.jpg"
    },
    {
        name: "Linha Comfort Grau",
        material: "Titânio Premium",
        detail: "Dobradiças reforçadas e leveza",
        image: "https://i.imgur.com/wZVSWkE.jpg"
    },
    {
        name: "Linha Infantil",
        material: "Flex Infantil",
        detail: "Resistência e conforto que os pais confiam",
        image: "https://i.imgur.com/rtFHv7o.jpg"
    },
    {
        name: "Linha Sun Premium",
        material: "Acetato UV400",
        detail: "Design e proteção UV400 e polarizado",
        image: "https://i.imgur.com/aFNbnI3.jpg"
    },
    {
        name: "Linha Fashion Moda",
        material: "Acetato Italiano",
        detail: "Design e proteção UV400 para garantir o ticket médio alto da sua vitrine.",
        image: "https://i.imgur.com/NliYHS2.jpg"
    },
    {
        name: "Linha Clipon",
        material: "Materiais Diversos",
        detail: "Com mais segurança",
        image: "https://i.imgur.com/5ElkDmJ.jpg"
    }
];

const testimonials = [
    {
        text: "Eu gostei bastante do seu atendimento, e das negociações, a variedade dos produtos e também me agrada bastante, fico sempre surpreendido com os brindes que vem na compra e claro, o comprometimento que tem com o cliente.",
        name: "João Victor",
        role: "",
        location: ""
    },
    {
        image: "https://i.imgur.com/HrnMbim.jpg",
        name: "Ellen",
        role: "",
        location: ""
    },
    {
        image: "https://i.imgur.com/2AaBIsg.jpg",
        name: "Karol",
        role: "",
        location: ""
    }
];

const steps = [
    {
        number: "01",
        title: "Consulte",
        description: "Preços, modelos e acessórios"
    },
    {
        number: "02",
        title: "Pagamento facilitado",
        description: "No crédito parcelamos suas compras em 3x sem juros, consulte condições"
    },
    {
        number: "03",
        title: "Envio",
        description: "Receba sua mercadoria em qualquer lugar."
    }
];

const whatsappLink = "https://wa.me/5562982885244?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20mais%20informações";

return (
    <div className="min-h-screen bg-white font-sans">
        {/* HEADER */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Gem className="w-8 h-8 text-[#1B5E20]" />
                        <span className="ml-2 text-xl font-bold text-gray-900">Distribuidora Esmeralda</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 font-medium">
                        <a href="#inicio" className="text-gray-700 hover:text-[#1B5E20] transition-colors">Início</a>
                        <a href="#colecoes" className="text-gray-700 hover:text-[#1B5E20] transition-colors">Coleções</a>
                        <a href="#guia" className="text-gray-700 hover:text-[#1B5E20] transition-colors">Guia de Atacado</a>
                        <a href="#suporte" className="text-gray-700 hover:text-[#1B5E20] transition-colors">Suporte</a>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-[#1B5E20] text-white rounded-lg hover:bg-[#154a19] transition-all font-semibold"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            (62) 98288-5244
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100 bg-white">
                        <nav className="flex flex-col space-y-4">
                            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1 text-gray-700">Início</a>
                            <a href="#colecoes" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1 text-gray-700">Coleções</a>
                            <a href="#guia" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1 text-gray-700">Guia de Atacado</a>
                            <a href="#suporte" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1 text-gray-700">Suporte</a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-[#1B5E20] text-white rounded-lg font-bold"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Fale com uma Consultora
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>

        {/* HERO SECTION */}
        <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B5E20]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Somos o único fornecedor que sua ótica precisa
                        </h1>
                        <p className="text-xl text-white/90 mb-4">
                            Coleções completas de armações de metal, acetato, TR90, Clip on, solares e infantil.
                        </p>
                        <p className="text-lg text-[#81C784] font-semibold mb-8">
                            Mais de 1500 modelos disponíveis para pronta entrega.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1B5E20] text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Fale com uma Consultora
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                            <ImageWithFallback
                                src="https://i.imgur.com/xkTXQcD.jpg"
                                alt="Display de armações de ótica"
                                className="w-full h-full object-contain rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8F5E9] rounded-full mb-4">
                            <DollarSign className="w-8 h-8 text-[#1B5E20]" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Preços baixos</h3>
                        <p className="text-gray-600">Foque na lucratividade da sua ótica com valores direto da distribuidora.</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8F5E9] rounded-full mb-4">
                            <Truck className="w-8 h-8 text-[#1B5E20]" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Envio Nacional e Rápido</h3>
                        <p className="text-gray-600">Logística eficiente para qualquer cidade do Brasil.</p>
                    </div>
                </div>
                <p className="mt-12 text-center text-2xl text-[#1B5E20] font-bold">
                    Aqui você encontra tudo que a sua Ótica precisa!
                </p>
            </div>
        </section>

        {/* PRODUCT SHOWCASE */}
        <section id="colecoes" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Os modelos que mais vendem no Brasil
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {products.map((product, index) => (
                        <div key={index} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                            <div className="aspect-square bg-gray-50 overflow-hidden">
                                <ImageWithFallback
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                <p className="text-[#1B5E20] font-semibold mb-2">{product.material}</p>
                                <p className="text-gray-600 text-sm">{product.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video / Stats */}
                <div className="bg-[#1B5E20] rounded-3xl p-8 text-center text-white mt-20">
                    <p className="text-xl mb-4">
                        São mais de <b>1500 modelos</b> e <b>9 mil opções</b> em estoque.
                    </p>
                    <p className="text-lg text-[#A5D6A7] font-semibold mb-8">Mais de 10 anos de mercado.</p>
                    <div className="max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl bg-black/20">
                        <video className="w-full h-full object-cover" controls preload="metadata">
                            <source src="https://i.imgur.com/8ki6XnH.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos.
                        </video>
                    </div>
                </div>
            </div>
        </section>

        {/* PURCHASE GUIDE */}
        <section id="guia" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Compra Facilitada</h2>
                </div>

                <div className="space-y-6 mb-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#1B5E20]">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#1B5E20] text-white rounded-full flex items-center justify-center font-bold text-xl">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 bg-[#1B5E20] text-white text-lg font-bold rounded-xl hover:bg-[#2E7D32] transition-all shadow-md"
                    >
                        Fale com uma Consultora agora
                    </a>
                </div>
            </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">O que dizem nossos parceiros</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 italic relative">
                         <div className="flex mb-4">
                                {[...Array(5)].map((_, star) => <Gem key={star} className="w-4 h-4 text-[#1B5E20] fill-[#1B5E20] mr-1" />)}
                         </div>
                         {t.image ? (
                             <ImageWithFallback src={t.image} alt={t.name} className="w-full rounded-lg mb-4" />
                         ) : (
                             <p className="text-gray-700 mb-4">"{t.text}"</p>
                         )}
                         <p className="font-bold text-gray-900 not-italic">— {t.name}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* FOOTER */}
        <footer id="suporte" className="bg-gray-900 text-white pt-16 pb-8 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
                <div className="md:col-span-2">
                    <div className="flex items-center mb-6">
                        <Gem className="w-10 h-10 text-[#4CAF50]" />
                        <span className="ml-2 text-2xl font-bold">Distribuidora Esmeralda</span>
                    </div>
                    <p className="text-gray-400 max-w-sm mb-4">Referência em atacado de ótica para todo o território nacional.</p>
                    <p className="text-xs text-gray-500">CNPJ: 29.830.611/0001-49</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-6">Atendimento</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li>WhatsApp: (62) 98288-5244</li>
                        <li>distribuidoraesmeraldagyn@gmail.com</li>
                        <li>Seg-Sex: 8h às 17h30</li>
                        <li>Sáb: 8h às 13h</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                <p>© 2026 Distribuidora Esmeralda. Desenvolvido com foco em resultados.</p>
            </div>
        </footer>

        {/* FLOATING WHATSAPP */}
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 animate-bounce"
            aria-label="WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </a>
    </div>
);
}