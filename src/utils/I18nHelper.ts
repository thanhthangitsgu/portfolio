import i18n from '../i18n.ts'

export function lang(key: string) {
  return i18n.global.t(key);
}
