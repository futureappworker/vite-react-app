import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return <div>{t('Home.title')}</div>;
}

export default Home;
