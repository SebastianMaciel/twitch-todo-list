import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'MMMM, do').replace(/(^|\s)\S/g, (l) => l.toUpperCase());
};

export const formatRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  return `Created ${formatDistanceToNow(date, { addSuffix: true })}`;
};
