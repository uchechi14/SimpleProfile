import styled from "@emotion/styled"
import { BiSolidFlagCheckered } from "react-icons/bi";

const UserGoals = () =>{
    return(
        <InnerWrapper>
        <User>
               <IconHolder>
                   < BiSolidFlagCheckered  />
               </IconHolder>
               <BoldText>User end goals</BoldText>
           </User>
           <TextHolder>
           <Text>
               <Round></Round>
               <Detail>Create delicious project with ease together with her co-workers</Detail>
           </Text>
           <Text>
               <Round></Round>
               <Detail>Creating herself challenges by learning new tools and mastering them</Detail>
           </Text>
           <Text>
               <Round></Round>
               <Detail>Become more proficient with her work, so that she can do more with less.</Detail>
           </Text>
           <Text>
               <Round></Round>
               <Detail>Save time on switching too often between different tools and workflows.</Detail>
           </Text>
           </TextHolder>
        </InnerWrapper>
    )
}

export default UserGoals;

const InnerWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 10px;
`
const User = styled.div`
display: flex;
gap: 10px;
`
const IconHolder = styled.div`
color:#3D65AA ;
font-size: 17px;
`
const BoldText = styled.b`
font-size: 16px;
color: #3D65AA;
`

const TextHolder = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`
const Text = styled.div`
display: flex;
gap: 5px;
`
const Round = styled.div`
width: 8px;
height: 8px;
border-radius: 50px;
background-color: #3D65AA;
margin-top: 5px;
`
const Detail = styled.p`
font-size: 14px;
`