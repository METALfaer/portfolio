import React from 'react';
import photo from '../../../assets/images/Ruslan.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect'


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi there</S.SmallText>
                        <S.Name>
                            I am
                            <span>Ruslan Konychev</span>
                        </S.Name>
                        <S.MainTitle>
                            <p>The Web Deweloper,
                                The Front-End developer</p>
                            <Typewriter
                                options={{
                                    strings: ['The Web Deweloper',
                                        'The Front-End developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                }}
                            />
                        </S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>


                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

/*const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    
    &::before{
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
        
        @media ${theme.media.mobile}{
          width: 314px;
          height: 414px;
          top: -17px;
          left: 20px;
        }
    }
    
    @media ${theme.media.mobile}{
      margin-top: 65px;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 15px;
    
    @media ${theme.media.mobile}{
      width: 310px;
      height: 430px;
    }
`

const MainTitle = styled.h1`
    /!*font-weight: 400;
    font-size: 27px; *!/
    ${font({
    weight: 400,
    Fmax: 27,
    Fmin: 20,
})};
`

const Name = styled.h2`
    ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36,
})};
    /!*font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;*!/
    letter-spacing: 0.05em;
    margin: 10px 0;
    
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;
    
        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
        
            position: absolute;
            bottom: -4px;
            z-index: -1;
        }
    }
    
    @media ${theme.media.mobile}  {
      margin: 15px 0 22px;
    }
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
    
`*/
