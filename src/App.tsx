import styled from 'styled-components';
import './App.css';
import { BrandImage } from './BrandImage';
import { BrandImageText } from './BrandImageText';
import Image1 from './img/1.jpg';
import Image12 from './img/12.jpg';
import Image13 from './img/13.jpg';
import Image17 from './img/17.jpg';
import Image18 from './img/18.jpg';
import Image19 from './img/19.jpg';
import Image20 from './img/20.jpg';
import Image21 from './img/21.jpg';
import Image22 from './img/22.jpg';
import Image23 from './img/23.jpg';
import Image25 from './img/25.jpg';
import Image26 from './img/26.jpg';
import Image37 from './img/37.jpg';
import Image38 from './img/38.jpg';
import Image39 from './img/39.jpg';
import Image40 from './img/40.jpg';
import Image41 from './img/41.jpg';
import Image42 from './img/42.jpg';
import Image43 from './img/43.jpg';
import Image44 from './img/44.jpg';
import Image45 from './img/45.jpg';
import Image46 from './img/46.jpg';
import Image48 from './img/48.jpg';
import Image5 from './img/5.jpg';
import Image50 from './img/50.jpg';
import Image52 from './img/52.jpg';
import Image53 from './img/53.jpg';
import Image55 from './img/55.jpg';
import Image57 from './img/57.jpg';
import Image58 from './img/58.jpg';
import MountainLineImage from './img/MountainLine.png';
import PathLineImage from './img/PathLine.png';
import PortraitImage from './img/Portrait1.png';
import { Layout } from './Layout';

