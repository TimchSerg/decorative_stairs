export const REGEX_E164 = /(^[7|8]{0,1}\d{10}$)|(^\+7{1}\d{10}$)/;

/**
 * verification of Phone Validation
 *
 * @param {string} phone format E164
 * @returns {boolean} return true or false
 */
export function isE164(phone) {
  if (typeof phone != "string") return false;

  return REGEX_E164.test(phone);
}

export const phoneValidator = (value) => {
  return isE164(value) ? undefined : "Номер телефона указан не верно";
}
  
