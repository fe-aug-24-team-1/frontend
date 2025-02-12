import style from './RightsPage.module.scss';
import { useTranslation } from 'react-i18next';

export const RightsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={style.RightsPage}>
      <h1 className={style.RightsPage__title}>{t('rightsPage.title')}</h1>
      <div className={style.RightsPage__content}>
        <section className={style.RightsPage__section}>
          <h2 className={style.RightsPage__sectionTitle}>
            {t('rightsPage.copyright.title')}
          </h2>
          <p className={style.RightsPage__text}>
            {t('rightsPage.copyright.text')}
          </p>
        </section>

        <section className={style.RightsPage__section}>
          <h2 className={style.RightsPage__sectionTitle}>
            {t('rightsPage.trademarks.title')}
          </h2>
          <p className={style.RightsPage__text}>
            {t('rightsPage.trademarks.text')}
          </p>
        </section>

        <section className={style.RightsPage__section}>
          <h2 className={style.RightsPage__sectionTitle}>
            {t('rightsPage.useOfContent.title')}
          </h2>
          <p className={style.RightsPage__text}>
            {t('rightsPage.useOfContent.text')}
          </p>
        </section>

        <section className={style.RightsPage__section}>
          <h2 className={style.RightsPage__sectionTitle}>
            {t('rightsPage.limitationOfLiability.title')}
          </h2>
          <p className={style.RightsPage__text}>
            {t('rightsPage.limitationOfLiability.text')}
          </p>
        </section>

        <section className={style.RightsPage__section}>
          <h2 className={style.RightsPage__sectionTitle}>
            {t('rightsPage.contentUsePolicy.title')}
          </h2>
          <p className={style.RightsPage__text}>
            {t('rightsPage.contentUsePolicy.text')}
          </p>
        </section>

        <section className={style.RightsPage__section}>
          <h2 className={style.RightsPage__sectionTitle}>
            {t('rightsPage.changesInPolicy.title')}
          </h2>
          <p className={style.RightsPage__text}>
            {t('rightsPage.changesInPolicy.text')}
          </p>
        </section>
      </div>
    </div>
  );
};
