/**
 * Import: React
 */
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

/**
 * Import: Styles
 */
import styles from './Button.module.scss';

/**
 * Import: Libs
 */
import classNames from 'classnames';

export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
    QUATERNARY = 'quaternary',
    QUINARY = 'quinary',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonType: ButtonType;
    children: ReactNode;
    onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ buttonType, children, onClick, className, ...props }) => (
    <button
        className={classNames(className, styles.button_wrapper, styles[buttonType])}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
);
