import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  MoveRight,
  Sun,
  Zap,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Energia solar",
    description:
      "Mais autonomia para o seu imóvel, com um projeto pensado para o seu consumo e a realidade do seu telhado.",
    href: "/energia-solar",
    label: "Conheça a solução",
    icon: Sun,
  },
  {
    number: "02",
    title: "Mobilidade elétrica",
    description:
      "Conheça as scooters elétricas e encontre uma nova forma de fazer seus trajetos do dia a dia.",
    href: "/scooters",
    label: "Ver scooters",
    icon: Zap,
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-white text-slate-950">
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-slate-200">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,rgba(25,25,111,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(25,25,111,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-32 top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-[120px]"
        />
        <div className="container mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-24">
          <div className="relative z-10 max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase text-slate-700">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Hentz Energia & Mobilidade
            </p>
            <h1 className="mt-8 text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Energia para
              <br />
              <span className="text-primary">ir mais longe.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Soluções em energia solar e mobilidade elétrica para acompanhar
              as escolhas que movem você — em casa, no trabalho e no caminho.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/orcamento"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-primary px-6 font-semibold text-slate-200 transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Solicitar orçamento
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/scooters"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-6 font-semibold text-slate-900 transition hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Explorar scooters
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <a
              href="#solucoes"
              className="mt-14 inline-flex items-center gap-3 text-sm text-slate-500 transition hover:text-primary"
            >
              Descubra nossas soluções
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-primary/10 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-primary/80 bg-primary p-6 text-slate-200 shadow-2xl shadow-primary/25 sm:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-30 [background-image:linear-gradient(135deg,transparent_48%,rgba(255,255,255,0.12)_49%,transparent_50%)] [background-size:26px_26px]"
              />
              <div className="relative flex items-center justify-between border-b border-white/20 pb-5">
                <div>
                  <p className="text-xs font-medium uppercase text-slate-200">
                    Nossas soluções
                  </p>
                  <p className="mt-1 text-lg font-semibold">Um novo movimento</p>
                </div>
                <BatteryCharging
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>

              <div className="relative grid grid-cols-2 gap-3 py-8">
                <div className="flex min-h-44 flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-4 sm:min-h-52 sm:p-5">
                  <Sun className="h-7 w-7 text-white" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase text-slate-200">
                      Energia
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-200 sm:text-xl">
                      Do sol
                      <br />
                      para você.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-44 flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-4 sm:min-h-52 sm:p-5">
                  <Zap className="h-7 w-7 text-white" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase text-slate-200">
                      Mobilidade
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-200 sm:text-xl">
                      Elétrica
                      <br />
                      por natureza.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center gap-4 rounded-xl border border-white/20 bg-black/15 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <MoveRight
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm leading-6 text-slate-200">
                  Conheça caminhos mais inteligentes para gerar e usar energia.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 hidden h-20 w-20 rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur sm:block" />
            <div className="absolute -right-5 -top-5 hidden h-16 w-16 rounded-full border border-primary/50 bg-primary/10 sm:block" />
          </div>
        </div>
      </section>

      <section
        id="solucoes"
        aria-labelledby="solutions-heading"
        className="container mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-primary">
              Nossas soluções
            </p>
            <h2
              id="solutions-heading"
              className="mt-4 text-3xl font-semibold sm:text-5xl"
            >
              Feitas para o seu próximo passo.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-slate-600">
            Da energia que abastece seus espaços à mobilidade que acompanha sua
            rotina, encontre a solução certa para você.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <Link
                key={solution.number}
                href={solution.href}
                className="group relative flex min-h-72 flex-col overflow-hidden rounded-2xl border border-primary bg-primary p-6 text-slate-200 transition hover:bg-primary/95 sm:min-h-80 sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-14 -top-16 h-56 w-56 rounded-full bg-white/10 blur-[80px]"
                />
                <div className="relative flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white"
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-sm text-slate-200">
                    {solution.number}
                  </span>
                </div>
                <div className="relative mt-auto pt-12">
                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    {solution.title}
                  </h3>
                  <p className="mt-3 max-w-lg leading-7 text-slate-200">
                    {solution.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
                    {solution.label}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="container mx-auto flex max-w-7xl flex-col gap-7 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between sm:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-primary">
              Vamos conversar
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">
              O próximo passo começa com uma boa conversa.
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Conte o que você está buscando. Nossa equipe pode ajudar a
              encontrar o melhor caminho.
            </p>
          </div>
          <Link
            href="/orcamento"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-primary px-5 font-semibold text-slate-200 transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Falar com a equipe
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
