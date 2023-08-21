import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/Rectangle-14s.webp'
import timer from '../../../assets/images/Rectangle-14.webp'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles';

//const tabsItems = ['All', 'lending page', 'React', 'spa']


export const Works: React.FC = () => {

    const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
        {title: 'All', status: 'all'},
        {title: 'lending page', status: 'landing'},
        {title: 'React', status: 'react'},
        {title: 'spa', status: 'spa'},
    ]
    const worksData = [
        {
            title: 'Social Network',
            src: socialImg,
            text: 'wwwwwwwwwwwwww',
            type: 'spa'
        },
        {
            title: 'Timer',
            src: timer,
            text: 'oooooooooooooooooo',
            type: 'react'
        },
    ]
    let [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>('all')
    let filteredWorks = worksData
    if (currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter(work => work.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = worksData.filter(work => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = worksData.filter(work => work.type === 'spa')
    }

    const changeFilterStatus = (value: TabsStatusType) => {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Work</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {filteredWorks.map((w, index) => {
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
