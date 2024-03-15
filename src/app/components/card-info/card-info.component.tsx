import { CardInfoType } from './card-info.model';
import Image from 'next/image';
import variables from './card-info.module.scss';
import Link from 'next/link';

export const CardInfo = ({ link, postLogo, arrowLogo, text }: CardInfoType) => {
  return (
    <Link className={variables.card__container} href={link}>
      <div className={variables.layout}>
        <Image src={postLogo} alt="logo" width={80} height={80} />
        <Image
          src={arrowLogo}
          alt="logo"
          width={295}
          height={115}
          className={variables.layout__image}
        />
        <p
          className={variables.layout__text}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </Link>
  );
};
