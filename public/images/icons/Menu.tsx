import React, { SVGProps } from 'react';

const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="34"
        height="25"
        viewBox="0 0 34 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M1.25 1H32.75H1.25Z" fill="#918F8F" />
        <path d="M1.25 1H32.75" stroke="#282828" strokeWidth="2" strokeLinecap="round" />
        <path d="M1.25 12.1628H32.75H1.25Z" fill="#918F8F" />
        <path d="M1.25 12.1628H32.75" stroke="#282828" strokeWidth="2" strokeLinecap="round" />
        <path d="M1.25 23.3256H32.75H1.25Z" fill="#918F8F" />
        <path d="M1.25 23.3256H32.75" stroke="#282828" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export default MenuIcon;
