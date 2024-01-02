import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEnUS from './locales/en/translation.json';
import translationZhCN from './locales/zh-CN/translation.json';
import translationZhTW from './locales/zh-TW/translation.json';

import LanguageCode from './types';

import { fallbackLng } from './config';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: !import.meta.env.PROD,
    fallbackLng,
    lng: localStorage.getItem('i18nextLng') || fallbackLng,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      [LanguageCode.EN]: {
        translation: translationEnUS,
      },
      [LanguageCode.ZH_CN]: {
        translation: translationZhCN,
      },
      [LanguageCode.ZH_TW]: {
        translation: translationZhTW,
      },
    },
  });

export default i18n;
