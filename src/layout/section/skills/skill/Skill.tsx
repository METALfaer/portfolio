import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Skills_Styles';

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>

                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>
                    {props.description}
                </S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

/*const StyledSkill = styled.section`
    width: 330px;
    flex-grow: 1;
    padding: 62px 20px 40px;
    
    @media ${theme.media.mobile}{
      padding: 42px 20px 52px;
    }
`

export const IconWrapper = styled.div`
    position: relative;
    
    &::before{
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%,-50%);
       
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: top left;
        
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
    line-height: 1.4;
`*/
