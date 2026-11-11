import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sun } from "lucide-react";
import { SolarQuoteForm } from "@/components/forms/SolarQuoteForm";

export default function OrcamentoPage() {
  return (
    <div className="bg-slate-50">
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <Link
          href="/energia-solar"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Conheça a energia solar
        </Link>

        <div className="mx-auto mt-8 grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="pt-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              <Sun className="h-4 w-4" aria-hidden="true" />
              Simulação de energia solar
            </p>
            <h1 className="mt-5 text-4xl font-bold text-slate-950 sm:text-5xl">
              Conte um pouco sobre o seu imóvel.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Com algumas informações, nossa equipe pode iniciar uma conversa
              para avaliar a possibilidade de instalar energia solar no seu imóvel.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "A equipe recebe os dados que você informar",
                "A conversa continua diretamente pelo WhatsApp",
                "A avaliação depende das características do imóvel",
              ].map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-semibold text-slate-950">
                Sem compromisso nesta etapa
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                O envio abre o WhatsApp com uma mensagem preenchida para você
                revisar e encaminhar. Os dados não são salvos neste site.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-slate-950">
                Solicitar orçamento
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Preencha os campos para abrir sua conversa no WhatsApp.
              </p>
            </div>
            <SolarQuoteForm />
            <Link
              href="/energia-solar"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-800"
            >
              Saiba mais sobre as etapas do projeto
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
