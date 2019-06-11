export default function currencyFilter(value, currency = "UAH" ) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency', 
    currency,
    maximumFractionDigits: 4
  }).format(value);
}