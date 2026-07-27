import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first in ui) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function altPath(pathname: string): string {
  if (pathname.startsWith('/en/') || pathname === '/en') {
    const stripped = pathname.replace(/^\/en/, '');
    return stripped === '' ? '/' : stripped;
  }
  return pathname === '/' ? '/en/' : `/en${pathname}`;
}
