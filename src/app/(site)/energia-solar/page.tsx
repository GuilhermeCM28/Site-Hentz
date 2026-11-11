import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Plus, Sun, Zap } from "lucide-react";

const installationSteps = [
  {
    number: "01",
    title: "Planejamento do sistema",
    description:
      "Avaliamos o consumo, o imóvel e as condições do telhado para dimensionar um sistema adequado à sua necessidade.",
  },
  {
    number: "02",
    title: "Aprovação da conexão",
    description:
      "Preparamos os documentos necessários e pedimos à empresa de energia autorização para conectar o sistema à rede.",
  },
  {
    number: "03",
    title: "Montagem e ativação",
    description:
      "Com o projeto aprovado, instalamos os equipamentos e acompanhamos a vistoria e a ativação do sistema.",
  },
];

const faqs = [
  {
    question: "Como funciona a energia solar?",
    answer:
      "Os painéis solares captam a luz do sol e geram eletricidade. O inversor adapta essa energia para uso no imóvel. Em sistemas conectados à rede elétrica, a energia que sobra pode ser enviada à rede conforme as regras locais.",
  },
  {
    question: "O sistema gera energia em dias nublados ou à noite?",
    answer:
      "Os painéis também geram energia em dias nublados, mas produzem menos. À noite, eles não geram energia; imóveis conectados à rede elétrica continuam recebendo energia normalmente.",
  },
  {
    question: "É necessário fazer manutenção?",
    answer:
      "A manutenção costuma ser simples: inclui verificar o sistema e limpar os painéis quando necessário. Os cuidados dependem dos equipamentos e das condições do local.",
  },
  {
    question: "Qualquer telhado pode receber painéis solares?",
    answer:
      "A instalação depende do espaço disponível, da posição e das sombras no telhado, além das condições da estrutura. Uma avaliação ajuda a encontrar a melhor solução para cada imóvel.",
  },
];

export default function EnergiaSolarPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate bg-white text-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(25,25,111,0.1),_transparent_55%)]" />
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <Sun className="h-4 w-4" aria-hidden="true" />
              Energia solar para sua casa
            </p>
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              O sol pode fazer parte da energia da sua casa.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Entenda como funciona a instalação de energia solar e converse
              com nossa equipe para avaliar a melhor opção para o seu imóvel.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/orcamento"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 font-semibold text-slate-200 transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#como-funciona"
                className="inline-flex h-12 items-center gap-2 px-2 font-medium text-slate-700 transition hover:text-primary"
              >
                Entenda como funciona
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/10 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                <Sun className="h-8 w-8" aria-hidden="true" />
              </div>
              <h2 className="mt-8 text-2xl font-semibold">
                Da avaliação à ativação
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                O planejamento, a aprovação da conexão e a instalação são
                acompanhados por profissionais.
              </p>
              <div className="mt-8 space-y-4">
                {["Sistema planejado", "Conexão aprovada", "Sistema instalado"].map(
                  (item) => (
                    <div className="flex items-center gap-3" key={item}>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        aria-labelledby="how-it-works-title"
        className="container mx-auto px-4 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase text-primary">
            Como funciona
          </p>
          <h2
            id="how-it-works-title"
            className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl"
          >
            Da luz do sol à energia que você usa
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Os painéis solares transformam a luz do sol em eletricidade para o
            imóvel. Quando o sistema está conectado à rede, a empresa de energia
            complementa o fornecimento quando necessário.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sun className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">
              1. Captação
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Os painéis solares captam a luz do sol e geram eletricidade.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Zap className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">
              2. Conversão
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              O inversor adapta a energia gerada para uso nos aparelhos da casa.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <ArrowRight className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">
              3. Uso e rede
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              A energia gerada abastece o imóvel. O que sobra pode ser enviado
              à rede elétrica, conforme as regras locais.
            </p>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="installation-title"
        className="bg-white py-20 sm:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-primary">
              Etapas do projeto
            </p>
            <h2
              id="installation-title"
              className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl"
            >
              Acompanhamento em cada etapa
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Cada projeto começa com uma avaliação e segue os requisitos
              técnicos e de conexão aplicáveis ao imóvel.
            </p>
          </div>

          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {installationSteps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <p className="text-sm font-bold text-primary">
                  ETAPA {step.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="faq-title"
        className="container mx-auto px-4 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase text-primary">
              Dúvidas frequentes
            </p>
            <h2
              id="faq-title"
              className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl"
            >
              Perguntas sobre energia solar
            </h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details className="group py-5" key={faq.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-slate-950 marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <Plus
                    className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-2xl pt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-primary p-7 text-slate-200 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h3 className="text-xl font-semibold">
                Quer avaliar um projeto para seu imóvel?
              </h3>
              <p className="mt-2 text-slate-200">
                Envie algumas informações e continue a conversa pelo WhatsApp.
              </p>
            </div>
            <Link
              href="/orcamento"
              className="mt-5 inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 font-semibold text-primary transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-0"
            >
              Pedir orçamento
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
