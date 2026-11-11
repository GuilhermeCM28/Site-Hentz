import Link from "next/link";
import { Sun, Zap, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Coluna 1: Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Sun className="h-5 w-5 stroke-[2.2]" />
              </div>
              <span className="text-xl font-bold text-slate-200">
                HENTZ
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Soluções completas em geração de energia solar e
              mobilidade elétrica com scooters de alta performance.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-slate-200">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-slate-200 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/energia-solar"
                  className="hover:text-slate-200 transition-colors"
                >
                  Energia Solar
                </Link>
              </li>
              <li>
                <Link
                  href="/scooters"
                  className="hover:text-slate-200 transition-colors"
                >
                  Catálogo de Scooters
                </Link>
              </li>
              <li>
                <Link
                  href="/orcamento"
                  className="hover:text-slate-200 transition-colors"
                >
                  Solicitar Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Soluções */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-slate-200">
              Nossas Frentes
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-blue-300 shrink-0" />
                Projetos Fotovoltaicos Residenciais e Comerciais
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-300 shrink-0" />
                Venda e Assistência de Scooters Elétricas
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-slate-200">
              Atendimento
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-300 shrink-0 mt-0.5" />
                <span>Endereço Comercial - Sua Cidade / UF</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-300 shrink-0" />
                <span>(00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-300 shrink-0" />
                <span>contato@hentz.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
          <p>
            © 2026 Hentz Energia Solar & Mobilidade. Todos os direitos
            reservados.
          </p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}