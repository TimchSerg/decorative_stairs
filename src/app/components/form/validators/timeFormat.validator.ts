import { isTimeFormat } from "utils/timeFormat.util";

export const timeFormatValidator = (value: string): string | void => {
  const parser = value.split(' - ');
  return isTimeFormat(parser[0]) && isTimeFormat(parser[1]) ? undefined : "Не верно указан формат времени (чч:мм)";
}
  
