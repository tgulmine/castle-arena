import { darken, mode, whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
    baseStyle: {
        _focus: {
            boxShadow: "none",
        },
    },
    sizes: {},
    variants: {
        primary: (props) => ({
            bg: "primary",
            color: "white",
            _hover: {
                bg: mode( darken("primary", 20), whiten("primary", 20))(props),
                boxShadow: "md"
            }
        }),
        secondary: (props) => ({
            bg: "secondary",
            color: "white",
            _hover: {
                bg: mode( darken("secondary", 20), whiten("secondary", 20))(props),
                boxShadow: "md"
            }
        }),
        secondaryOutline: (props) => ({
            bg: "transparent",
            border: "1px solid",
            borderColor: "secondary",
            color: "secondary",
            _hover: {
                boxShadow: "md",
                transform: "scale(1.05)"
            }
        }),
        "rsrs": {
            bg: "red.400",
            boxShadow: "0 0 2px 2px #efdfde",
        },
    },
    defaultProps: {}
}