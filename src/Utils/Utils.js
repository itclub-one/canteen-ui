export const LIMIT_TRX = 150_000;

export function formatPrice(price) {
  const rupiah = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  return `Rp${rupiah}`;
}

export function convertDate(date) {
  const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const parseDate = Date.parse(date);
  const newDate = new Date(parseDate);
  const mm = month[newDate.getMonth()];

  return `${newDate.getDate()} ${mm} ${newDate.getFullYear()}`;
}
