"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  createWhatsAppQuoteUrl,
  companyWhatsappNumber,
} from "@/lib/whatsapp-quote.mjs";

const roofTypes = {
  ceramic: "Telha cerâmica",
  metal: "Telha metálica",
  fiberCement: "Telha de fibrocimento",
  slab: "Laje",
  other: "Outro",
} as const;

const solarQuoteSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe seu WhatsApp com DDD.")
    .max(25, "Confira o número informado.")
    .refine(
      (value) => value.replace(/\D/g, "").length >= 10,
      "Informe seu WhatsApp com DDD.",
    ),
  city: z.string().trim().min(2, "Informe sua cidade."),
  roofType: z.enum(["ceramic", "metal", "fiberCement", "slab", "other"], {
    error: "Selecione o tipo de telhado.",
  }),
  monthlyBill: z
    .string()
    .trim()
    .min(1, "Informe o valor médio da conta.")
    .refine(
      (value) => /^\d+(?:[.,]\d{1,2})?$/.test(value),
      "Informe um valor válido, por exemplo 350,00.",
    )
    .refine(
      (value) => Number(value.replace(",", ".")) > 0,
      "O valor deve ser maior que zero.",
    ),
});

type SolarQuoteFormValues = z.infer<typeof solarQuoteSchema>;

const inputClassName =
  "mt-2 h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-primary focus:ring-4 focus:ring-primary/10 aria-invalid:border-red-500 aria-invalid:focus:ring-red-100";

function FieldError({
  id,
  message,
}: {
  id: string;
  message?: string;
}) {
  if (!message) return null;

  return (
    <p id={id} className="mt-1.5 text-sm text-red-700" role="alert">
      {message}
    </p>
  );
}

export function SolarQuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SolarQuoteFormValues>({
    resolver: zodResolver(solarQuoteSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      city: "",
      monthlyBill: "",
    },
  });

  const onSubmit = (values: SolarQuoteFormValues) => {
    const message = {
      name: values.name,
      whatsapp: values.whatsapp,
      city: values.city,
      roofType: roofTypes[values.roofType],
      monthlyBill: values.monthlyBill.replace(".", ","),
    };

    window.location.assign(
      createWhatsAppQuoteUrl(companyWhatsappNumber, message),
    );
  };

  return (
    <form className="space-y-5" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="solar-quote-name"
          className="text-sm font-medium text-slate-800"
        >
          Nome completo
        </label>
        <input
          id="solar-quote-name"
          autoComplete="name"
          className={inputClassName}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "solar-quote-name-error" : undefined}
          placeholder="Como podemos chamar você?"
          {...register("name")}
        />
        {errors.name && (
          <FieldError
            id="solar-quote-name-error"
            message={errors.name.message}
          />
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="solar-quote-whatsapp"
            className="text-sm font-medium text-slate-800"
          >
            WhatsApp
          </label>
          <input
            id="solar-quote-whatsapp"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={inputClassName}
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={
              errors.whatsapp ? "solar-quote-whatsapp-error" : undefined
            }
            placeholder="DDD + número"
            {...register("whatsapp")}
          />
          {errors.whatsapp && (
            <FieldError
              id="solar-quote-whatsapp-error"
              message={errors.whatsapp.message}
            />
          )}
        </div>

        <div>
          <label
            htmlFor="solar-quote-city"
            className="text-sm font-medium text-slate-800"
          >
            Cidade
          </label>
          <input
            id="solar-quote-city"
            autoComplete="address-level2"
            className={inputClassName}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "solar-quote-city-error" : undefined}
            placeholder="Sua cidade"
            {...register("city")}
          />
          {errors.city && (
            <FieldError
              id="solar-quote-city-error"
              message={errors.city.message}
            />
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="solar-quote-roof"
            className="text-sm font-medium text-slate-800"
          >
            Tipo de telhado
          </label>
          <select
            id="solar-quote-roof"
            className={inputClassName}
            aria-invalid={Boolean(errors.roofType)}
            aria-describedby={
              errors.roofType ? "solar-quote-roof-error" : undefined
            }
            {...register("roofType")}
          >
            <option value="">Selecione uma opção</option>
            {Object.entries(roofTypes).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.roofType && (
            <FieldError
              id="solar-quote-roof-error"
              message={errors.roofType.message}
            />
          )}
        </div>

        <div>
          <label
            htmlFor="solar-quote-bill"
            className="text-sm font-medium text-slate-800"
          >
            Valor médio da conta de luz
          </label>
          <div className="relative mt-2">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-slate-500">
              R$
            </span>
            <input
              id="solar-quote-bill"
              type="text"
              inputMode="decimal"
              className={`${inputClassName} mt-0 pl-10`}
              aria-invalid={Boolean(errors.monthlyBill)}
              aria-describedby={
                errors.monthlyBill ? "solar-quote-bill-error" : undefined
              }
              placeholder="Ex.: 350,00"
              {...register("monthlyBill")}
            />
          </div>
          {errors.monthlyBill && (
            <FieldError
              id="solar-quote-bill-error"
              message={errors.monthlyBill.message}
            />
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full gap-2 bg-primary text-base font-semibold text-slate-200 hover:bg-primary/90"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Continuar pelo WhatsApp
        <ArrowRight className="ml-auto h-4 w-4" aria-hidden="true" />
      </Button>

      <p className="text-center text-xs leading-5 text-slate-600">
        Ao continuar, o WhatsApp será aberto com os dados preenchidos para você
        revisar e enviar.
      </p>
    </form>
  );
}
