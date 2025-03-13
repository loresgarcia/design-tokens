import { colors } from "./colors";
import { breakpoints, media } from "./breakpoints";

export const lightTheme = {
    breakpoints,
    media,
    typography: {
        fontSize: {
            title: "clamp(1.25rem, 1.5vw, 1.5rem)",
            subtitle: "clamp(1rem, 1.2vw, 1.125rem)",
            body: "clamp(0.875rem, 1vw, 1rem)"
        },
        fontFamily: {
            primary: "sans-serif",
            secondary: "serif"
        }
    },
    colors: {
        background: {
            primary: colors.gray100,
            secondary: colors.white
        },
        text: {
            title: colors.black,
            body: colors.black,
            placeholder: colors.gray200,
            button: colors.white
        },
        primary: colors.blue100,
        secondary: colors.blue200,
        focus: colors.yellow100,
        disabled: colors.gray100,
        transparent: colors.transparent
    },
    padding: {
        small: "0.5rem",
        medium: "1rem",
        large: "1.5rem"
    },
    margin: {
        small: "0.5rem",
        medium: "1rem",
        large: "1.5rem"
    },
    gap: {
        small: "0.5rem",
        medium: "1rem",
        large: "1.5rem"
    },
    borderWidth: {
        thin: "1px",
        thick: "2px"
    },
    borderRadius: {
        small: "4px",
        medium: "8px"
    },
    boxShadow: {
        soft: `0px 2px 4px ${colors.black}1A`,
        medium: `0px 4px 8px ${colors.black}26`,
        strong: `0px 6px 12px ${colors.black}33`
    }
};

export const darkTheme = {
    ...lightTheme,
    colors: {
        background: {
            primary: colors.black,
            secondary: colors.black
        },
        text: {
            title: colors.white,
            body: colors.white,
            placeholder: colors.gray100,
            button: colors.white
        },
        primary: colors.white,
        secondary: colors.blue100,
        focus: colors.yellow200,
        disabled: colors.gray200,
        transparent: colors.transparent
    }
};
