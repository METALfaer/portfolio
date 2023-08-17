import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from './Slider_Styles';

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>WWWWWWWWWWWWWWWWWWWW</S.Text>
                    <S.Name>Name Names</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};

/*const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 32px;
  display: inline-block;
`

const Pagination = styled.span`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        margin: 5px;
        background-color: rgba(255, 255,  255,  0.5);
        border-radius: 20px;
        
        & + span {
          margin-left: 5px;
        }
        
        &.active {
          background-color: ${theme.colors.accent};
          width: 20px;
        }
    }
`*/
