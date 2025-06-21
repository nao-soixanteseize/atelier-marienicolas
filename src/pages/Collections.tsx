import { useParams } from 'react-router-dom';
import '../App.css';
import {
  ashanti,
  collab_lelad,
  dakar,
  etna,
  jeu_d_anses,
  kpla,
  organic,
  others,
} from '../collections';
import { Layout } from '../components/Layout';
import Section from '../components/Section';

const Collections = () => {
  // const { device /* , windowSize */ } = useWindowSize();
  const { name } = useParams();

  // const paddingRow3 = device === 'mobile' ? 20 : 40;

  // const imageWidth = Math.floor(
  //   device === 'mobile'
  //     ? windowSize.width - paddingRow3 * 2
  //     : device === 'tablet'
  //     ? (windowSize.width - paddingRow3 * 3) / 2
  //     : device === 'desktop'
  //     ? (windowSize.width - paddingRow3 * 4) / 3
  //     : 100,
  // );

  const sections = [
    {
      title: 'Ashanti',
      slug: 'ashanti',
      products: ashanti,
    },
    {
      title: 'Etna',
      slug: 'etna',
      products: etna,
    },
    {
      title: 'K-pla',
      slug: 'k-pla',
      products: kpla,
    },
    {
      title: 'Jeu d’anses',
      slug: 'jeu-d-anses',
      products: jeu_d_anses,
    },
    {
      title: 'Organic',
      slug: 'organic',
      products: organic,
    },
    {
      title: 'Dakar',
      slug: 'dakar',
      products: dakar,
    },
    {
      title: 'Collaborations',
      slug: 'collaborations',
      products: collab_lelad,
    },
    {
      title: 'Others',
      slug: 'others',
      products: others,
    },
  ];

  return (
    <Layout>
      {/*       <Row
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          marginBottom: 60,
        }}
      >
        <Button onClick={handleDownload}>{`TÉLÉCHARGER\nLE CATALOGUE`}</Button>
      </Row> */}

      {sections.map((section, key) => {
        if (name === section.slug)
          return (
            <div key={key}>
              <Section section={section} />
            </div>
          );
        else return null;
      })}
    </Layout>
  );
};

export default Collections;
