import React from 'react';
import styles from './AboutProduct.module.scss';
import { useTranslation } from 'react-i18next';

type Props = {
  description: { title: string; text: string[] }[];
};

export const AboutProduct: React.FC<Props> = ({ description }) => {
  const { t } = useTranslation();

  return (
    <section className={styles['about']}>
      <div>
        <h3 className={styles['about__title']}>
          {t('productDetailsCard.about')}
        </h3>
        <div className={styles['about__line']} />
      </div>

      <ul className={styles['about__list']}>
        {description
          .filter((paragraph) => paragraph.text && paragraph.title)
          .map((paragraph, index) => (
            <li key={index}>
              <h4 className={styles['about__subtitle']}>{paragraph.title}</h4>
              <p className={styles['about__text']}>
                {paragraph.text.join('\n\n')}
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
};
