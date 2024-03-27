import { FC } from "react";
import { SvgButton } from "../SvgButton";
import './index.css';

import linkedinLogo from '../../assets/linkedin.svg';
import gitLogo from '../../assets/github.svg';

export const Header: FC = () => {
    return (
        <div className="header">
            <SvgButton
                ariaLabel="linkedin"
                href="https://www.linkedin.com/in/ryhorby/"
                target="_blank"
                xLinkHref={`${linkedinLogo}#linkedin`}
            />

            <SvgButton
                ariaLabel="github"
                href="https://github.com/ryhordev"
                target="_blank"
                xLinkHref={`${gitLogo}#github`}
            />
        </div>
    );
}