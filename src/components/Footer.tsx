import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/logo_moderno.png"
                alt="Mundo Feliz Fantasia"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold">Mundo Feliz Fantasia</h3>
                <p className="text-gold text-sm">Fantasias que transformam momentos em memórias</p>
              </div>
            </div>
            <p className="text-sm text-cream/80 mb-4">
              Loja especializada em fantasias infantis de alta qualidade. Trabalhamos com atacado e varejo, 
              enviando para todo o Brasil.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mundofelizfantasia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/10 hover:bg-gold hover:text-teal rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-cream/80 hover:text-gold transition-colors">
                  Loja
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/80 hover:text-gold transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="text-cream/80 hover:text-gold transition-colors">
                  Atacado
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-cream/80 hover:text-gold transition-colors">
                  Trocas & Devoluções
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-cream/80 hover:text-gold transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-cream/80 text-sm">(11) 95274 - 4979</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-cream/80 text-sm">contato@mundofelizfantasias.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-cream/80 text-sm">Guarulhos / SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-6 text-center text-sm text-cream/60">
          <p>© 2025 Mundo Feliz Fantasia. Todos os direitos reservados.</p>
          <p className="mt-2">
            CNPJ: 50.460.696/0001-07 | Razão Social: 50.460.696 KATIA REGINA PIARULLI ARIENZANO
          </p>
        </div>
      </div>
    </footer>
  );
}

