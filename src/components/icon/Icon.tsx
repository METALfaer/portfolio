import React from 'react';
import iconsSprite from '../../assets/images/Vector.svg'

type IconType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconType) => {
    return (
        <svg width={props.width || '50'}
             height={props.width || '50'}
             viewBox={props.width || '0 0 50 50'}
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

