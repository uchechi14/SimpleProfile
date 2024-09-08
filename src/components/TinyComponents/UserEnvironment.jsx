import styled from "@emotion/styled"
import { GiFlexibleLamp } from "react-icons/gi";

const UserEnvironment = () =>{
    return(
             <InnerWrapper>
                <User>
                    <IconHolder>
                        <GiFlexibleLamp />
                    </IconHolder>
                    <BoldText>User environment</BoldText>
                </User>
                <Holder>
                <LineHolder>
                    <Text>
                        <InnerText>Home-Space</InnerText>
                        <InnerText>Office-Space</InnerText>
                    </Text>
                    <Line>
                        <Round></Round>
                    </Line>
                </LineHolder>
                <LineHolder>
                    <Text>
                        <InnerText>Home-Space</InnerText>
                        <InnerText>Office-Space</InnerText>
                    </Text>
                    <Line>
                        <Round1></Round1>
                    </Line>
                </LineHolder>
                <LineHolder>
                    <Text>
                        <InnerText>Home-Space</InnerText>
                        <InnerText>Office-Space</InnerText>
                    </Text>
                    <Line>
                        <Round2></Round2>
                    </Line>
                </LineHolder>
                </Holder>
                <LastText>
                Uche works from home, but sometimes she commute to co-working space,
                 where she has the opportunity to share ideas with other people.Since she became quite handy with collaboration tools.
                </LastText>            
             </InnerWrapper>

    )
}
    

export default UserEnvironment;

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
const Holder = styled.div` `
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
const Round = styled.div`
width: 14px;
height: 14px;
border-radius: 50px;
background-color: #3D65AA;
margin-left: 80px;
`
const Round1 = styled.div`
width: 14px;
height: 14px;
border-radius: 50px;
background-color: #3D65AA;
margin-left: 130px;
`
const Round2 = styled.div`
width: 14px;
height: 14px;
border-radius: 50px;
background-color: #3D65AA;
margin-left: 190px;
`
const LastText = styled.p`
    font-size: 14px;
    margin-top: 5px;
`