const App = () => {
  const headerHeight = 190;

  const paddingRow1 = 0;
  const paddingRow2 = 200;
  const paddingRow3 = 40;

  const array1 = [
    {
      image: Image1,
      name: 'Image1',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image19,
      name: 'Image19',
      height: '50vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image5,
      name: 'Image5',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image12,
      name: 'Image12',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image17,
      name: 'Image17',
      height: '25vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image21,
      name: 'Image21',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image26,
      name: 'Image26',
      height: '25vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image37,
      name: 'Image37',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image41,
      name: 'Image41',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image45,
      name: 'Image45',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image50,
      name: 'Image50',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
  ];

  const array2 = [
    {
      image: Image13,
      name: 'Image13',
      height: '25vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image20,
      name: 'Image20',
      height: '50vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },

    {
      image: Image22,
      name: 'Image22',
      height: '25vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image23,
      name: 'Image23',
      height: '25vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image38,
      name: 'Image38',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image42,
      name: 'Image42',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image46,
      name: 'Image46',
      height: '40vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },

    {
      image: Image53,
      name: 'Image53',
      height: '40vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image52,
      name: 'Image52',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image53,
      name: 'Image53',
      height: '40vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
  ];

  const array3 = [
    {
      image: Image18,
      name: 'Image18',
      height: '50vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image25,
      name: 'Image25',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image39,
      name: 'Image39',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image40,
      name: 'Image40',
      height: '40vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image43,
      name: 'Image43',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image44,
      name: 'Image44',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image48,
      name: 'Image48',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image55,
      name: 'Image55',
      height: '40vw',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image57,
      name: 'Image57',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
    {
      image: Image58,
      name: 'Image58',
      height: '100%',
      description: 'Lorem ipsum',
      size: '20x20cm',
    },
  ];

  return (
    <Layout>
      <Row
        style={{
          padding: paddingRow1,
          width: `calc(100vw - ${paddingRow1 * 2}px)`,
          height: `calc(100vh - ${headerHeight + paddingRow1 * 2}px)`,
        }}
      >
        <BrandImage image={Image44} hoverImage={MountainLineImage} />
        <BrandImage
          style={{ width: '65%' }}
          image={Image53}
          hoverImage={PathLineImage}
        />
      </Row>

      <Row
        style={{
          padding: paddingRow2,
          width: `calc(100vw - ${paddingRow2 * 2}px)`,
          height: `calc(100vh - ${paddingRow2 * 2}px)`,
        }}
      >
        <BrandImageText
          title={'Atelier Marie Nicolas'}
          image={PortraitImage}
          style={{
            borderColor: 'black',
            borderWidth: 0,
            borderRightWidth: 0.5,
            borderStyle: 'solid',
          }}
        />
      </Row>

      <TitleRow
        style={{
          width: `calc(100vw - ${paddingRow3 * 2}px)`,
          paddingBottom: paddingRow3 - 5,
          marginLeft: paddingRow3,
          marginRight: paddingRow3,
        }}
      >
        <ContentText>{'UNIQUES'}</ContentText>
      </TitleRow>

      <Row
        style={{
          padding: paddingRow3,
          width: `calc(100vw - ${paddingRow3 * 2}px)`,
          gap: 40,
        }}
      >
        <Content style={{ gap: 40 }}>
          {array1.map((piece, index) => (
            <BrandImage
              key={index}
              image={piece.image}
              height={piece.height}
              name={piece.name}
              description={piece.description}
              size={piece.size}
              hoverImage={MountainLineImage}
            />
          ))}
        </Content>

        <Content style={{ gap: 40 }}>
          {array2.map((piece, index) => (
            <BrandImage
              key={index}
              image={piece.image}
              height={piece.height}
              name={piece.name}
              description={piece.description}
              size={piece.size}
              hoverImage={MountainLineImage}
            />
          ))}
        </Content>

        <Content style={{ gap: 40 }}>
          {array3.map((piece, index) => (
            <BrandImage
              key={index}
              image={piece.image}
              height={piece.height}
              name={piece.name}
              description={piece.description}
              size={piece.size}
              hoverImage={MountainLineImage}
            />
          ))}
        </Content>
      </Row>

      <TitleRow
        style={{
          marginTop: 80,
          marginBottom: 40,
          width: `calc(60vw)`,
          paddingBottom: paddingRow3 - 5,
          marginLeft: '20%',
          marginRight: '20%',
        }}
      >
        <ContentText>{'CONTACT'}</ContentText>
      </TitleRow>

      <Row
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '60%' }}>
          <FormContainer>
            <form
              name="CONTACT_FORM"
              method="post"
              onSubmit={() => console.log('SEND')}
            >
              <FormRow>
                <Input
                  style={{ display: 'none' }}
                  className={`form-control`}
                  defaultValue={'contact'}
                  type="text"
                  name="Landing"
                  required={true}
                />

                <InputContainer>
                  <Label>Prénom</Label>
                  <Input
                    className={`form-control`}
                    type="text"
                    name="firstname"
                    required={true}
                  />
                </InputContainer>

                <InputContainer>
                  <Label>Nom</Label>
                  <Input
                    type="text"
                    name="lastname"
                    className={`form-control`}
                    required={true}
                  />
                </InputContainer>
              </FormRow>
              <FormRow>
                <InputContainer>
                  <Label>Email</Label>
                  <Input
                    className={`form-control`}
                    name="email"
                    type="email"
                    required={true}
                  />
                </InputContainer>

                <InputContainer>
                  <Label>{'Numéro de téléphone'}</Label>
                  <Input
                    className={`form-control`}
                    type="text"
                    name="phone"
                    required={true}
                  />
                </InputContainer>
              </FormRow>

              <FormRow>
                <InputContainer>
                  <Label>Qui êtes-vous?</Label>

                  <Select
                    name="subject"
                    id="company-select"
                    className={`form-control`}
                  >
                    <option value="">Choisissez une option_</option>
                    <option value="ANNONCEUR">UN ANNONCEUR</option>
                    <option value="AGENCE DE COMMUNICATION">UNE AGENCE</option>
                    <option value="INVESTISSEUR">UN INVESTISSEUR</option>
                    <option value="PRESTATAIRE">UN PRESTATAIRE</option>
                    <option value="INDÉPENDANT">UN INDÉPENDANT</option>
                    <option value="ÉTUDIANT">UN ÉTUDIANT</option>
                    <option value="AUTRE">AUTRE</option>
                  </Select>
                </InputContainer>

                <InputContainer>
                  <Label>{'Société (Facultatif)'}</Label>
                  <Input
                    className={`form-control`}
                    type="text"
                    name="company"
                  />
                </InputContainer>
              </FormRow>

              <TextAreaContainer>
                <Label>Message</Label>

                <TextArea
                  className={`form-control`}
                  name="message"
                  required={true}
                />
              </TextAreaContainer>

              <ButtonRow>
                <FormButton type="submit">ENVOYER</FormButton>
              </ButtonRow>
            </form>
          </FormContainer>
        </div>
      </Row>
    </Layout>
  );
};

export default App;

const Row = styled.div`
  display: flex;
  width: 100%;
`;
const TitleRow = styled.div`
  display: flex;
  width: 100%;
  border-color: black;
  border-width: 0;
  border-bottom-width: 0.5px;
  border-style: solid;

  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ContentText = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 16px;
  letter-spacing: 3px;
  color: #000000;
`;

//FORM
const FormContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  @media (max-width: 1280px) {
    max-width: 100vw;
    margin: 0px 0 20px 0;
  }
`;
const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 1280px) {
    flex-direction: column;
    width: calc((var(--vw, 1vw) * 100) - 100px);
  }
`;
const InputContainer = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  @media (max-width: 1280px) {
    width: calc((var(--vw, 1vw) * 100) - 90px);
    margin: 0px 0 16px 30px;
    padding: 15px;
  }
`;
const Label = styled.div`
  font-family: 'HelveticaNeueLTPro-Lt';
  font-size: 13px;
  color: #000;
`;
const Input = styled.input`
  height: 60px;
  width: 100%;
  border-width: 0;
  background-color: #eee;
  font-family: 'HelveticaNeueLTPro-Bd';
  font-size: 20px;
  color: #66ccff;
  :focus {
    outline: none;
  }
  @media (max-width: 1280px) {
    width: calc((var(--vw, 1vw) * 100) - 110px);
  }
`;
const Select = styled.select`
  height: 60px;
  width: 100%;
  border-width: 0;
  background-color: #eee;
  color: #000;
  font-family: 'HelveticaNeueLTPro-Bd';
  font-size: 18px;
  margin: 0px 0 0 -3px;
  padding: 20px;
  @media (max-width: 1280px) {
    width: calc((var(--vw, 1vw) * 100) - 90px);
    margin: 0px 0 0 0;
  }
`;

const TextAreaContainer = styled.div`
  background-color: #fff;
  margin: 0px 20px 16px 0;
  padding: 20px 20px 10px 20px;
  @media (max-width: 1280px) {
    width: calc((var(--vw, 1vw) * 100) - 100px);
    margin: 0px 0 16px 30px;
  }
`;
const TextArea = styled.textarea`
  height: 100px;
  width: 100%;
  border-width: 0;
  background-color: #eee;
  color: #66ccff;
  font-family: 'HelveticaNeueLTPro-Bd';
  font-size: 18px;
  margin: 5px 0 0 -3px;
  :focus {
    outline: none;
  }
  @media (max-width: 1280px) {
    width: calc((var(--vw, 1vw) * 100) - 120px);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  @media (max-width: 1280px) {
    width: calc((var(--vw, 1vw) * 100));
    justify-content: center;
  }
`;
const FormButton = styled.button`
  font-family: 'HelveticaNeueLTPro-Bd';
  font-size: 16px;
  border-width: 0;
  padding: 17px 100px 12px 100px;
  letter-spacing: 5px;
  cursor: pointer;
  background-color: #353535;
  color: #ffffff;
  :hover {
    background-color: #000;
    color: #66ccff;
  }
  @media (max-width: 1280px) {
    margin-right: 0px;
    width: calc((var(--vw, 1vw) * 100) - 60px);
  }
`;
