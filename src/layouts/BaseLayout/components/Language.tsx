import { useTranslation } from 'react-i18next';

function Language() {
  const { i18n } = useTranslation();
  const lans = [
    {
      key: 'en',
      text: 'English',
    },
    {
      key: 'zh-TW',
      text: 'Traditional Chinese',
    },
    {
      key: 'zh-CN',
      text: 'Simplified Chinese',
    },
  ];
  return (
    <div>
      <h3>Language</h3>
      <ul>
        {lans.map((lan) => (
          <li key={lan.text}>
            <button type="button" onClick={() => i18n.changeLanguage(lan.key)}>
              {lan.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Language;
