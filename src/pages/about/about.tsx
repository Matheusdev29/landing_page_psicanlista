import { styled, Grid, Typography } from "@mui/material"
       const StyledClient = styled("div")(() =>({
        backgroundColor: "#0F141C",
        backgroundSize: "400% 400%",
        justifyContent:"center",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        position: "relative",
        textAlign:"center",
       }))
export default function About() {

    return(
       <StyledClient>
                <Grid container  display={"flex"} alignItems={"center"} justifyContent={"center"}>
                   <Grid size={12} >     
                        <Typography 
                        variant="h6"
                            color="#F4F6F8"
                            fontWeight={700}
                            mb={1}>  
                            Sobre mim
                        </Typography>   
                    </Grid>
                </Grid>
                </StyledClient>
    )
}