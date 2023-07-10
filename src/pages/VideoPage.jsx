import { Save, Share, ThumbDown, ThumbUp } from "@mui/icons-material";
import { styled } from "styled-components";
import Comments from "../components/Comments";
import Card from "../components/Card"

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 4;
`;
const VideoWrapper = styled.div`
  flex: 4;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span``;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5 px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
display:flex;
gap:20px;

`;
const Image = styled.img`
height:50px;
width:50px;
border-radius:50%;
object-fit:cover;
`;
const ChannelDetail = styled.div`
display:flex;
flex-direction:column;
color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
font-weight:500;
`;
const ChannelCounter = styled.span`
margin-top:5px;
margin-bottom:10px;
color: ${({ theme }) => theme.textSoft};
font-size:12px;
`;
const ChannelDescription = styled.p`
font-size:14px;
`;
const Subscribe = styled.button`
background-color:#cc1a00;
color:white;
font-weight:500;
border:none;
border-radius:3px;
height:max-content;
padding:10px 20px;
cursor:pointer;
`;

const Recommendation = styled.div`
  flex: 1;
`;

const VideoPage = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/yIaXoop8gl4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,985,456 views - Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUp />
              123
            </Button>
            <Button>
              <ThumbDown />
              Dislike
            </Button>
            <Button>
              <Share />
              Share
            </Button>
            <Button>
              <Save />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/ytc/AOPolaToAOoB7zZaRe9kVmXGi6QWBBPrESpK8pcaWnBL=s48-c-k-c0x00ffffff-no-rj"/>
            <ChannelDetail>
              <ChannelName>LamaDev</ChannelName>
              <ChannelCounter>720,908</ChannelCounter>
              <ChannelDescription>
                Incididunt sit enim ullamco nostrud ad sint dolore exercitation
                id dolor esse aliquip ullamco amet. Irure sunt consequat
                reprehenderit id sit aliquip. Lorem laboris fugiat velit
                deserunt laboris ea ad commodo fugiat Lorem reprehenderit magna
                in magna. Do duis Lorem cupidatat aliquip voluptate occaecat.
              </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};

export default VideoPage;
