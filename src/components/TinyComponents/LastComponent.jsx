import styled from "@emotion/styled";
import { TbTools } from "react-icons/tb";
import { FaFigma } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";

const LastComponent = () =>{
    return(
        <InnerWrapper>
        <User>
               <IconHolder>
                   <TbTools />
               </IconHolder>
               <BoldText>Tools</BoldText>
           </User>
           <Logo>
             <Big>
             <FaFigma />
             </Big>
             <Big>
             <IoLogoReact/>
             </Big>
             <Big>
             <FaCss3  />
             </Big>
             <Big>
             <IoLogoJavascript />
             </Big>
           </Logo>
           </InnerWrapper>  
    )
}
export default LastComponent;

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
const Logo = styled.div`
display: flex;
gap: 10px;
justify-content: space-between;
/* margin-top: 5px; */
`
const Big = styled.div`
    font-size: 60px;
    color:#3D65AA ;

    @media (max-width: 1024px) {
        font-size: 55px;
        gap: 0;    }
`