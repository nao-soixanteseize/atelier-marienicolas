import styled from 'styled-components';
import Button from './Button';

const ContactForm = () => {
  return (
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
            <Input className={`form-control`} type="text" name="company" />
          </InputContainer>
        </FormRow>

        <TextAreaContainer>
          <Label>Message</Label>

          <TextArea className={`form-control`} name="message" required={true} />
        </TextAreaContainer>

        <ButtonRow>
          <Button type="submit">ENVOYER</Button>
        </ButtonRow>
      </form>
    </FormContainer>
  );
};

export default ContactForm;

//FORM
const FormContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  margin-bottom: 40px;
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
