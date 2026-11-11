import assert from "node:assert/strict";
import { test } from "node:test";
import {
  companyWhatsappNumber,
  createWhatsAppQuoteUrl,
} from "../src/lib/whatsapp-quote.mjs";

test("builds a WhatsApp link with the configured contact and quote details", () => {
  const url = new URL(
    createWhatsAppQuoteUrl(companyWhatsappNumber, {
      name: "Ana Silva",
      whatsapp: "(49) 99999-1234",
      city: "Curitiba",
      roofType: "Telha cerâmica",
      monthlyBill: "350,00",
    }),
  );

  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/554998147336");
  assert.match(url.searchParams.get("text"), /Nome: Ana Silva/);
  assert.match(url.searchParams.get("text"), /Cidade: Curitiba/);
  assert.match(url.searchParams.get("text"), /Tipo de telhado: Telha cerâmica/);
  assert.match(
    url.searchParams.get("text"),
    /Valor médio da conta de luz: R\$ 350,00/,
  );
});

test("rejects a WhatsApp contact without a phone number", () => {
  assert.throws(
    () =>
      createWhatsAppQuoteUrl("", {
        name: "Ana Silva",
        whatsapp: "49999991234",
        city: "Curitiba",
        roofType: "Telha cerâmica",
        monthlyBill: "350,00",
      }),
    /WhatsApp number must contain digits/,
  );
});
