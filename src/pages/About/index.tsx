import { useTranslation } from 'react-i18next';

import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import { login, logout } from '@/store/reducers/auth';

import styles from './styles.module.scss';

function About() {
  const { t } = useTranslation();
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styles.title}>{t('About.title')}</div>
      <div>
        is login: &nbsp;
        {auth.isLogin ? 'Yes' : 'No'}
      </div>
      <div>
        name: &nbsp;
        {auth.name}
      </div>
      <div>
        <button type="button" onClick={() => dispatch(login({ name: 'Mary' }))}>
          login
        </button>
        <button type="button" onClick={() => dispatch(logout())}>
          logout
        </button>
      </div>
    </div>
  );
}

export default About;
