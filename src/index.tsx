import React, { Fragment, useRef, useCallback, useState, useEffect } from 'react';
import LatexRenderer from './LatexRenderer';
import { getInputStream } from './inputStream';
import 'katex/dist/katex.min.css';

export default function MathKeypad() {
    const ref = useRef(null);
    const [state, setState] = useState({ latex: '' });
    const handleInputChange = useCallback(latex => setState({ latex }), []);

    useEffect(() => {
        const inputField = ref.current;

        if (!inputField) {
            return;
        }

        const { unsubscribe } = getInputStream(inputField).subscribe(handleInputChange);

        return unsubscribe;
    }, []);

    return (
        <Fragment>
            <input type="text" ref={ref}></input>
            <LatexRenderer>{state.latex}</LatexRenderer>
        </Fragment>
    );
}
