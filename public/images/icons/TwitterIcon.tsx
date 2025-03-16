import React, { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
    color?: string;
};

const TwitterIcon: React.FC<IconProps> = ({ color = '#535353', ...props }) => (
    <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.0001 3.01133C26.9479 3.47169 25.8956 3.80052 24.7119 3.93205C25.8956 3.20863 26.8163 2.09063 27.2109 0.775327C26.0929 1.43298 24.8434 1.89333 23.5938 2.15639C22.5416 1.03838 21.029 0.314972 19.3848 0.314972C16.2281 0.314972 13.6633 2.8798 13.6633 6.03652C13.6633 6.49689 13.729 6.95723 13.7948 7.35183C8.99391 7.08877 4.78492 4.85275 1.957 1.36722C1.43088 2.22216 1.16782 3.20863 1.16782 4.26087C1.16782 6.23383 2.1543 8.00948 3.73267 9.06171C2.81195 9.06171 1.89124 8.79866 1.10205 8.3383V8.40406C1.10205 11.1662 3.07502 13.5337 5.70564 14.0598C5.24527 14.1914 4.71915 14.2571 4.19302 14.2571C3.79844 14.2571 3.46961 14.1914 3.14078 14.1256C3.8642 16.4274 5.9687 18.0715 8.53354 18.1373C6.56059 19.6499 4.12726 20.5706 1.43088 20.5706C0.970521 20.5706 0.510166 20.5706 0.0498047 20.5048C2.61466 22.1489 5.5741 23.0697 8.86238 23.0697C19.4506 23.0697 25.1722 14.3229 25.1722 6.75994C25.1722 6.49689 25.1722 6.23383 25.1722 6.03652C26.2902 5.18159 27.2767 4.12934 28.0001 3.01133Z"
            fill={color}
        />
    </svg>
);

export default TwitterIcon;
