"use client";

import { motion } from "framer-motion";
import { Heart, Users, Award, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal to-teal/80 text-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Sobre a <span className="text-gold">Mundo Feliz Fantasia</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transformando sonhos em realidade desde o início, com fantasias de qualidade
            que encantam crianças e famílias em todo o Brasil.
          </motion.p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-teal mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray leading-relaxed">
                <p>
                  A <strong className="text-teal">Mundo Feliz Fantasia</strong> nasceu do sonho de
                  proporcionar momentos mágicos e inesquecíveis para as crianças. Acreditamos que
                  cada fantasia tem o poder de transformar uma simples brincadeira em uma aventura
                  extraordinária, onde a imaginação não tem limites.
                </p>
                <p>
                  Com anos de experiência no mercado de fantasias infantis, nos especializamos em
                  oferecer produtos de alta qualidade, com tecidos confortáveis, acabamento
                  impecável e designs encantadores. Trabalhamos tanto no atacado quanto no varejo,
                  atendendo desde famílias que buscam a fantasia perfeita para uma festa especial
                  até lojistas que confiam em nossos produtos para encantar seus clientes.
                </p>
                <p>
                  Nossa missão é simples: <strong className="text-gold">fazer crianças felizes</strong>.
                  E fazemos isso com dedicação, carinho e um compromisso inabalável com a qualidade
                  e a satisfação de nossos clientes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-teal text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nossos Valores
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Amor e Cuidado",
                description:
                  "Tratamos cada cliente com carinho e atenção, como se fosse parte da nossa família.",
              },
              {
                icon: Award,
                title: "Qualidade",
                description:
                  "Selecionamos cuidadosamente cada produto para garantir durabilidade e conforto.",
              },
              {
                icon: Sparkles,
                title: "Magia",
                description:
                  "Acreditamos no poder da imaginação e trabalhamos para tornar cada momento especial.",
              },
              {
                icon: Users,
                title: "Compromisso",
                description:
                  "Estamos comprometidos em entregar a melhor experiência de compra para você.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream/50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <value.icon className="w-16 h-16 mx-auto mb-4 text-gold" />
                <h3 className="text-xl font-semibold text-teal mb-3">{value.title}</h3>
                <p className="text-gray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal to-teal/80 text-cream">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Faça parte da nossa história!
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Explore nosso catálogo e encontre a fantasia perfeita para transformar momentos
              especiais em memórias inesquecíveis.
            </p>
            <a
              href="/shop"
              className="inline-block bg-gold text-teal px-8 py-4 rounded-full font-bold hover:bg-gold/90 transition-all hover:scale-105 shadow-lg"
            >
              Ver Produtos
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

