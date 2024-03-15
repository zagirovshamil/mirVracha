import { mainCardData, cardTextData } from '@/app/accets/data/data';
import { MainCard } from '../main-card';
import { CardText } from '../card-text';
import variables from './main-container.module.scss';

export const MainContainer = () => {
  return (
    <div className={variables.container}>
      <h1 className={variables.container__header}>
        Терапия ХОБЛ: что в фокусе?
      </h1>
      <div className={variables.container__main}>
        Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
      </div>
      <span className={variables.container__text}>
        Приоритетные направления фармакотерапевтической стратегии при
        ХОБЛ&sup1;:
      </span>
      <div className={variables.container__mainCard}>
        {mainCardData.map(post => (
          <MainCard img={post.img} title={post.title} text={post.text} />
        ))}
      </div>
      <div className={variables.container__textCard}>
        {cardTextData.map(post => (
          <CardText text={post.text} />
        ))}
      </div>
    </div>
  );
};
