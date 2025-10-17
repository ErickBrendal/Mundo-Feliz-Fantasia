"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ShoppingBag, Shield, Truck, Star } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const testimonials = [
    {
      name: "Camila Almeida",
      text: "Comprei a fantasia da minha filha aqui e ela amou! O material é resistente e lindo. Ela não quer tirar nem para dormir! Super recomendo.",
    },
    {
      name: "Ricardo Souza",
      text: "Atendimento excelente e fantasias de ótima qualidade. Meu filho foi o destaque na festa da escola com o traje de super-herói. Voltaremos sempre!",
    },
    {
      name: "Patrícia Lima",
      text: "A variedade é incrível, e os preços cabem no bolso. Minha sobrinha ficou encantada com a fantasia de fada. Agradeço pelo carinho e cuidado!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal via-teal/90 to-teal/80 text-cream py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Sparkles className="w-16 h-16 mx-auto text-gold mb-4" />
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              {...fadeInUp}
            >
              Fantasias que transformam{" "}
              <span className="text-gold">momentos em memórias</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl mb-8 text-cream/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mundo Feliz Fantasias: Diversão, imaginação e qualidade para as crianças!
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-gold text-teal px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-all hover:scale-105 shadow-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                Quero minha fantasia
              </Link>
              <Link
                href="/wholesale"
                className="inline-flex items-center justify-center gap-2 bg-cream/10 backdrop-blur-sm text-cream border-2 border-cream px-8 py-4 rounded-full font-semibold hover:bg-cream/20 transition-all hover:scale-105"
              >
                Orçamento Atacado
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12 bg-cream/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Truck, title: "Pronta Entrega", desc: "Entregamos em todo Brasil" },
              { icon: Shield, title: "Compra Segura", desc: "Seus dados são protegidos" },
              { icon: Star, title: "Qualidade Garantida", desc: "Produtos selecionados" },
              { icon: ShoppingBag, title: "Atacado e Varejo", desc: "Melhores preços" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
                <h3 className="font-semibold text-teal mb-2">{item.title}</h3>
                <p className="text-sm text-gray">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coleções em Destaque */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Coleções em Destaque
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              Explore nossas categorias e encontre a fantasia perfeita para transformar qualquer momento especial
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Princesas", color: "from-pink-200 to-purple-200", link: "/shop?category=princesas" },
              { title: "Heróis", color: "from-blue-200 to-cyan-200", link: "/shop?category=herois" },
              { title: "Animais", color: "from-green-200 to-emerald-200", link: "/shop?category=animais" },
              { title: "Bebês", color: "from-yellow-200 to-orange-200", link: "/shop?category=bebes" },
            ].map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link
                  href={category.link}
                  className={`block relative h-64 rounded-2xl bg-gradient-to-br ${category.color} overflow-hidden group shadow-lg hover:shadow-2xl transition-all`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {category.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white text-teal px-6 py-2 rounded-full font-semibold text-sm">
                      Ver produtos
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
              Depoimentos de Clientes
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre nossas fantasias
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-cream/50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-teal">— {testimonial.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

