import variables from './card-text.module.scss';

type cardTextType = {
  title?: string;
  text: string;
};

export const CardText = ({ text, title }: cardTextType) => {
  return (
    <>
      <section className={variables.container}>
        <article className={variables.container__main}>
          <p
            className={variables.container__card}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </article>
      </section>
    </>
  );
};
