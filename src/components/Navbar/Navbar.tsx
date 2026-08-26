import  {styled, Toolbar, AppBar, MenuItem, Typography} from "@mui/material"


 const StyledBar = styled(Toolbar)(()=> ({
    display:"flex",
    justifyContent:"right",
    backgroundColor:"#DE994E"
  }))

export default function NavBar(){

    
    return(
        <AppBar position="absolute">
            <StyledBar>
                <MenuItem >
                    <Typography 
                        variant="h6"
                        color="white"
                        fontWeight={700}
                        mb={1}>
                            Contate-me
                    </Typography> 
                </MenuItem> 
            </StyledBar>
        </AppBar>
    )
    
}