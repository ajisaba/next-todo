import { format } from "date-fns";

const formatFmt = (date: Date, fmt = "yyyy-MM-dd HH:mm") => {
  return format(date, fmt);
}

export default {
  format: formatFmt,
}
