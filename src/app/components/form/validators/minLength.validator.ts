export const minLengthValidator = (min: number): Function => (value: string): string | void => {
  if(!value) return undefined;
  return value.length > min ? undefined : `Минимальное кол-во символов ${min}`;
}
