import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from '../Works_Styles';

type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </S.Description>
        </S.Work>
    );
};
/*const StyledWork = styled.section`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;
    
    ${Link}{
      padding: 10px 0;
      
      & + ${Link} {
        margin-left: 20px;
      } 
    }
    
    @media ${theme.media.desktop}{
      max-width: 540px;
    }
`

const ImageWrapper = styled.div`
  position: relative;
  
  ${Button}{
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    
    &::before{
      width: 100%;
      height: 100%;
    }
  }
  
  &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      backdrop-filter: blur(4px);
      opacity: 0;
    }
  
  &:hover{
    &::before{
      opacity: 1;
    }
   /!* &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      backdrop-filter: blur(4px);
    }*!/
    
    ${Button}{
      opacity: 1;
    }
  } 
  
  @media ${theme.media.tablet}{
    &::before{
      opacity: 1;
    }
    
    ${Button}{
      opacity: 1;
    }
  }
`

const Image = styled.img`
  //width: 100vh;
  height: 260px;
  object-fit: cover;
`
const Title = styled.h3`

`
const Text = styled.p`
  margin: 14px 0 10px;
`

const Description = styled.div`
  padding: 25px 20px;
`*/

