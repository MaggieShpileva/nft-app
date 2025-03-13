import React, { SVGProps } from 'react';

const ArrowIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.2397 8.38982C10.8023 7.98602 10.1203 8.01329 9.71654 8.45073L6.23402 12.2234C5.85287 12.6363 5.85286 13.2728 6.23401 13.6857L9.71653 17.4585C10.1203 17.8959 10.8023 17.9232 11.2397 17.5194C11.6772 17.1156 11.7045 16.4336 11.3007 15.9962L9.48802 14.0325L19.9611 14.0325C20.5565 14.0325 21.0391 13.5499 21.0391 12.9546C21.0391 12.3592 20.5565 11.8766 19.9611 11.8766L9.48805 11.8766L11.3007 9.91301C11.7044 9.47557 11.6772 8.79361 11.2397 8.38982Z"
            fill="black"
        />
    </svg>
);

export default ArrowIcon;
