import Image from 'next/image';
import './main-card.module.scss';
import { MainCardType } from './main-card.model';
import variables from './main-card.module.scss';

export const MainCard = ({ title, text, img }: MainCardType) => {
  return (
    <div className={variables.container}>
      <Image src={img} alt="image" width={178} height={145} />
      <span
        className={variables.container__title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <span
        dangerouslySetInnerHTML={{ __html: text }}
        className={variables.container__text}
      />
    </div>
  );
};
