"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Package, TrendingUp, Clock, Mail, Phone, User, Building } from "lucide-react";

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Solicitação de Orçamento Atacado*\n\nNome: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/5511952744979?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

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
            Vendas no <span className="text-gold">Atacado</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Parceria de sucesso com os melhores preços e condições especiais para o seu negócio
          </motion.p>
        </div>
      </section>

      {/* Benefícios do Atacado */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-teal text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Por que comprar no atacado?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: TrendingUp,
                title: "Melhores Preços",
                description:
                  "Preços especiais para compras em quantidade. Quanto mais você compra, mais economiza!",
              },
              {
                icon: Package,
                title: "Pedido Mínimo Acessível",
                description:
                  "Pedido mínimo de apenas 10 unidades. Ideal para lojistas e revendedores.",
              },
              {
                icon: Clock,
                title: "Atendimento Personalizado",
                description:
                  "Equipe dedicada para atender suas necessidades e garantir o sucesso do seu negócio.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <benefit.icon className="w-16 h-16 mx-auto mb-4 text-gold" />
                <h3 className="text-xl font-semibold text-teal mb-3">{benefit.title}</h3>
                <p className="text-gray">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Condições */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-teal mb-6">Condições de Compra</h3>
            <div className="space-y-4 text-gray">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  <strong className="text-teal">Pedido Mínimo:</strong> 10 unidades (podem ser
                  produtos variados)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  <strong className="text-teal">Formas de Pagamento:</strong> PIX, Boleto,
                  Transferência Bancária ou Cartão de Crédito
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  <strong className="text-teal">Prazo de Entrega:</strong> Consulte nossa equipe
                  para prazos de acordo com sua região
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  <strong className="text-teal">Frete:</strong> Calculado de acordo com o destino e
                  volume do pedido
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal text-center mb-6">
              Solicite um Orçamento
            </h2>
            <p className="text-gray text-center mb-8">
              Preencha o formulário abaixo e nossa equipe entrará em contato com as melhores
              condições para o seu negócio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-cream/50 p-8 rounded-2xl">
              <div>
                <label className="block text-teal font-semibold mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-teal/20 focus:border-teal focus:outline-none"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-teal font-semibold mb-2">
                  <Building className="inline w-4 h-4 mr-2" />
                  Empresa
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-teal/20 focus:border-teal focus:outline-none"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-teal font-semibold mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-teal/20 focus:border-teal focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-teal font-semibold mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-teal/20 focus:border-teal focus:outline-none"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-teal font-semibold mb-2">Mensagem</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-teal/20 focus:border-teal focus:outline-none resize-none"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-teal px-8 py-4 rounded-full font-bold hover:bg-gold/90 transition-all hover:scale-105 shadow-lg"
              >
                Enviar Solicitação via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

