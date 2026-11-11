"use client";

import Link from "next/link";
import { Sun, Zap, ShoppingCart, Menu, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Energia Solar", href: "/energia-solar" },
  { name: "Scooters Elétricas", href: "/scooters" },
  { name: "Orçamento", href: "/orcamento" },
];

export function Header() {
  // Valor temporário até conectarmos o Zustand na Etapa 5
  const cartItemsCount = 0;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black text-slate-200 backdrop-blur supports-[backdrop-filter]:bg-black/95">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logotipo Hentz */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-sm">
            <Sun className="h-6 w-6 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-200 leading-none">
              HENTZ
            </span>
            <span className="text-[11px] font-medium text-slate-200 flex items-center gap-0.5 mt-0.5">
              <Zap className="h-3 w-3 fill-white/75" /> Solar & Mobilidade
            </span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-slate-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Ações (Orçamento + Carrinho + Menu Mobile) */}
        <div className="flex items-center gap-3">
          <Link href="/orcamento" className="hidden sm:block">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold gap-2 cursor-pointer">
              <PhoneCall className="h-4 w-4" />
              Simular Energia Solar
            </Button>
          </Link>

          {/* Botão do Carrinho */}
          <Link href="/scooters">
            <Button
              variant="outline"
              size="icon"
              className="relative border-white/30 bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              aria-label="Carrinho de compras"
            >
              <ShoppingCart className="h-5 w-5 text-white" />
              <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white p-0 text-[11px] text-primary">
                {cartItemsCount}
              </Badge>
            </Button>
          </Link>

          {/* Menu Mobile (Hambúrguer) */}
          <Sheet>
            <SheetTrigger
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-white hover:bg-white/10 md:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-6">
              <SheetHeader className="text-left border-b border-slate-200 pb-4">
                <SheetTitle className="flex items-center gap-2 font-bold text-slate-950">
                  <Sun className="h-5 w-5 text-primary" />
                  HENTZ
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-slate-600 hover:text-primary py-1"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/orcamento" className="mt-4">
                  <Button className="w-full bg-primary text-slate-200 hover:bg-primary/90 font-semibold">
                    Simular Energia Solar
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}