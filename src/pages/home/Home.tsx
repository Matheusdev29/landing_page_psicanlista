import {Grid, styled, Typography} from "@mui/material"
import Avatar from "../../assets/image/Avatar.jpg"
import background from "../../assets/image/escritoriopsicanalise.jpg"
    const StyledImg = styled("img")(() =>({
        marginLeft: "5%",
        width: "60%",
        borderRadius:"100%",
        border:"4px solid white ",
    }))


    const StyledHome = styled("div")(() =>({
        backgroundColor: "#E6CFA3",
        backgroundSize: "400% 400%",
        justifyContent:"center",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        position: "relative",
        textAlign:"center",
        backgroundImage: background
}))

export default function Home() {
    return(
        <StyledHome>
        <Grid container  display={"flex"} alignItems={"center"} justifyContent={"center"}>
           <Grid size={4} >     
                <StyledImg src = {Avatar}/>           </Grid>
            <Grid size={8}>
                <Typography variant="h2" color = "#DE994E" fontWeight={300} mb={1}>
                Sou Alessandra Souza
                </Typography>
                <Typography 
                variant="h6"
                color="#DE994E"
                fontWeight={700}
                mb={1} > 
                    Sou psicanalista formada, com especilaização em ...

                </Typography>   
            </Grid>
        </Grid>
        </StyledHome>
    )
}