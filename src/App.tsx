import styled from 'styled-components';
import './App.css';
import { BrandImage } from './BrandImage';
import { BrandImageText } from './BrandImageText';
import { HoverContainer } from './HoverContainer';
import MountainImage from './img/Mountain.jpg';
import MountainLineImage from './img/MountainLine.png';
import PathImage from './img/Path.jpg';
import PathLineImage from './img/PathLine.png';
import PortraitImage from './img/Portrait1.png';
import { Layout } from './Layout';

const App = () => {
  const headerHeight = 190;

  const paddingRow1 = 0;
  const paddingRow2 = 200;
  const paddingRow3 = 40;
  return (
    <Layout>
      <Row
        style={{
          padding: paddingRow1,
          width: `calc(100vw - ${paddingRow1 * 2}px)`,
          height: `calc(100vh - ${headerHeight + paddingRow1 * 2}px)`,
        }}
      >
        <BrandImage image={MountainImage} hoverImage={MountainLineImage} />
        <BrandImage
          style={{ width: '65%' }}
          image={PathImage}
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
          <BrandImage image={MountainImage} hoverImage={MountainLineImage} />

          <BrandImage
            height={'800px'}
            image={PathImage}
            hoverImage={MountainLineImage}
          />
        </Content>

        <Content style={{ gap: 40 }}>
          <BrandImage
            height={'800px'}
            image={PathImage}
            hoverImage={MountainLineImage}
          />
          <BrandImage image={MountainImage} hoverImage={MountainLineImage} />
        </Content>

        <Content style={{ gap: 40 }}>
          <BrandImage image={MountainImage} hoverImage={MountainLineImage} />
          <BrandImage
            height={'800px'}
            image={PathImage}
            hoverImage={MountainLineImage}
          />
        </Content>
      </Row>

      <Row
        style={{
          margin: '120px auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HoverContainer style={{ width: '1024px' }}>
          <FormContainer style={{ padding: 40 }}>
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
        </HoverContainer>
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
  margin: 0px 20px 16px 0;
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
