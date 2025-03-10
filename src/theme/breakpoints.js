export const breakpoints = {
    small: "600px",
    medium: "960px",
    large: "1280px",
    extraLarge: "1920px"
};

export const media = {
    small: `@media (min-width: ${breakpoints.small})`,
    medium: `@media (min-width: ${breakpoints.medium})`,
    large: `@media (min-width: ${breakpoints.large})`,
    extraLarge: `@media (min-width: ${breakpoints.extraLarge})`
};
