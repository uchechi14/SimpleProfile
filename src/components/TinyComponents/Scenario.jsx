import styled from "@emotion/styled"
import { MdMovie } from "react-icons/md";

const Scenario = () =>{
    return(
        <InnerWrapper>
        <User>
               <IconHolder>
                   <MdMovie />
               </IconHolder>
               <BoldText>Scenario</BoldText>
           </User>
           <Detail>
               While commuting to work, I can check on mobile app coments and notes on project I am currently working on. Since I use design tools both at home and at my co-working space, I find it convenient that these tools are platform-agnostic. Since everything is cloud-based, I dont have to worry about uploading my work or backuping the night  before, when I work from home. Teaching is a great form of learning and being early-adopter gives me opportunity to share knowledge with my co-workers, and create bigger circle of people using the tool. With tool like this under my belt, I find UI design process simplified which gives me more time to fouces on underlying UX project problems
           </Detail>
           </InnerWrapper>
    )
}

export default Scenario;

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
const Detail = styled.p`
font-size: 14px;
`