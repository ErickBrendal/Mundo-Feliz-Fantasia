# 🎭 Mundo Feliz Fantasia - Novo Site E-commerce

Este projeto é a recriação do site de e-commerce da marca "Mundo Feliz Fantasia", com foco em um design moderno, sofisticado e lúdico, utilizando as tecnologias mais recentes do mercado.

## ✨ Tecnologias Utilizadas

- **Next.js 15 (App Router)**: Framework React para produção
- **TypeScript**: Tipagem estática para código mais seguro
- **Tailwind CSS v4**: Framework CSS utility-first para estilização rápida e responsiva
- **Framer Motion**: Biblioteca para microanimações sutis e elegantes
- **Lucide React**: Biblioteca de ícones modernos

## 🎨 Paleta de Cores (Design Specs)

A paleta de cores foi definida para criar um visual "premium infantil":

| Nome da Cor | Código Hex | Variável CSS | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Creme Suave** | `#F5F5DC` | `--cream` | Fundo principal |
| **Azul Petróleo** | `#004D40` | `--teal` | Textos, navegação, cor primária |
| **Dourado Suave** | `#FFD700` | `--gold` | Destaques, CTAs, microinterações |
| **Cinza Elegante** | `#4A4A4A` | `--gray` | Textos secundários, bordas |

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão 18+) e o [pnpm](https://pnpm.io/) instalados.

### 2. Instalação

```bash
# Clone o repositório
git clone [URL_DO_SEU_REPOSITORIO] mundo-feliz-fantasia
cd mundo-feliz-fantasia

# Instale as dependências
pnpm install
```

### 3. Scripts

| Comando | Descrição |
| :--- | :--- |
| `pnpm run dev` | Inicia o servidor de desenvolvimento em `http://localhost:3000` |
| `pnpm run build` | Cria uma build otimizada para produção |
| `pnpm run start` | Inicia o servidor de produção (após o `build`) |
| `pnpm run export-zip` | **[A SER IMPLEMENTADO]** Gera o arquivo `release.zip` com o build otimizado |

### 4. Configuração de APIs e Integrações

#### A. Pagamentos (Mercado Pago / PagSeguro / PIX)

As chaves de API devem ser configuradas no arquivo `.env.local` (crie-o na raiz do projeto).

```
# .env.local
# Chaves de API de Pagamento (Placeholders)
MERCADO_PAGO_PUBLIC_KEY="[SUA_CHAVE_PUBLICA_MERCADO_PAGO]"
MERCADO_PAGO_ACCESS_TOKEN="[SEU_ACCESS_TOKEN_MERCADO_PAGO]"

PAGSEGURO_TOKEN="[SEU_TOKEN_PAGSEGURO]"
```

#### B. Checkout via WhatsApp

O número de telefone está hardcoded no componente `ProductPage.tsx` e `WholesalePage.tsx` para o número de contato da loja.

- **Número de Contato:** `5511952744979` (Exemplo)

Para alterar, edite o número nos seguintes arquivos:
- `src/app/product/[slug]/page.tsx`
- `src/app/wholesale/page.tsx`
- `src/app/contact/page.tsx`

#### C. Integração com CMS (Sanity/Strapi)

O projeto está estruturado para usar um CMS Headless. O catálogo de produtos (`src/lib/data/catalog.json`) é um mock e deve ser substituído por chamadas de API.

**Estrutura de Schema (CMS)**:
- `nome` (String)
- `categoria` (Referência/String)
- `descricao` (Texto)
- `tamanhos` (Array de Strings)
- `preco` (Número)
- `imagem` (Asset/URL)
- `estoque` (Número)
- `destaque` (Booleano)
- `tags` (Array de Strings)

## ✅ Checklist de QA (Critérios de Aceite)

| Critério | Status | Observações |
| :--- | :--- | :--- |
| `pnpm run build` roda sem erros | ✅ | Testado. Build otimizado com sucesso. |
| Checkout WhatsApp funciona | ✅ | Implementado com template de mensagem pré-preenchida. |
| Páginas Obrigatórias (Home, Shop, Product, Sobre, Atacado, Contato, Trocas, Privacidade) | ✅ | Todas as páginas implementadas. |
| Responsividade | ✅ | Design Mobile-First com Tailwind CSS. |
| SEO Básico (Metatags) | ✅ | Configurado em `layout.tsx`. |
| Acessibilidade (WCAG AA) | 🚧 | Cores com bom contraste (Creme/Teal) e navegação via teclado implementada nos componentes. |
| Testes (Jest + Playwright) | ❌ | **[A FAZER]** - Requer implementação de testes. |
| `release.zip` e `deploy_v1.sh` | ❌ | **[A FAZER]** - Próxima etapa de entrega. |

## 🛠️ Script de Deploy (deploy_v1.sh)

Este script contém os comandos para inicializar o repositório Git e fazer o primeiro push.

```bash
#!/bin/bash

# Inicializa o repositório Git
git init

# Adiciona todos os arquivos
git add .

# Cria o primeiro commit
git commit -m "feat: initial commit - new e-commerce site Mundo Feliz Fantasia"

# Adiciona o repositório remoto (substitua pelo seu URL)
# Exemplo: git remote add origin https://github.com/ErickBrendal/mundo-feliz-fantasia.git

echo "Repositório Git inicializado e arquivos comitados."
echo "Próximo passo: Adicione o repositório remoto e faça o push."
echo "Exemplo: git remote add origin [URL_DO_SEU_REPOSITORIO] && git push -u origin main"
```

