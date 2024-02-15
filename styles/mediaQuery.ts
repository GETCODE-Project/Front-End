/** 작성자:한빈 */

const tabletQuery = () => `@media all and (max-width:1140px)`;
const mobileQuery = () => `@media all and (max-width:800px)`;

export const media = {
  tablet: tabletQuery,
  mobile: mobileQuery,
};
