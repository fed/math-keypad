import React from 'react';
import { renderToString } from 'katex';
import { KATEX_DEFAULTS } from './constants';

type Props = {
    className?: string;
    children: string;
    settings: any;
};

export default function LatexRenderer(props: Props) {
    const katexSettings = { ...KATEX_DEFAULTS, ...props.settings };
    const latexMarkup = renderToString(props.children, katexSettings);

    return (
        <div
            className={props.className}
            dangerouslySetInnerHTML={{ __html: latexMarkup }}
        ></div>
    );
}

LatexRenderer.defaultProps = {
    settings: {}
};
