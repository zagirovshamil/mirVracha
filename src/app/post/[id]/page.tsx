import { dataForSecondCard } from '@/app/accets/data/data';
import Image from 'next/image';
import variables from './page.module.scss';

type PropsType = {
  params: {
    id: string;
  };
};

export default function Post({ params: { id } }: PropsType) {
  const post = dataForSecondCard.find(post => post.id === id);

  return (
    <>
      <div key={id} className={variables.container}>
        <span
          className={variables.container__text}
          dangerouslySetInnerHTML={{ __html: post?.text ?? '' }}
        />
        <span
          className={variables.container__title}
          dangerouslySetInnerHTML={{ __html: post?.title ?? '' }}
        />
        <div className={variables.images}>
          <Image
            src={post?.img ?? ''}
            alt="картинка"
            className={variables.container__image}
          />
        </div>
      </div>
    </>
  );
}
