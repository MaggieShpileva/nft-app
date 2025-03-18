import React, { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
    color?: string;
};

const FacebookIcon: React.FC<IconProps> = ({ color = '#535353', ...props }) => (
    <svg
        width="13"
        height="28"
        viewBox="0 0 13 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5032 13.9751H8.59836V27.9503H2.77538V16.2616V13.9751H0.0351562V9.04274H2.77538V5.82298C2.77538 3.5623 3.87148 0 8.59836 0H12.9142V4.79539H9.83146C9.35192 4.79539 8.59836 5.06942 8.59836 6.16551V9.04274H12.9827L12.5032 13.9751Z"
            fill={color}
        />
    </svg>
);

export default FacebookIcon;
