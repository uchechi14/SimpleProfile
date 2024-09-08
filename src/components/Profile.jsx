import styled from "@emotion/styled" 
import image from "../assets/uche.jpeg"
import { FaUser } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { CgGenderFemale } from "react-icons/cg";
import { GiGraduateCap } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineSingleBed } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { TbCurrencyNaira } from "react-icons/tb";

const Profile = () => {
    return(
            <Wrapper>
                <InnerWrapper>
                    <ProfileDetail>
                        <ProfileImage><img src={image}/></ProfileImage>
                        <H1>Nnorom Uchechi</H1>
                        <B>Developer</B>
                    </ProfileDetail>
                    <Text>If you equip people with the right tools, they will build the most extraordinary things.
                    </Text>
                    <Background>
                        <Personal>
                            Personal background
                        </Personal>
                        <Holder>
                        <IconText>
                            <FirstValue>
                                <IconImage>< FaUser /></IconImage>
                                <AnotherText>20</AnotherText>
                            </FirstValue>
                            <FirstValue>
                                <IconImage>< MdOutlineLocationOn /></IconImage>
                                <AnotherText>Lagos, Nigeria</AnotherText>
                            </FirstValue>
                            <FirstValue>
                                <IconImage>< CgGenderFemale /></IconImage>
                                <AnotherText>Female</AnotherText>
                            </FirstValue>
                            </IconText>
                            <IconText>
                            <FirstValue>
                                <IconImage>< GiGraduateCap  /></IconImage>
                                <AnotherText>C.Science</AnotherText>
                            </FirstValue>
                            <FirstValue>
                                <IconImage>< IoIosPeople  /></IconImage>
                                <AnotherText>Design Student</AnotherText>
                            </FirstValue>
                            <FirstValue>
                                <IconImage>< MdOutlineSingleBed /></IconImage>
                                <AnotherText>Single</AnotherText>
                            </FirstValue>
                        </IconText>
                        </Holder>
                    </Background>

                    <Background>
                        <Personal>
                            Professional background
                        </Personal>
                        <Holder>
                        <IconText>
                        <FirstValue>
                            <IconImage>< CgMail  /></IconImage>
                            <AnotherText>uchechinnorom9@gmail.com</AnotherText>
                         </FirstValue>
                         <FirstValue>
                            <IconImage>< TbCurrencyNaira  /></IconImage>
                            <AnotherText>300k upwards</AnotherText>
                         </FirstValue>
                         </IconText>
                            </Holder>
                            </Background>
                            <Circle>
                                <CircleHolder>
                                    <TextHolder>Cooperative</TextHolder>
                                    <TextHolder>Kind</TextHolder>
                                    <TextHolder>Reliable </TextHolder>
                                </CircleHolder>
                                <CircleHolder>
                                    <TextHolder>Creative</TextHolder>
                                    <TextHolder>Smart</TextHolder>
                                    <TextHolder>Organized</TextHolder>
                                </CircleHolder>
                            </Circle>
                </InnerWrapper>
            </Wrapper>
    )
}

export default Profile;

const Wrapper = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-family: sans-serif;
    padding: 15px 0px;

    @media (max-width: 1024px) {
        width: 50%;
        height: 100vh;
        padding: 20px 0px;
        align-items: flex-start;
        }
        @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`
const InnerWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 23px;
`
const ProfileDetail = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const ProfileImage = styled.div`
width: 130px;
height: 130px;
border-radius: 45px ;
border: 5px solid white;
box-shadow: 3px 3px 10px #5a5a5a;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 45px ;
    /* border-radius: 100%; */
    object-position: center;
}
`
const H1 = styled.h1`
font-size: 27px;
color: #3D65AA;
margin-top: 13px;
`
const B = styled.b`
font-size: 15px;
`
const Text = styled.p`
    font-size: 14px;
    font-style: italic;
    /* font-weight: 500; */
`

const Background = styled.div`
display: flex;
flex-direction: column;
`
const Personal = styled.b`
    font-size: 16px;
    color: #3D65AA;
`
const Holder = styled.div`
display:flex;
padding-top: 10px;
`
const IconText = styled.div`
width: 100%;
`
const FirstValue = styled.div`
/* width: 60%; */
gap: 10px;
/* background-color: #292929; */
display: flex;
margin-top: 3px;

`
const IconImage = styled.div`
width: 20px;
height: 20px;
color: #3D65AA;

`
const AnotherText = styled.p`
font-size: 14px;
font-weight: 500;
`
const Circle = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
@media (max-width: 480px) {
     flex-direction: row;
     justify-content: space-around;
     gap: 0px;
    }
`
const CircleHolder = styled.div`
display: flex;
justify-content: space-between;
gap: 5px;
@media (max-width: 480px) {
      flex-direction: column;
    }
    @media (max-width: 768px)  {
    justify-content: space-around;
}
`
const TextHolder = styled.div`
width: 130px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 30px;
background-color: #D5DDEA;
font-size: 13px;
color: #3D65AA;
font-weight: 600;

@media (max-width: 480px) {
    width: 100px;
       margin-top: 5px;
    }
    @media (max-width: 768px) {
    width: 120px;
    }
`






