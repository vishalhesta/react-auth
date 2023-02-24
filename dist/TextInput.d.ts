/// <reference types="react" />
import PropTypes from 'prop-types';
declare const Input: {
    (props: any): JSX.Element;
    propTypes: {
        name: PropTypes.Requireable<string>;
        field: PropTypes.Requireable<object>;
        label: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        errors: PropTypes.Requireable<object>;
    };
};
export default Input;
