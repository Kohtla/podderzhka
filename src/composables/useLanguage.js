import { ref, computed, onMounted } from 'vue';
import ru from '@/translations/ru.json';
import en from '@/translations/en.json';

const translations = {
  ru,
  en,
};

export function useLanguage() {
  const currentLanguage = ref('en');

  const setLanguageFromBrowser = () => {
    const browserLanguage = navigator.language.slice(0, 2);
    if (translations[browserLanguage]) {
      currentLanguage.value = browserLanguage;
    }
  };

  onMounted(() => {
    setLanguageFromBrowser();
  });

  const currentTranslations = computed(() => translations[currentLanguage.value]);

  return {
    currentLanguage,
    currentTranslations,
  };
}
