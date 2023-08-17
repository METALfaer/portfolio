import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/Rectangle-14s.webp'
import timer from '../../../assets/images/Rectangle-14.webp'
import {Container} from "../../../components/Container";
import { S } from './Works_Styles';

const worksItems = ['All', 'lending page', 'React', 'spa']
const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'wwwwwwwwwwwwww',
    },
    {
        title: 'Timer',
        src: timer,
        text: 'oooooooooooooooooo',
    },

]

export const Works:React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Work</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {workData.map((w, index) => {
                            return <Work
                                key={index}
                                title={w.title}
                                text={w.text}
                                src={w.src}
                            />
                    })}
                    {/*<Work title={'Social Network'}
                          text={'wwwwwwwwwwwwww'}
                          src={socialImg}
                    />
                    <Work title={'Timer'}
                          text={'oooooooooooooooooo'}
                          src={timer}
                    />*/}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

/*const StyledWorks = styled.section`
  ${FlexWrapper}{
    gap: 30px;
  }
   
`*/
