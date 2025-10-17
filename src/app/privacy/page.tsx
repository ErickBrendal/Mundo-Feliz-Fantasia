"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-gradient-to-br from-teal to-teal/80 text-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Política de <span className="text-gold">Privacidade</span>
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
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-gold" />
              <div>
                <h2 className="text-2xl font-bold text-teal">Seus dados estão seguros</h2>
                <p className="text-gray text-sm">Última atualização: Outubro de 2025</p>
              </div>
            </div>

            <div className="space-y-6 text-gray leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-teal mb-3">1. Informações que Coletamos</h3>
                <p>
                  Coletamos informações que você nos fornece diretamente ao entrar em contato conosco, 
                  fazer um pedido ou se inscrever em nossa newsletter. Isso pode incluir seu nome, 
                  endereço de e-mail, telefone, endereço de entrega e informações de pagamento.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal mb-3">2. Como Usamos Suas Informações</h3>
                <p className="mb-3">Utilizamos as informações coletadas para:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Processar e entregar seus pedidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Enviar comunicações sobre seus pedidos e produtos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Melhorar nossos produtos e serviços</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Enviar ofertas e promoções (com seu consentimento)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal mb-3">3. Compartilhamento de Informações</h3>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
                  para fins de marketing. Podemos compartilhar suas informações apenas com parceiros 
                  de confiança que nos ajudam a operar nosso negócio, como processadores de pagamento 
                  e empresas de entrega, sempre sob rigorosos termos de confidencialidade.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal mb-3">4. Segurança dos Dados</h3>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
                  informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. 
                  No entanto, nenhum método de transmissão pela internet é 100% seguro.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal mb-3">5. Seus Direitos</h3>
                <p className="mb-3">Você tem o direito de:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Acessar, corrigir ou excluir suas informações pessoais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Optar por não receber comunicações de marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Solicitar a portabilidade de seus dados</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal mb-3">6. Cookies</h3>
                <p>
                  Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego 
                  do site e personalizar o conteúdo. Você pode configurar seu navegador para recusar 
                  cookies, mas isso pode afetar sua capacidade de usar alguns recursos do site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal mb-3">7. Contato</h3>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos 
                  seus dados pessoais, entre em contato conosco:
                </p>
                <div className="mt-4 p-4 bg-cream/50 rounded-lg">
                  <p className="font-semibold text-teal">Mundo Feliz Fantasia</p>
                  <p>E-mail: contato@mundofelizfantasias.com</p>
                  <p>Telefone: (11) 95274 - 4979</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

