import Image18 from './img/18.jpg';
import Image19 from './img/19.jpg';
import Image19_over from './img/19_over.png';
import Image20 from './img/20.jpg';
import Image20_over from './img/20_over.png';
import Image21 from './img/21.jpg';
import Image21_over from './img/21_over.png';
// import Image23 from './img/23.jpg';
import Image37 from './img/37.jpg';
import Image38 from './img/38.jpg';
import Image39 from './img/39.jpg';
import Image39_over from './img/39_over.png';
import Image40 from './img/40.jpg';
import Image41 from './img/41.jpg';
import Image42 from './img/42.jpg';
import Image43 from './img/43.jpg';
import Image44 from './img/44.jpg';
import Image44_over from './img/44_over.png';
import Image46 from './img/46.jpg';
import Image46_over from './img/46_over.png';
import Image48 from './img/48.jpg';
import Image50 from './img/50.jpg';
import Image52 from './img/52.jpg';
import Image53 from './img/53.jpg';
import Image57 from './img/57.jpg';
import Image58 from './img/58.jpg';
import Image65 from './img/65.jpg';
import Image67 from './img/67.jpg';
import Image68 from './img/68.jpg';
import Image71 from './img/71.jpg';
import Image84 from './img/84.jpg';
import Image85 from './img/85.jpg';
import Image86 from './img/86.jpg';
import Image87 from './img/87.jpg';
import Image88 from './img/88.jpg';
import Image89 from './img/89.jpg';
import Image91 from './img/91.jpg';
import Image92 from './img/92.jpg';
import Image94 from './img/94.jpg';
import Image95 from './img/95.jpg';

export enum ProductTypes {
  ART_DE_LA_TABLE = 'Art de la table',
  LUMINAIRES = 'Luminaires',
  PETIT_MOBILER = 'Petit mobilier',
  BOUGIES = 'Bougies',
  DECORATION = 'Décoration',
}

