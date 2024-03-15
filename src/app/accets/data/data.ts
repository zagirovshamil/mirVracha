import { CardInfoType, MainCardType, SecondCardType } from '@/app/components';
import diagrammImage from '../img/Image.svg';
import tripleImage from '../img/Image 2.svg';
import postlogo from '../img/Group.svg';
import postlogo2 from '../img/Group 2.svg';
import arrowImage from '../img/Arrow.svg';
import arrowImage2 from '../img/Arrow 2.svg';
import firstCardImage from '../img/Group 7.svg';
import secondCardImage from '../img/Group 8.svg';
import thirdCardImage from '../img/Group 9.svg';

export const data: CardInfoType[] = [
  {
    postLogo: postlogo,
    text: 'В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание женщин (66%), а в возрасте 60-64 лет количество женщин и мужчин. Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более высокий процент площади стенок, но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.',
    arrowLogo: arrowImage,
    link: '/post/1',
  },
  {
    postLogo: postlogo2,
    text: 'Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов&sup1;. В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов&sup2;. Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.',
    link: '/post/2',
    arrowLogo: arrowImage2,
  },
];

export const dataForSecondCard: SecondCardType[] = [
  {
    id: '1',
    text: `В десятилетнем исследовании <strong>«Генетическая эпидемиология ХОБЛ» (COPDGene)</strong> среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено <strong>преобладание женщин (66%)</strong>, а в возрасте 60-64 лет количество женщин и мужчин.<br> Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более<strong> высокий процент площади стенок,</strong> но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.`,
    img: diagrammImage,
  },
  {
    id: '2',
    text: '<strong>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов&sup1;.</strong><br> В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов&sup2;.<br> Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.',
    title: 'Пятилетняя выживаемость пациентов',
    img: tripleImage,
  },
];

export const mainCardData: MainCardType[] = [
  {
    img: firstCardImage,
    title: 'Ингаляционный <strong>антихолинергик</strong>',
    text: 'Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов&sup1;',
  },
  {
    img: secondCardImage,
    title: 'Ингаляционный <strong> β2-агонист </strong>',
    text: 'Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции',
  },
  {
    img: thirdCardImage,
    title: 'Ингаляционный<strong> глюкокортикостероид </strong>(ИГКС)',
    text: 'Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей',
  },
];

export const cardTextData = [
  {
    title: '',
    text: 'Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;<br> Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга&sup1;.',
  },
  {
    title: '',
    text: 'Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА;<br> Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)&sup1;.',
  },
];
