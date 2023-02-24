/// <reference types="react" />
import PropTypes from 'prop-types';
declare const Button: {
    (props: any): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
export default Button;
