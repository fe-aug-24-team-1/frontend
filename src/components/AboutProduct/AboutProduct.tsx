import React from 'react';
import styles from './AboutProduct.module.scss';
import { useTranslation } from 'react-i18next';

type Props = {
  description: { title: string; text: string[] }[];
  className?: string;
};

export const AboutProduct: React.FC<Props> = ({
  description,
  className,
  ...props
}) => {
  const { t } = useTranslation();
  const visibleDescription = description.length
    ? description
    : [
        {
          title: 'No description :(',
          text: [
            'Unfortunately, no description has been added to this product yet.',
          ],
        },
      ];

  return (
    <section
      className={`${styles.about} ${className}`}
      {...props}>
      <div>
        <h3 className={styles['about__title']}>
          {t('productDetailsCard.about')}
        </h3>
        <div className={styles['about__line']} />
      </div>

      <ul className={styles['about__list']}>
        {visibleDescription
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
