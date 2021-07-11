import { extendTheme } from "@chakra-ui/react"
import { ButtonStyles as Button } from './buttonStyles'

const newTheme = extendTheme({ 
    colors: {
      primary: "#845EC2",
      secondary: "#FF6F91",
      highlight: "#00C9A7",
      warning: "#FFC75F",
      danger: "#C34A36"
    },
    components: {
      Button
    }
})

export default newTheme