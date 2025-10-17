"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import catalog from "@/lib/data/catalog.json";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState(catalog.products);

  useEffect(() => {
    let products = catalog.products;

    // Filtrar por categoria
    if (selectedCategory !== "all") {
      products = products.filter((p) => p.category === selectedCategory);
    }

    // Filtrar por busca
    if (searchQuery) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredProducts(products);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-teal mb-4">
            Nossa Loja
          </h1>
          <p className="text-gray max-w-2xl mx-auto">
            Explore nosso catálogo completo de fantasias infantis de alta qualidade
          </p>
        </motion.div>

        {/* Busca e Filtros */}
        <div className="mb-8 space-y-4">
          {/* Busca */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray" />
            <input
              type="text"
              placeholder="Buscar fantasias..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-teal/20 focus:border-teal focus:outline-none bg-white"
            />
          </div>

          {/* Filtro de Categorias */}
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <Filter className="w-5 h-5 text-teal" />
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-teal text-cream"
                  : "bg-white text-teal hover:bg-teal/10"
              }`}
            >
              Todas
            </button>
            {catalog.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-teal text-cream"
                    : "bg-white text-teal hover:bg-teal/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Produtos */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray text-lg">
              Nenhum produto encontrado. Tente outra busca ou categoria.
            </p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={`/product/${product.slug}`}
                  className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                >
                  {/* Badge */}
                  {product.featured && (
                    <div className="absolute top-4 right-4 z-10 bg-gold text-teal px-3 py-1 rounded-full text-xs font-bold">
                      Destaque
                    </div>
                  )}

                  {/* Imagem Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-teal/10 to-gold/10 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl opacity-20">🎭</div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>

                  {/* Informações */}
                  <div className="p-4">
                    <h3 className="font-semibold text-teal mb-2 group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-teal">
                        R$ {product.price.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-xs text-gray">
                        {product.stock > 0 ? `${product.stock} em estoque` : "Esgotado"}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {product.sizes.slice(0, 3).map((size) => (
                        <span
                          key={size}
                          className="px-2 py-1 bg-cream text-teal text-xs rounded"
                        >
                          {size}
                        </span>
                      ))}
                      {product.sizes.length > 3 && (
                        <span className="px-2 py-1 bg-cream text-teal text-xs rounded">
                          +{product.sizes.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

