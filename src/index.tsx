import React, { Fragment } from 'react';
import LatexRenderer from './LatexRenderer';

export default function MathKeypad() {
    const sampleLatex = 'c = \\pm\\sqrt{a^2 + b^2}';

    return (
        <Fragment>
            <h1>Math Keypad</h1>
            <LatexRenderer>
                {sampleLatex}
            </LatexRenderer>
        </Fragment>
    )
}
