import styled from "@emotion/styled";
import { PiHeadCircuit } from "react-icons/pi";
const Psychographies = () =>{
    return(
        <InnerWrapper>
        <User>
               <IconHolder>
                   < PiHeadCircuit  />
               </IconHolder>
               <BoldText>Psychographies</BoldText>
           </User>
           <Holder>
           <LineHolder>
               <Text>
                   <InnerText>Motivation</InnerText>
               </Text>
               <Line>
                   <RoundLine></RoundLine>
               </Line>
           </LineHolder>
           <LineHolder>
               <Text>
                   <InnerText>Self-discipline</InnerText>
               </Text>
               <Line>
                   <RoundLine1></RoundLine1>
               </Line>
           </LineHolder>
           <LineHolder>
               <Text>
                   <InnerText>Openness to new and different ideas</InnerText>
               </Text>
               <Line>
                   <RoundLine2></RoundLine2>
               </Line>
           </LineHolder>
           <LineHolder>
               <Text>
                   <InnerText>Sociable</InnerText>
               </Text>
               <Line>
                   <RoundLine3></RoundLine3>
               </Line>
           </LineHolder>
           </Holder>
           <LastText>
           Uche works from home, but sometimes she commute to co-working space,
            where she has the opportunity to share ideas with other people.Since
            her job is remote now, she became quite handy with collaboration tools
            like Figma,Miro,Zeplin etc .where she has the opportunity to share ideas with other people.Sinceshe became quite handy with collaboration tools.
           </LastText>
        </InnerWrapper>
    )
}

export default Psychographies;

const InnerWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 14px;
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
const Holder = styled.div``
const LineHolder = styled.div`
margin-top: 9px;
`
const Text = styled.div`
display: flex;
justify-content: space-between;
`
const InnerText = styled.b`
font-size: 15px;
`
const Line = styled.div`
width: 100%;
height: 8px;
background-color: #D5DDEA;
border-radius: 5px;
display: flex;
align-items: center;
margin-top: 8px;

`
const LastText = styled.p`
    font-size: 14px;
    margin-top: 5px;
`
const RoundLine = styled.div`
  width: 60%;
  height: 8px; 
  border-radius: 5px;
  background-color: #3D65AA;
`
const RoundLine1 = styled.div`
  width: 70%;
  height: 8px; 
  border-radius: 5px;
  background-color: #3D65AA;
`
const RoundLine2 = styled.div`
  width: 50%;
  height: 8px;  
  border-radius: 5px;
  background-color: #3D65AA;
`
const RoundLine3 = styled.div`
  width: 40%;
  height: 8px; 
  border-radius: 5px;
  background-color: #3D65AA;
`