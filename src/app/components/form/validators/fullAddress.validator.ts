export const fullAddressValidator = (value: any): string | undefined => {
  const result = !!value?.data?.house;
  return result ? undefined : "Адрес введен не полностью";
}