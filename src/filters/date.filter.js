export default function dateFilter(value, format = 'date') {
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
  };

  if (format.includes('time')) {
    options.hour = 'numeric';
    options.minute = 'numeric';
    options.second = 'numeric';
    options.hour12 = false;
  }

  return new Intl.DateTimeFormat('ru-RU', options).format(value);
}
