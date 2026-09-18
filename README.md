# Campanelli Analytics — Site Institucional

Site institucional bilíngue (EN/PT) da **Campanelli Analytics LTDA**, construído em [Astro](https://astro.build) e publicado via **GitHub Pages**. Este README cobre tudo que você precisa para rodar, editar e publicar o site.

## 1. Pré-requisitos

- [Node.js](https://nodejs.org) 18 ou superior (recomendado: 20 LTS)
- npm (instalado junto com o Node.js)
- Uma conta no GitHub com acesso ao repositório `wallisonlac/campanelli-analytics`

## 2. Instalar dependências

Na raiz do projeto:

```bash
npm install
```

## 3. Executar localmente

```bash
npm run dev
```

O site abre em `http://localhost:4321`. As páginas em inglês estão em `/en/` e em português em `/pt/`.

Para gerar o build de produção e conferir antes de publicar:

```bash
npm run build
npm run preview
```

O `npm run build` gera a pasta `dist/`, que é o que o GitHub Pages publica.

## 4. Estrutura do projeto

```
campanelli-analytics/
├── public/                  # arquivos estáticos (favicon, CNAME, robots.txt, sitemap.xml)
├── src/
│   ├── components/          # componentes reutilizáveis (.astro)
│   ├── content/             # conteúdo em en.json e pt.json
│   ├── layouts/             # BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro      # redireciona para /en/
│   │   ├── en/               # páginas em inglês
│   │   └── pt/               # páginas em português
│   └── styles/               # global.css
├── .github/workflows/deploy.yml  # deploy automático para GitHub Pages
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 5. Como editar os textos em inglês e português

Todo o conteúdo comercial (textos, títulos, listas de serviços, CTAs, footer, etc.) está centralizado em dois arquivos JSON:

- `src/content/en.json` — conteúdo em inglês
- `src/content/pt.json` — conteúdo em português

Edite os valores diretamente nesses arquivos. As páginas `.astro` em `src/pages/en/` e `src/pages/pt/` apenas consomem esses dados — normalmente você não precisa tocar nas páginas para alterar texto, apenas nos JSONs.

## 6. Como substituir os placeholders

Os seguintes campos aparecem como placeholders em **ambos** os arquivos de conteúdo (`en.json` e `pt.json`) e devem ser substituídos antes de divulgar o site:

| Placeholder | Onde aparece | Substituir por |
|---|---|---|
| `[SUBSTITUIR_POR_EMAIL]` | `contact.email`, textos de privacy/terms | seu e-mail corporativo real |
| `[SUBSTITUIR_POR_LINKEDIN]` | `leadership.linkedin`, `about.linkedin`, `contact.linkedin` | URL do seu LinkedIn |
| `[SUBSTITUIR_POR_GITHUB]` | `leadership.github`, `about.github`, `contact.github` | URL do seu GitHub |
| `[SUBSTITUIR_POR_CALENDLY_OU_OUTRO]` | `contact.calendly` | link de agendamento (Calendly, Cal.com etc.) |
| `[SUBSTITUIR_POR_FOTO]` | `leadership.photoPlaceholder`, `about.photoPlaceholder` | substitua o bloco `.leadership__photo` por uma `<img>` real apontando para um arquivo em `public/images/` |
| `[SUBSTITUIR_POR_LOGO]` | `about.logoPlaceholder` | logo definitivo, se/quando existir |

Depois de definir o e-mail real, revise também o `src/components/ContactForm.astro`, que usa `mailto:${contact.email}` como destino do formulário — não requer nenhuma alteração de código, só o valor no JSON.

Para inserir um ID de analytics (Plausible ou Google Analytics) futuramente, adicione o snippet no comentário reservado dentro de `src/components/SEO.astro` (procure por "Analytics placeholder").

## 7. Como criar o repositório no GitHub

Se este projeto ainda não existir no GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/wallisonlac/campanelli-analytics.git
git push -u origin main
```

## 8. Como fazer commit e push (fluxo normal do dia a dia)

```bash
git add .
git commit -m "Descrição da alteração"
git push origin main
```

## 9. Como ativar o GitHub Pages usando GitHub Actions

1. No repositório no GitHub, vá em **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. O workflow já está configurado em `.github/workflows/deploy.yml`: a cada push na branch `main`, ele instala dependências, builda o Astro e publica a pasta `dist/` no GitHub Pages automaticamente.
4. Acompanhe o progresso na aba **Actions** do repositório.

## 10. Como configurar o domínio campanellianalytics.com

1. Em **Settings → Pages → Custom domain**, digite `campanellianalytics.com` e salve.
2. O arquivo `public/CNAME` já contém `campanellianalytics.com` — ele é copiado automaticamente para `dist/` no build, então o GitHub Pages reconhece o domínio customizado a cada deploy.
3. Aguarde a verificação DNS (próximo passo) antes de ativar HTTPS.

## 11. Registros DNS a configurar

Configure estes registros no painel do seu provedor de domínio (ex.: Registro.br, GoDaddy, Cloudflare). **Confirme os valores atuais na documentação oficial do GitHub Pages antes de salvar**, pois os IPs podem ser atualizados pela GitHub:

- **Domínio raiz/apex (`campanellianalytics.com`)**: registros `A` apontando para os IPs do GitHub Pages (atualmente publicados em [docs.github.com/pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)). Nos últimos anos os IPs padrão são `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153` — confirme antes de aplicar.
- **`www.campanellianalytics.com`**: registro `CNAME` apontando para `wallisonlac.github.io`.

## 12. Redirecionamento de campanellianalytics.com.br

O GitHub Pages não hospeda dois domínios apex simultaneamente com redirecionamento nativo. Para redirecionar `campanellianalytics.com.br` → `https://campanellianalytics.com/pt/`, use um dos caminhos abaixo no painel do provedor onde o `.com.br` está registrado:

- **Redirecionamento por URL forwarding**, se o provedor (ex.: Registro.br) oferecer essa opção diretamente no painel do domínio; ou
- **Página estática de redirecionamento** hospedada em outro serviço apontado pelo `.com.br` (ex.: Cloudflare Pages, Netlify) contendo apenas um `<meta http-equiv="refresh">` ou regra de redirect para `https://campanellianalytics.com/pt/`.

Confirme com o suporte do seu provedor de domínio qual método está disponível, pois isso varia por registrador.

## 13. Como validar o domínio no GitHub Pages

Em **Settings → Pages**, após configurar os registros DNS, o GitHub mostra automaticamente o status da verificação do domínio customizado. Aguarde o selo de "DNS check successful" antes de prosseguir.

## 14. Como ativar Enforce HTTPS

Em **Settings → Pages**, após o domínio ser validado, marque a opção **Enforce HTTPS**. Isso pode levar algumas horas para o certificado ser emitido automaticamente pelo GitHub.

## 15. Como configurar o e-mail corporativo

Isso depende do provedor do seu domínio de e-mail (Google Workspace, Zoho Mail, etc.) e não do GitHub Pages. Sugestões de endereços para o domínio `campanellianalytics.com`:

- `hello@campanellianalytics.com`
- `partnerships@campanellianalytics.com`
- `projects@campanellianalytics.com`
- `privacy@campanellianalytics.com`

Depois de criar o e-mail escolhido, atualize o campo `contact.email` em `src/content/en.json` e `src/content/pt.json`.

## 16. Sugestões de e-mails

Ver lista no item 15 acima.

## 17. Como conectar o Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console).
2. Adicione a propriedade `https://campanellianalytics.com/`.
3. Verifique a propriedade via registro DNS `TXT` (recomendado, pois cobre o domínio inteiro) ou via arquivo HTML, conforme instruções na tela.
4. Envie o `sitemap.xml` (já disponível em `public/sitemap.xml`, publicado em `https://campanellianalytics.com/sitemap.xml`).

## 18. Como adicionar Plausible ou Google Analytics depois

1. Crie a conta no [Plausible](https://plausible.io) ou no [Google Analytics](https://analytics.google.com).
2. Copie o snippet/ID fornecido.
3. Insira o snippet no local reservado em `src/components/SEO.astro` (comentário "Analytics placeholder").
4. Nenhum ID de analytics foi inventado neste projeto — o espaço está vazio até você inserir um ID real.

## 19. Checklist final antes de enviar o site a potenciais clientes

- [ ] Substituir e-mail, LinkedIn, GitHub, foto e logo (todos os placeholders listados no item 6)
- [ ] Revisar todos os textos em `en.json` e `pt.json`
- [ ] Confirmar que `npm run build` roda sem erros
- [ ] Confirmar o domínio customizado em Settings → Pages
- [ ] Validar os registros DNS (A/CNAME) no provedor do domínio
- [ ] Ativar Enforce HTTPS
- [ ] Configurar redirecionamento de `campanellianalytics.com.br` para `/pt/`
- [ ] Enviar o sitemap ao Google Search Console
- [ ] Testar o formulário de contato (mailto) em desktop e mobile
- [ ] Testar navegação por teclado e leitura por leitor de tela nas páginas principais
- [ ] Revisar todas as páginas em mobile (menu responsivo, CTAs visíveis)
