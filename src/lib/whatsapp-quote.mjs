export const companyWhatsappNumber = "554998147336";

/**
 * @typedef {object} SolarQuoteMessage
 * @property {string} name
 * @property {string} whatsapp
 * @property {string} city
 * @property {string} roofType
 * @property {string} monthlyBill
 */

/**
 * @param {string} phoneNumber
 * @param {SolarQuoteMessage} quote
 */
export function createWhatsAppQuoteUrl(phoneNumber, quote) {
  const normalizedPhone = phoneNumber.replace(/\D/g, "");

  if (!normalizedPhone) {
    throw new Error("A company WhatsApp number must contain digits.");
  }

  const message = [
    "Olá! Gostaria de solicitar uma avaliação para energia solar.",
    "",
    `Nome: ${quote.name}`,
    `WhatsApp: ${quote.whatsapp}`,
    `Cidade: ${quote.city}`,
    `Tipo de telhado: ${quote.roofType}`,
    `Valor médio da conta de luz: R$ ${quote.monthlyBill}`,
  ].join("\n");

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
