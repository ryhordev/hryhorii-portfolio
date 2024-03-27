import React, { FC } from "react";
import './index.css'

interface ISvgButtonProps {
    ariaLabel?: string
    href?: string
    className?: string
    target?: React.HTMLAttributeAnchorTarget;
    xLinkHref: string;
}

export const SvgButton: FC<ISvgButtonProps> = ({ href, ariaLabel, className, target, xLinkHref }) => {
    return (
        <a aria-label={ariaLabel} href={href} className={`svg-btn ${className ?? ''}`} target={target}>
            <svg>
                <use xlinkHref={xLinkHref} />
            </svg>
        </a>
    );
}