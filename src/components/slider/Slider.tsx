import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import {S} from './Slider_Styles';
import './Slider.css'

type SlideType={
    text:string
    userName:string
}
const Slide = (props:SlideType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}
const items = [
    <Slide text={'WWWWWWWWWWWWWWWWWWWW'} userName={'raz'}/>,
    <Slide text={'rrrrrrrrrrrrrrrrrrrrrr'} userName={'dwa'}/>,
    <Slide text={'tttttttttttttttttttttttttttt'} userName={'tri'}/>,

]
export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}/>
    </S.Slider>
)

/*export const Slider: React.FC = () => {
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
};*/

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
