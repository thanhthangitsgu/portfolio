import i18n from '../i18n.ts'

export function lang(key, params) {
  return i18n.global.t(key, params);
}
