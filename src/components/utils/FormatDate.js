import { format } from 'date-fns'

export const FormatDate = date => {
    return format(Date.parse(date), 'dd MMMM yyyy, HH:mm');
}