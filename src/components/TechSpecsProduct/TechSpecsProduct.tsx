import React from 'react';
import styles from './TechSpecsProduct.module.scss';
import { TechSpecsListItem } from '../TechSpecsListItem';
import { useTranslation } from 'react-i18next';

type Props = {
  screen?: string;
  resolution?: string;
  processor?: string;
  ram?: string;
  capacity?: string;
  camera?: string;
  zoom?: string;
  cell?: string[];
  className?: string;
};

export const TechSpecsProduct: React.FC<Props> = ({
  screen,
  resolution,
  processor,
  ram,
  capacity,
  camera,
  zoom,
  cell,
  className,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <section
      className={`${styles['tech-specs']} ${className}`}
      {...props}>
      <div>
        <h2 className={styles['tech-specs__title']}>
          {t('productDetailsCard.info.title')}
        </h2>
        <div className={styles['tech-specs__line']} />
      </div>

      <ul className={styles['tech-specs__list']}>
        <TechSpecsListItem
          name={t('productDetailsCard.info.screen')}
          value={screen?.replace("'", '”') || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.resolution')}
          value={resolution || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.processor')}
          value={processor || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.ram')}
          value={ram || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.memory')}
          value={capacity || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.camera')}
          value={camera || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.zoom')}
          value={zoom || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.cell')}
          value={cell || ''}
        />
      </ul>
    </section>
  );
};
