import 'dayjs/locale/ru';

import dayjs from 'dayjs';
const locale = 'ru' // insert required locale
dayjs.locale(locale);

// TODO: tests

interface formatDateParams {
    date: string;
    format: string;
}

export const formatDate = ({ date, format }: formatDateParams): string | undefined => {
    if (!date || !format || !dayjs(date).isValid()) return;

    return dayjs(new Date(date)).format(format);
};
