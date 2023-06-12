export const requiredValidator = (value) => {
  return value ? undefined : "Обязательно для заполнения";
}
