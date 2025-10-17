"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowLeft, MessageCircle, Package, Shield, Truck } from "lucide-react";
import catalog from "@/lib/data/catalog.json";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = catalog.products.find((p) => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState<string>("");

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-teal mb-4">Produto não encontrado</h1>
          <Link href="/shop" className="text-gold hover:underline">
            Voltar para a loja
          </Link>
        </div>
      </div>
    );
  }

  const category = catalog.categories.find((c) => c.id === product.category);

  const handleWhatsAppCheckout = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho antes de continuar.");
      return;
    }

    const message = `Olá! Gostaria de comprar:\n\n*${product.name}*\nTamanho: ${selectedSize}\nPreço: R$ ${product.price.toFixed(2).replace(".", ",")}\n\nCódigo: ${product.id}`;
    const whatsappUrl = `https://wa.me/5511952744979?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-teal hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a loja
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Imagem do Produto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-96 lg:h-full bg-gradient-to-br from-teal/10 to-gold/10 flex items-center justify-center">
              <div className="text-9xl opacity-20">🎭</div>
              {product.featured && (
                <div className="absolute top-4 right-4 bg-gold text-teal px-4 py-2 rounded-full text-sm font-bold">
                  Destaque
                </div>
              )}
            </div>
          </motion.div>

          {/* Informações do Produto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Categoria */}
            <div>
              <Link
                href={`/shop?category=${product.category}`}
                className="inline-block text-sm text-gold hover:underline mb-2"
              >
                {category?.name}
              </Link>
            </div>

            {/* Nome */}
            <h1 className="text-4xl font-bold text-teal">{product.name}</h1>

            {/* Preço */}
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-teal">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-gray text-sm">por unidade</span>
            </div>

            {/* Descrição */}
            <p className="text-gray text-lg leading-relaxed">{product.description}</p>

            {/* Seleção de Tamanho */}
            <div>
              <label className="block text-teal font-semibold mb-3">
                Selecione o tamanho:
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? "bg-teal text-cream shadow-lg scale-105"
                        : "bg-white text-teal border-2 border-teal/20 hover:border-teal"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Estoque */}
            <div className="flex items-center gap-2 text-sm">
              <Package className="w-5 h-5 text-gold" />
              <span className="text-gray">
                {product.stock > 0 ? (
                  <>
                    <span className="font-semibold text-teal">{product.stock}</span> unidades em
                    estoque
                  </>
                ) : (
                  <span className="text-red-500 font-semibold">Produto esgotado</span>
                )}
              </span>
            </div>

            {/* Botão de Compra */}
            <button
              onClick={handleWhatsAppCheckout}
              disabled={product.stock === 0}
              className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all ${
                product.stock === 0
                  ? "bg-gray/30 text-gray cursor-not-allowed"
                  : "bg-gold text-teal hover:bg-gold/90 hover:scale-105 shadow-lg"
              }`}
            >
              <MessageCircle className="w-6 h-6" />
              Comprar via WhatsApp
            </button>

            {/* Benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-teal/20">
              <div className="flex items-center gap-3">
                <Truck className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="font-semibold text-teal text-sm">Entrega para todo Brasil</p>
                  <p className="text-xs text-gray">Frete calculado no checkout</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="font-semibold text-teal text-sm">Compra Segura</p>
                  <p className="text-xs text-gray">Seus dados protegidos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="font-semibold text-teal text-sm">Qualidade Garantida</p>
                  <p className="text-xs text-gray">Produtos selecionados</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="text-sm text-gray mb-2">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-teal/10 text-teal text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

