export const sliderSettings = {
    slidesToScroll: 1,
    swipeToSlide: true,
    showArrow: false,
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 7,
    variableWidth: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            },
        },

        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5,
                centerMode: true,
            },
        },
        {
            breakpoint: 1536,
            settings: {
                slidesToShow: 4,
                centerMode: true,
            },
        },
    ],
};
