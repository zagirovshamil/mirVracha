import { CardInfo } from './components';
import { data } from './accets/data/data';
import { MainContainer } from './components/main-container/main-container.component';

export default function Mainpage() {
  return (
    <>
      <main>
        {data.map(post => (
          <CardInfo
            text={post.text}
            postLogo={post.postLogo}
            arrowLogo={post.arrowLogo}
            link={post.link}
          />
        ))}
        <MainContainer />
      </main>
    </>
  );
}
