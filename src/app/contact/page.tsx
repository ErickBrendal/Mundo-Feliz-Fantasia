"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*Contato via Site*\n\nNome: ${formData.name}\nEmail: ${formData.email}\nAssunto: ${formData.subject}\n\nMensagem:\n${formData.message}`;
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
            Entre em <span className="text-gold">Contato</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Estamos aqui para ajudar! Entre em contato conosco e tire suas dúvidas.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-teal mb-6">Fale Conosco</h2>
                <p className="text-gray mb-8">
                  Nossa equipe está pronta para atender você. Escolha o canal de comunicação que
                  preferir e entraremos em contato o mais breve possível.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-teal mb-1">Telefone / WhatsApp</h3>
                    <a
                      href="https://wa.me/5511952744979"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray hover:text-gold transition-colors"
                    >
                      (11) 95274 - 4979
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-teal mb-1">E-mail</h3>
                    <a
                      href="mailto:contato@mundofelizfantasias.com"
                      className="text-gray hover:text-gold transition-colors"
                    >
                      contato@mundofelizfantasias.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-teal mb-1">Localização</h3>
                    <p className="text-gray">Guarulhos / SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <Instagram className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-teal mb-1">Instagram</h3>
                    <a
                      href="https://www.instagram.com/mundofelizfantasia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray hover:text-gold transition-colors"
                    >
                      @mundofelizfantasia
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-teal mb-1">Horário de Atendimento</h3>
                    <p className="text-gray">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray">Sábado: 9h às 13h</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-teal mb-6">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-teal font-semibold mb-2">Nome *</label>
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
                    <label className="block text-teal font-semibold mb-2">E-mail *</label>
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
                    <label className="block text-teal font-semibold mb-2">Assunto *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-teal/20 focus:border-teal focus:outline-none"
                      placeholder="Sobre o que você quer falar?"
                    />
                  </div>

                  <div>
                    <label className="block text-teal font-semibold mb-2">Mensagem *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-teal/20 focus:border-teal focus:outline-none resize-none"
                      placeholder="Escreva sua mensagem aqui..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-gold text-teal px-8 py-4 rounded-full font-bold hover:bg-gold/90 transition-all hover:scale-105 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

