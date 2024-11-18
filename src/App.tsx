import styled from 'styled-components';
import './App.css';
import { HoverContainer } from './HoverContainer';
import { Layout } from './Layout';
import { MainImageContainer } from './MainImageContainer';
import { Testimonial } from './Testimonial';
import AtelierImage from './img/Atelier1.jpg';
import GreenImage from './img/Green.png';
import MountainImage from './img/Mountain.jpg';
import MountainLineImage from './img/MountainLine.png';
import OrchestraLine from './img/OrchestraLine.png';
import PathImage from './img/Path.jpg';
import PathLineImage from './img/PathLine.png';
import PortraitImage from './img/Portrait1.png';

const App = () => {
  return (
    <Layout>
      <MainRow>
        <Leadership>
          <HoverContainer>
            <MainImageContainer
              image={MountainImage}
              hoverImage={MountainLineImage}
            />
          </HoverContainer>
          {/* <ContentText>{'Leadership Advisory'}</ContentText> */}
        </Leadership>
        <Executive>
          <HoverContainer>
            <MainImageContainer image={PathImage} hoverImage={PathLineImage} />
          </HoverContainer>
          {/* <ContentText>{'Executive Search'}</ContentText> */}
        </Executive>
      </MainRow>

      <Row style={{ gap: 40, marginBottom: '80px', marginTop: '80px' }}>
        <Testimonial
          title={'Marie Nicolas'}
          image={PortraitImage}
          hoverImage={OrchestraLine}
          style={{ width: '50%', paddingLeft: 80 }}
        />
        <Testimonial
          title={"L'atelier"}
          image={AtelierImage}
          hoverImage={OrchestraLine}
          style={{ width: '50%', paddingTop: 120, paddingRight: 80 }}
        />
      </Row>

      <Row style={{ width: '80%', margin: '120px 160px 40px 0px' }}>
        <Wording>
          <HoverContainer>
            <MainImageContainer
              image={GreenImage}
              hoverImage={OrchestraLine}
              hoverImageStyle={{
                transform: 'scale(85%, 65%) translate(-4%, -5%)',
              }}
            />
          </HoverContainer>
          <ContentText>{'UNIQUES'}</ContentText>
        </Wording>
      </Row>

      <MainRow style={{ width: '80%', margin: '0px 0px 40px 330px' }}>
        <Leadership>
          <HoverContainer>
            <MainImageContainer
              image={MountainImage}
              hoverImage={MountainLineImage}
            />
          </HoverContainer>
          {/* <ContentText>{'Leadership Advisory'}</ContentText> */}
        </Leadership>
        <Executive>
          <HoverContainer>
            <MainImageContainer image={PathImage} hoverImage={PathLineImage} />
          </HoverContainer>
          {/* <ContentText>{'Executive Search'}</ContentText> */}
        </Executive>
      </MainRow>

      <MainRow style={{ width: '100%', margin: '0px 0px 0px 0px' }}>
        <Leadership>
          <HoverContainer>
            <MainImageContainer
              image={MountainImage}
              hoverImage={MountainLineImage}
            />
          </HoverContainer>
          {/* <ContentText>{'Leadership Advisory'}</ContentText> */}
        </Leadership>
      </MainRow>

      <MainRow style={{ width: '80%', margin: '40px 0px 40px 0px' }}>
        <Leadership>
          <HoverContainer>
            <MainImageContainer
              image={MountainImage}
              hoverImage={MountainLineImage}
            />
          </HoverContainer>
          {/* <ContentText>{'Leadership Advisory'}</ContentText> */}
        </Leadership>
        <Executive>
          <HoverContainer>
            <MainImageContainer image={PathImage} hoverImage={PathLineImage} />
          </HoverContainer>
          {/* <ContentText>{'Executive Search'}</ContentText> */}
        </Executive>
      </MainRow>

      <Row style={{ width: '80%', margin: '120px 0px 40px 330px' }}>
        <Wording>
          <HoverContainer>
            <MainImageContainer
              image={GreenImage}
              hoverImage={OrchestraLine}
              hoverImageStyle={{
                transform: 'scale(85%, 65%) translate(-4%, -5%)',
              }}
            />
          </HoverContainer>
          <ContentText>{'SERIES'}</ContentText>
        </Wording>
      </Row>

      <MainRow style={{ width: '80%', margin: '0px 330px 40px 0px' }}>
        <Leadership>
          <HoverContainer>
            <MainImageContainer
              image={MountainImage}
              hoverImage={MountainLineImage}
            />
          </HoverContainer>
          {/* <ContentText>{'Leadership Advisory'}</ContentText> */}
        </Leadership>
        <Executive>
          <HoverContainer>
            <MainImageContainer image={PathImage} hoverImage={PathLineImage} />
          </HoverContainer>
          {/* <ContentText>{'Executive Search'}</ContentText> */}
        </Executive>
      </MainRow>

      <MainRow style={{ width: '100%', margin: '0px 0px 0px 0px' }}>
        <Leadership>
          <HoverContainer>
            <MainImageContainer
              image={MountainImage}
              hoverImage={MountainLineImage}
            />
          </HoverContainer>
          {/* <ContentText>{'Leadership Advisory'}</ContentText> */}
        </Leadership>
      </MainRow>

      <MainRow style={{ width: '80%', margin: '40px 0px 40px 330px' }}>
        <Leadership>
          <HoverContainer>
            <MainImageContainer
              image={MountainImage}
              hoverImage={MountainLineImage}
            />
          </HoverContainer>
          {/* <ContentText>{'Leadership Advisory'}</ContentText> */}
        </Leadership>
        <Executive>
          <HoverContainer>
            <MainImageContainer image={PathImage} hoverImage={PathLineImage} />
          </HoverContainer>
          {/* <ContentText>{'Executive Search'}</ContentText> */}
        </Executive>
      </MainRow>

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

const MainRow = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 150px);
  cursor: pointer;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;
const Leadership = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 150px);
  background-color: #000000;
  /* overflow: hidden; */
`;

const Executive = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 150px);
  background-color: #000000;
  cursor: pointer;
`;

const Wording = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: white;
  cursor: pointer;
`;

const ContentText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: 'Wix Madefor Display', sans-serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 3px;
  color: #000000;
  transform: translate(-50%, -56%);
  /* text-shadow: 0px 0px 10px #ffffff; */
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
