import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette:{
        primary: {
            main:"#ff0000",
        },
        secondary: {
            main:"#e6e6e6",
        },
    },
    typography:{
        fontFamily:"Segou UI"
    }
})
theme = responsiveFontSizes(theme)

export default theme