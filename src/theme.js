export const lightTheme = {
    colors: {
        primary: "#007AFF",
        background: "#F5F5F5",
        text: "#000000",
        focus: "#FFAA00",
    },
    fontSizes: {
        small: "clamp(0.875rem, 1vw, 1rem)", 
        medium: "clamp(1rem, 1.2vw, 1.125rem)", 
        large: "clamp(1.25rem, 1.5vw, 1.5rem)", 
    },
    spacing: {
        small: "0.5rem", 
        medium: "1rem", 
        large: "1.5rem", 
    },
    borders: {
        thin: "1px solid rgba(0, 0, 0, 0.1)",
        thick: "2px solid rgba(0, 0, 0, 0.2)",
        rounded: "8px",
    },
    shadows: {
        soft: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        medium: "0px 4px 8px rgba(0, 0, 0, 0.15)",
        strong: "0px 6px 12px rgba(0, 0, 0, 0.2)",
    },
};

export const darkTheme = {
    ...lightTheme,
    colors: {
        primary: "#0A84FF",
        background: "#000000",
        text: "#FFFFFF",
        focus: "#FFD60A",
    },
};
