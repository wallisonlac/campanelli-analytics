// Content for the dedicated service landing pages (SEO). One entry per page
// key, with PT and EN versions. Meta titles/descriptions live in pt.json/en.json.
import type { Lang } from "./routes";

export type LandingKey = "svcPowerBI" | "svcAutomation" | "svcFabric";

interface Landing {
  eyebrow: string;
  title: string;
  subtitle: string;
  pains: { title: string; items: string[] };
  solution: { title: string; text: string; items: string[] };
  steps: { title: string; items: { title: string; text: string }[] };
  stack: string[];
  faq: { q: string; a: string }[];
  cta: { title: string; text: string };
  serviceName: string;
}

export const landings: Record<LandingKey, Record<Lang, Landing>> = {
  svcPowerBI: {
    pt: {
      eyebrow: "Migração Excel → Power BI",
      title: "Do Excel ao Power BI, sem perder nenhuma regra de negócio.",
      subtitle:
        "Transformamos planilhas complexas e relatórios manuais em modelos Power BI confiáveis, que se atualizam sozinhos e que qualquer gestor consegue usar.",
      pains: {
        title: "Sinais de que a planilha já não aguenta",
        items: [
          "Fechamento mensal que leva dias de copiar, colar e conferir",
          "Fórmulas que só uma pessoa entende",
          "Números diferentes para o mesmo indicador em áreas diferentes",
          "Arquivos pesados, lentos e com abas escondidas",
          "Nenhuma forma de auditar de onde veio cada valor",
        ],
      },
      solution: {
        title: "Como resolvemos",
        text:
          "Mapeamos cada cálculo da planilha com a sua equipe, documentamos as regras e reconstruímos tudo num modelo em estrela no Power BI, validado linha a linha contra o resultado original.",
        items: [
          "Levantamento e documentação das regras de negócio",
          "Modelo de dados em estrela (fatos e dimensões)",
          "Medidas DAX testadas e documentadas",
          "Atualização automática a partir das fontes",
          "Validação contra os números do Excel antes de entrar em produção",
          "Treinamento da equipe que vai usar os painéis",
        ],
      },
      steps: {
        title: "Como funciona o projeto",
        items: [
          { title: "Diagnóstico", text: "Analisamos as planilhas e definimos o escopo, o prazo e o investimento." },
          { title: "Modelo", text: "Construímos o modelo de dados e as medidas, com as fontes ligadas." },
          { title: "Validação", text: "Comparamos os resultados com o Excel até bater, linha a linha." },
          { title: "Entrega", text: "Publicamos os painéis, documentamos e treinamos a equipe." },
        ],
      },
      stack: ["Power BI", "DAX", "Power Query", "SQL", "Microsoft Fabric", "Excel / VBA"],
      faq: [
        { q: "Quanto tempo leva uma migração?", a: "Depende do tamanho e da complexidade das planilhas. Depois do diagnóstico enviamos um prazo e um valor fechados." },
        { q: "Precisamos de licenças do Power BI?", a: "Para publicar e compartilhar painéis, sim. Indicamos o licenciamento mais econômico para o seu caso." },
        { q: "E se as regras de negócio não estiverem documentadas?", a: "É o cenário mais comum. Parte do nosso trabalho é descobrir e documentar essas regras com a sua equipe." },
        { q: "Trabalham remotamente?", a: "Sim. Atendemos empresas e órgãos públicos no Brasil, em Portugal e no resto da Europa." },
      ],
      cta: { title: "Quer tirar uma planilha crítica do Excel?", text: "Agende uma conversa de 30 minutos e nos mostre o seu caso." },
      serviceName: "Migração de Excel para Power BI",
    },
    en: {
      eyebrow: "Excel → Power BI migration",
      title: "From Excel to Power BI, without losing a single business rule.",
      subtitle:
        "We turn complex spreadsheets and manual reports into reliable Power BI models that refresh on their own and that any manager can use.",
      pains: {
        title: "Signs your spreadsheet has hit its limit",
        items: [
          "Month-end close takes days of copying, pasting and checking",
          "Formulas only one person understands",
          "Different numbers for the same KPI in different teams",
          "Heavy, slow files with hidden tabs",
          "No way to audit where each value comes from",
        ],
      },
      solution: {
        title: "How we solve it",
        text:
          "We map every calculation in the spreadsheet with your team, document the rules and rebuild everything as a star-schema Power BI model, validated line by line against the original output.",
        items: [
          "Business rules gathered and documented",
          "Star-schema data model (facts and dimensions)",
          "Tested, documented DAX measures",
          "Automatic refresh from the source systems",
          "Validation against the Excel figures before go-live",
          "Training for the team that will use the dashboards",
        ],
      },
      steps: {
        title: "How the project works",
        items: [
          { title: "Assessment", text: "We review the spreadsheets and agree scope, timeline and budget." },
          { title: "Model", text: "We build the data model and measures, connected to the sources." },
          { title: "Validation", text: "We compare results with Excel until they match, line by line." },
          { title: "Handover", text: "We publish the dashboards, document them and train your team." },
        ],
      },
      stack: ["Power BI", "DAX", "Power Query", "SQL", "Microsoft Fabric", "Excel / VBA"],
      faq: [
        { q: "How long does a migration take?", a: "It depends on the size and complexity of the spreadsheets. After the assessment we send a fixed timeline and price." },
        { q: "Do we need Power BI licences?", a: "To publish and share dashboards, yes. We recommend the most cost-effective licensing for your case." },
        { q: "What if the business rules aren't documented?", a: "That's the most common scenario. Part of our work is uncovering and documenting those rules with your team." },
        { q: "Do you work remotely?", a: "Yes. We work with companies and public bodies in Brazil, Portugal and across Europe." },
      ],
      cta: { title: "Want to move a critical spreadsheet out of Excel?", text: "Book a 30-minute call and walk us through your case." },
      serviceName: "Excel to Power BI migration",
    },
  },

  svcAutomation: {
    pt: {
      eyebrow: "Automação de relatórios e processos",
      title: "Relatórios que se fazem sozinhos. Equipe livre para decidir.",
      subtitle:
        "Automatizamos extração, conferência, conciliação e envio de relatórios. O que hoje leva horas de trabalho manual passa a rodar sozinho, com menos erro.",
      pains: {
        title: "Onde o trabalho manual custa caro",
        items: [
          "Relatórios montados à mão toda semana ou todo mês",
          "Dados copiados entre sistemas e planilhas",
          "Conferências e conciliações feitas linha a linha",
          "Erros que só aparecem depois de o relatório ser enviado",
          "Hora extra no fechamento",
        ],
      },
      solution: {
        title: "Como resolvemos",
        text:
          "Mapeamos o processo de ponta a ponta, medimos quanto tempo ele custa hoje e escolhemos a automação mais simples que resolve, sem trocar os sistemas que já funcionam.",
        items: [
          "Extração automática de sistemas, bases de dados, APIs e planilhas",
          "Regras de validação e conciliação automáticas",
          "Relatórios e painéis atualizados sem intervenção",
          "Alertas por e-mail ou Teams quando algo sai do padrão",
          "Documentação e passagem para a equipe",
        ],
      },
      steps: {
        title: "Como funciona o projeto",
        items: [
          { title: "Mapeamento", text: "Desenhamos o processo atual e medimos o tempo gasto." },
          { title: "Desenho", text: "Propomos a automação mais enxuta e o ganho esperado." },
          { title: "Construção", text: "Implementamos, testamos com dados reais e ajustamos." },
          { title: "Operação", text: "Colocamos em produção, monitoramos e treinamos a equipe." },
        ],
      },
      stack: ["Python", "SQL", "Power Automate", "Power BI", "Azure", "VBA"],
      faq: [
        { q: "Precisamos trocar de sistema?", a: "Não. Trabalhamos por cima dos sistemas que já existem e ligamos o que estiver separado." },
        { q: "Que tipo de processo dá para automatizar?", a: "Qualquer rotina repetitiva baseada em dados: relatórios, conciliações, fechamentos, extrações e alertas." },
        { q: "Quanto se poupa?", a: "Medimos o tempo do processo atual no diagnóstico e estimamos a economia antes de começar." },
        { q: "Atendem órgãos públicos?", a: "Sim, incluindo contratação pela Lei 14.133 no Brasil. Veja a página de Setor Público." },
      ],
      cta: { title: "Qual relatório consome mais horas da sua equipe?", text: "Conte para nós numa conversa de 30 minutos e estimamos o ganho." },
      serviceName: "Automação de relatórios e processos",
    },
    en: {
      eyebrow: "Report and process automation",
      title: "Reports that build themselves. A team free to decide.",
      subtitle:
        "We automate extraction, checks, reconciliation and report delivery. What takes hours of manual work today runs on its own, with fewer errors.",
      pains: {
        title: "Where manual work gets expensive",
        items: [
          "Reports assembled by hand every week or month",
          "Data copied between systems and spreadsheets",
          "Checks and reconciliations done line by line",
          "Errors that only show up after the report is sent",
          "Overtime at month-end close",
        ],
      },
      solution: {
        title: "How we solve it",
        text:
          "We map the process end to end, measure what it costs today and pick the simplest automation that solves it, without replacing the systems that already work.",
        items: [
          "Automatic extraction from systems, databases, APIs and spreadsheets",
          "Automated validation and reconciliation rules",
          "Reports and dashboards refreshed without manual steps",
          "Email or Teams alerts when something is off",
          "Documentation and handover to your team",
        ],
      },
      steps: {
        title: "How the project works",
        items: [
          { title: "Mapping", text: "We map the current process and measure the time spent." },
          { title: "Design", text: "We propose the leanest automation and the expected gain." },
          { title: "Build", text: "We implement, test with real data and fine-tune." },
          { title: "Run", text: "We go live, monitor and train your team." },
        ],
      },
      stack: ["Python", "SQL", "Power Automate", "Power BI", "Azure", "VBA"],
      faq: [
        { q: "Do we need to replace our systems?", a: "No. We work on top of the systems you already have and connect what is disconnected." },
        { q: "What kind of process can be automated?", a: "Any repetitive, data-based routine: reports, reconciliations, closings, extractions and alerts." },
        { q: "How much can we save?", a: "We measure the current process during the assessment and estimate the savings before we start." },
        { q: "Do you work with public bodies?", a: "Yes, in Brazil and in Europe. See our Public Sector page." },
      ],
      cta: { title: "Which report eats most of your team's hours?", text: "Tell us in a 30-minute call and we'll estimate the gain." },
      serviceName: "Report and process automation",
    },
  },

  svcFabric: {
    pt: {
      eyebrow: "Engenharia de dados · Microsoft Fabric e Azure",
      title: "Uma plataforma de dados moderna, do sistema de origem ao painel.",
      subtitle:
        "Projetamos e construímos pipelines, lakehouses e data warehouses em Microsoft Fabric e Azure, com qualidade, governança e custos sob controle.",
      pains: {
        title: "Quando é hora de modernizar",
        items: [
          "ETL legado (SSIS, scripts, Access) difícil de manter",
          "Dados espalhados em vários sistemas sem uma fonte única",
          "Relatórios lentos e cargas que falham sem aviso",
          "Custos de nuvem que crescem sem controle",
          "Novas áreas que exigem retrabalho em toda a estrutura",
        ],
      },
      solution: {
        title: "Como resolvemos",
        text:
          "Desenhamos a arquitetura (bronze, prata e ouro), construímos os pipelines e entregamos modelos prontos para Power BI, com monitoramento e documentação.",
        items: [
          "Arquitetura lakehouse e data warehouse em Microsoft Fabric ou Azure",
          "Pipelines de ingestão e transformação com PySpark e SQL",
          "Migração de SSIS e cargas on-premises para a nuvem",
          "Qualidade de dados, testes e monitoramento das cargas",
          "Modelos semânticos prontos para Power BI",
          "Controle de capacidade e de custos",
        ],
      },
      steps: {
        title: "Como funciona o projeto",
        items: [
          { title: "Arquitetura", text: "Levantamos fontes e necessidades e desenhamos a plataforma." },
          { title: "Fundação", text: "Montamos ambientes, segurança e os primeiros pipelines." },
          { title: "Expansão", text: "Migramos cargas e domínios de dados por etapas." },
          { title: "Operação", text: "Monitoramos, otimizamos custos e repassamos o conhecimento para a equipe." },
        ],
      },
      stack: ["Microsoft Fabric", "Azure Data Factory", "PySpark", "SQL", "Databricks", "Power BI", "SSIS"],
      faq: [
        { q: "Microsoft Fabric ou Azure?", a: "Depende do volume, da equipe e do que já existe. Recomendamos a opção mais simples e econômica para o seu caso." },
        { q: "Conseguem migrar o nosso SSIS?", a: "Sim. Migramos por etapas, mantendo as cargas atuais funcionando até a nova versão ser validada." },
        { q: "Também atuam como reforço de equipe?", a: "Sim. Atuamos em projetos fechados ou como engenheiros dedicados junto à sua equipe ou consultoria." },
        { q: "Trabalham com empresas na Europa?", a: "Sim. Já entregamos projetos em Fabric e Azure para empresas em Portugal, no Reino Unido e na Suíça." },
      ],
      cta: { title: "Planejando uma migração para a nuvem?", text: "Converse 30 minutos conosco sobre a arquitetura certa para os seus dados." },
      serviceName: "Engenharia de dados com Microsoft Fabric e Azure",
    },
    en: {
      eyebrow: "Data engineering · Microsoft Fabric & Azure",
      title: "A modern data platform, from source system to dashboard.",
      subtitle:
        "We design and build pipelines, lakehouses and data warehouses on Microsoft Fabric and Azure, with quality, governance and costs under control.",
      pains: {
        title: "When it's time to modernise",
        items: [
          "Legacy ETL (SSIS, scripts, Access) that is hard to maintain",
          "Data scattered across systems with no single source of truth",
          "Slow reports and loads that fail silently",
          "Cloud costs growing without control",
          "Every new business area means reworking the whole stack",
        ],
      },
      solution: {
        title: "How we solve it",
        text:
          "We design the architecture (bronze, silver and gold), build the pipelines and deliver Power BI-ready models, with monitoring and documentation.",
        items: [
          "Lakehouse and data warehouse architecture on Microsoft Fabric or Azure",
          "Ingestion and transformation pipelines with PySpark and SQL",
          "Migration of SSIS and on-premises loads to the cloud",
          "Data quality, testing and load monitoring",
          "Power BI-ready semantic models",
          "Capacity and cost control",
        ],
      },
      steps: {
        title: "How the project works",
        items: [
          { title: "Architecture", text: "We map sources and needs and design the platform." },
          { title: "Foundation", text: "We set up environments, security and the first pipelines." },
          { title: "Scale-out", text: "We migrate loads and data domains in stages." },
          { title: "Run", text: "We monitor, optimise costs and transfer knowledge to your team." },
        ],
      },
      stack: ["Microsoft Fabric", "Azure Data Factory", "PySpark", "SQL", "Databricks", "Power BI", "SSIS"],
      faq: [
        { q: "Microsoft Fabric or Azure?", a: "It depends on volume, team and what you already have. We recommend the simplest, most cost-effective option for your case." },
        { q: "Can you migrate our SSIS packages?", a: "Yes. We migrate in stages and keep the current loads running until the new version is validated." },
        { q: "Do you also provide team augmentation?", a: "Yes. We deliver fixed-scope projects or work as dedicated engineers alongside your team or consultancy." },
        { q: "Do you work with companies in Europe?", a: "Yes. We have delivered Fabric and Azure projects for companies in Portugal, the UK and Switzerland." },
      ],
      cta: { title: "Planning a move to the cloud?", text: "Spend 30 minutes with us on the right architecture for your data." },
      serviceName: "Data engineering with Microsoft Fabric and Azure",
    },
  },
};