export const ashanti = [
  {
    id: 1,
    image: Image46,
    name: 'Bougeoir Ashanti N°1',
    ratio: 1.4,
    description: 'Grès blanc chamotté émaillé',
    size: 'H29xl25cm',
    image_over: Image46_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 2,
    image: Image87,
    name: 'Bougeoir Ashanti N°2',
    ratio: 1.4,
    description: 'Grès blanc chamotté brut',
    size: 'H30xl25cm',
    image_over: Image46_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 3,
    image: Image91,
    name: 'Bougeoir Ashanti N°3',
    ratio: 1.4,
    description: 'Grès blanc chamotté émaillé',
    size: 'H35xl25cm',
    image_over: Image46_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 4,
    image: Image88,
    name: 'Bougeoir Ashanti N°4',
    ratio: 1.4,
    description: 'Grès blanc émaillé',
    size: 'H28xl25cm',
    image_over: Image46_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 5,
    image: Image89,
    name: 'Bougeoir Ashanti N°5',
    ratio: 1.4,
    description: 'Grès blanc émaillé',
    size: 'H38xl27cm',
    image_over: Image46_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 6,
    image: Image92,
    name: 'Bougeoir Ashanti N°6',
    ratio: 1.4,
    description: 'Grès blanc émaillé',
    size: 'H35xl27cm',
    image_over: Image46_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
];

export const etna = [
  {
    id: 7,
    image: Image84,
    name: 'Coupe Venise',
    ratio: 1.1,
    description: 'Grès blanc chamotté émaillé',
    size: 'H20xD25cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 8,
    image: Image48,
    name: 'Etna',
    ratio: 1.25,
    description: 'Grès noir brut',
    size: 'H24xD24cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
];

export const kpla = [
  {
    id: 9,
    image: Image20,
    additional_images: [Image95, Image94],
    name: 'Chicago',
    ratio: 1.5,
    description: 'Grès noir chamotté brut',
    size: 'H63xl30cm',
    image_over: Image20_over,
    sorting: 1,
    type: [ProductTypes.LUMINAIRES],
  },
  {
    id: 10,
    image: Image68,
    name: 'Chicago N°2',
    ratio: 1.5,
    description: 'Grès noir chamotté brut',
    size: 'H53xl25cm',
    image_over: Image20_over,
    sorting: 1,
    type: [ProductTypes.LUMINAIRES],
  },
];

export const jeu_d_anses = [
  {
    id: 11,
    image: Image53,
    name: 'Vase jeu d’anses en colonnes',
    ratio: 1.5,
    description: 'Grès noir brut et émaillé',
    size: 'H15xD22cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 12,
    image: Image71,
    name: 'Vase Polpo',
    ratio: 1,
    description: 'Grès blanc émaillé',
    size: 'H12xD19cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 13,
    image: Image52,
    name: 'Vase jeu d’anses en arceaux',
    ratio: 1,
    description: 'Grès noir brut et émaillé',
    size: 'H15xD22cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 14,
    image: Image50,
    name: 'Vase jeu d’anses en arceaux',
    ratio: 1,
    description: 'Grès noir brut et émaillé',
    size: 'H15xD22cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 15,
    image: Image40,
    name: 'Yassa',
    ratio: 1.5,
    description: 'Grès noir chamotté brut et émaillé',
    size: 'H25xl15cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
];

export const organic = [
  {
    id: 16,
    image: Image44,
    name: 'Ronce',
    ratio: 1,
    description: 'Grès blanc chamotté émaillé',
    size: 'H22xL34cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.ART_DE_LA_TABLE],
  },
  {
    id: 17,
    image: Image37,
    name: 'Fuji',
    ratio: 1,
    description: 'Grès noir chamotté brut',
    size: 'H13xl34cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.ART_DE_LA_TABLE, ProductTypes.DECORATION],
  },
];

export const others = [
  {
    id: 18,
    image: Image19,
    name: 'Cocody',
    ratio: 1.5,
    description: 'Grès blanc chamotté brut',
    size: 'H75xl30cm',
    image_over: Image19_over,
    sorting: 1,
    type: [ProductTypes.LUMINAIRES],
  },
  {
    id: 19,
    image: Image38,
    name: 'Delhi',
    ratio: 1,
    description: 'Grès noir chamotté',
    size: 'H11xD15cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.BOUGIES],
  },
  {
    id: 20,
    image: Image39,
    name: 'Bassam',
    ratio: 1,
    description: 'Grès noir chamotté émaillé',
    size: 'H11xD16cm',
    image_over: Image39_over,
    sorting: 1,
    type: [ProductTypes.BOUGIES],
  },
  {
    id: 21,
    image: Image58,
    name: 'Coupe Lipizan',
    ratio: 1.5,
    description: 'Grès blanc lisse émaillé',
    size: 'H20xl20cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.ART_DE_LA_TABLE, ProductTypes.DECORATION],
  },
  {
    id: 22,
    image: Image86,
    name: 'Coupe Lipizan N°2',
    ratio: 1,
    description: 'Grès blanc lisse émaillé',
    size: 'H20xl20cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.ART_DE_LA_TABLE, ProductTypes.DECORATION],
  },

  {
    id: 23,
    image: Image65,
    name: 'Guéridon Éclipse',
    ratio: 1,
    description: 'Grès blanc chamotté brut',
    size: 'H33xD43cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.PETIT_MOBILER],
  },
  {
    id: 24,
    image: Image21,
    name: 'Coper',
    ratio: 1,
    description: 'Grès noir brut',
    size: 'H52xl45cm',
    image_over: Image21_over,
    sorting: 1,
    type: [ProductTypes.LUMINAIRES],
  },
  {
    id: 25,
    image: Image42,
    name: 'Sirius',
    ratio: 1,
    description: 'Grès blanc chamotté brut',
    size: 'L24xl17cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.ART_DE_LA_TABLE, ProductTypes.DECORATION],
  },
  {
    id: 26,
    image: Image43,
    name: 'Orion',
    ratio: 1,
    description: 'Grès blanc chamotté brut',
    size: 'L26xl17cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.ART_DE_LA_TABLE, ProductTypes.DECORATION],
  },
  {
    id: 27,
    image: Image85,
    name: 'Bougeoir Vésuve',
    ratio: 1.4,
    description: 'Grès noir brut, cire végétale',
    size: 'D13xH24cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.BOUGIES, ProductTypes.DECORATION],
  },
  {
    id: 28,
    image: Image57,
    name: 'Seau Lipizan',
    ratio: 1,
    description: 'Grès blanc lisse émaillé',
    size: 'H13xD14cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.ART_DE_LA_TABLE, ProductTypes.DECORATION],
  },
  {
    id: 29,
    image: Image67,
    name: 'Vase Wavy',
    ratio: 1,
    description: 'Grès blanc émaillé',
    size: 'H22xl21cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.DECORATION],
  },
  {
    id: 30,
    image: Image18,
    name: 'Assinie',
    ratio: 1.5,
    description: 'Grès blanc chamotté',
    size: 'H78xD30cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.LUMINAIRES],
  },
  {
    id: 31,
    image: Image41,
    name: 'Vénus',
    ratio: 1,
    description: 'Grès blanc chamotté brut',
    size: 'H13xD25cm',
    image_over: Image44_over,
    sorting: 1,
    type: [ProductTypes.ART_DE_LA_TABLE, ProductTypes.DECORATION],
  },
];

export const allProducts = [
  ...ashanti,
  ...etna,
  ...kpla,
  ...jeu_d_anses,
  ...organic,
  ...others,
];
