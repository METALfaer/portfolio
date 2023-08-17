import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contact_Styles';

export const Contact:React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Fild placeholder={'name'}/>
                    <S.Fild placeholder={'subject'}/>
                    <S.Fild placeholder={'message'} as={'textarea'}/>
                    <Button type={'submit'}>Sand message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};

/*const StyledContact = styled.section`

`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
      resize: none;
      height: 155px;
    }

`
const Fild = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  
  font-family: 'Poppins',sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  
  color: ${theme.colors.font};
  
  &::placeholder{
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible{
    outline: 1px solid ${theme.colors.borderColor};
  }
`*/
