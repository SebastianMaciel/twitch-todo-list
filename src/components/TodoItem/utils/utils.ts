import { format, formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "EEEE d 'de' MMMM", { locale: es }).replace(/(^|\s)\S/g, (l) =>
    l.toUpperCase()
  );
};

export const formatRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  return `Creado ${formatDistanceToNow(date, { addSuffix: true, locale: es })}`;
};
