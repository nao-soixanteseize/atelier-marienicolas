import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const ContactForm = ({ setMessageSent, page }: any) => {
  //////////////////////////////////////////// GETFORM STATE

  const [serverState, setServerState] = useState<{
    submitting: boolean;
    status: { ok: string; msg: string } | undefined;
  }>({
    submitting: false,
    status: undefined,
  });
  const handleServerResponse = (
    ok: any,
    msg: string,
    form: { reset: () => void },
  ) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
      setMessageSent(true);
    }
  };

  const handleOnSubmit = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true, status: undefined });
    //const token = await recaptchaRef.current.executeAsync();
    // console.log(token);

    // console.log(new FormData(form));
    axios({
      method: 'post',
      url: 'https://getform.io/f/avrrpxda',
      data: new FormData(form),
    })
      .then((r: any) => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch((r: any) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <FormContainer>
      <form name="CONTACT_FORM" method="post" onSubmit={handleOnSubmit}>
        <FormRow>
          <Input
            style={{ display: 'none' }}
            className={`form-control`}
            defaultValue={page}
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
              <option value="UN PARTICULIER">UN PARTICULIER</option>
              <option value="UNE ENTREPRISE">UNE ENTREPRISE</option>
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
          <Button type="submit" loading={serverState.submitting}>
            ENVOYER
          </Button>
        </ButtonRow>
      </form>
    </FormContainer>
  );
};

export default ContactForm;

//FORM
const FormContainer = styled.div`
  max-width: 1180px;
  margin: auto;
  margin-bottom: 40px;
  @media (max-width: 1180px) {
    margin: 0px 0 20px 0;
    /* background-color: #2f2424; */
  }
`;
const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 1180px) {
    flex-direction: column;
    width: calc((var(--vw, 1vw) * 100));
  }
`;
const InputContainer = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  @media (max-width: 1180px) {
    width: calc((var(--vw, 1vw) * 100));
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
  color: #000000;
  padding: 0 20px;
  :focus {
    outline: none;
  }
  @media (max-width: 1180px) {
    width: calc((var(--vw, 1vw) * 100) - 70px);
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
  @media (max-width: 1180px) {
    width: calc((var(--vw, 1vw) * 100) - 30px);
    margin: 0px 0 0 0;
  }
`;

const TextAreaContainer = styled.div`
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  @media (max-width: 1180px) {
    width: calc((var(--vw, 1vw) * 100) - 35px);
    padding: 15px;
    margin: 0;
  }
`;
const TextArea = styled.textarea`
  height: 100px;
  width: 100%;
  border-width: 0;
  background-color: #eee;
  color: #000000;
  font-family: 'HelveticaNeueLTPro-Bd';
  font-size: 18px;
  margin: 5px 0 0 -3px;
  padding: 20px;

  :focus {
    outline: none;
  }
  @media (max-width: 1180px) {
    width: calc((var(--vw, 1vw) * 100) - 70px);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  @media (max-width: 1180px) {
    width: calc((var(--vw, 1vw) * 100)-30px);
    justify-content: center;
    padding: 0 15px;
  }
`;
