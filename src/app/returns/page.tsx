"use client";

import { motion } from "framer-motion";
import { Package, Clock, AlertCircle, CheckCircle } from "lucide-react";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-gradient-to-br from-teal to-teal/80 text-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Trocas & <span className="text-gold">Devoluções</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-8 h-8 text-gold" />
                <h2 className="text-2xl font-bold text-teal">Política de Trocas</h2>
              </div>
              <p className="text-gray leading-relaxed mb-4">
                Na Mundo Feliz Fantasia, queremos que você fique completamente satisfeito com sua compra. 
                Caso necessite realizar uma troca, siga as orientações abaixo:
              </p>
              <ul className="space-y-3 text-gray">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Trocas aceitas em até <strong className="text-teal">7 dias</strong> após o recebimento do produto</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>O produto deve estar em perfeito estado, sem uso, com etiquetas e embalagem original</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Entre em contato conosco via WhatsApp para iniciar o processo de troca</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-gold" />
                <h2 className="text-2xl font-bold text-teal">Prazo de Troca</h2>
              </div>
              <p className="text-gray leading-relaxed">
                O prazo para solicitação de troca é de até 7 dias corridos a partir da data de recebimento 
                do produto. Após esse período, não será possível realizar trocas.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-gold" />
                <h2 className="text-2xl font-bold text-teal">Importante</h2>
              </div>
              <ul className="space-y-3 text-gray">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Produtos com sinais de uso, lavados ou danificados não serão aceitos para troca</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>O frete de devolução é de responsabilidade do cliente</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Após a aprovação da troca, o novo produto será enviado em até 5 dias úteis</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream/50 p-6 rounded-xl">
              <h3 className="font-semibold text-teal mb-3">Dúvidas sobre trocas?</h3>
              <p className="text-gray mb-4">
                Entre em contato conosco pelo WhatsApp e nossa equipe terá prazer em ajudá-lo.
              </p>
              <a
                href="https://wa.me/5511952744979"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-teal px-6 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

