export const required = (val) => !!val;
export const minLength = (num) => (val) => val.length >= num;
export const email = (val) => /.+@.+\..+/.test(val);
export const phone = (val) => /^\+?3?8?(0\d{9})$/.test(val);
