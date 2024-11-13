import { CategoryShop } from '../../components/CategoryShop/CategoryShop';
import { ProductSlider } from '../../modules/ProductSlider/ProductSlider';
import { Slider } from '@/modules/Slider';
import style from './HomePage.module.scss';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className={style.homePage}>
      <div className={style.header}>
        <h1 style={{ visibility: 'hidden' }}>Product Catalog</h1>
        <h2 className={style.title}>{t('homePage.title')}</h2>
        <Slider />
      </div>

      <div className={style.brandNewModels}>
        <ProductSlider
          title={t('homePage.newModel')}
          discount={false}
          random={false}
        />
      </div>

      <div className={style.categoryShop}>
        <CategoryShop />
      </div>

      <div className={style.hotPrices}>
        <ProductSlider
          title={t('homePage.hotPrices')}
          discount={true}
          random={false}
        />
      </div>
    </div>
  );
};
