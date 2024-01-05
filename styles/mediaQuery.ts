// const desktopQuery = () => `@media all and (min-width: 700px)`;

const tabletQuery = () => `@media all and (max-width:1140px) and (min-width:601px)`;

const mobileQuery = () => `@media all and (max-width:600px)`;

export const media = {
    // desktop: desktopQuery,
    tablet: tabletQuery,
    mobile: mobileQuery,
};