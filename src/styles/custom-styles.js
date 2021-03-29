import { css } from 'lit-element';

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

export default css`
    div.nav-bar-path > span {
        font-size: 10px;
    }
    div.nav-bar-path.active > span {
        color: #ffa306;
    }
    div.nav-bar-tag > div {
        text-transform: uppercase;
        color: #2b2b2b;
        font-size: 11px;
    }
`;
