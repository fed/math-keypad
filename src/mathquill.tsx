import React, { Fragment, useState } from 'react';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';
import LatexRenderer from './LatexRenderer';
import 'katex/dist/katex.min.css';

addMathquillStyles();

export default function MathQuillKeyPad() {
    const [state, setState] = useState({ latex: '' });
    const handleInputChange = mathField => setState({ latex: mathField.latex() });

    console.log(state.latex);

    return (
        <Fragment>
            <LatexRenderer>{state.latex}</LatexRenderer>
            <MathQuill
                latex={state.latex}
                onChange={handleInputChange}
            />
        </Fragment>
    );
}
