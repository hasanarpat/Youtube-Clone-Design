import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: ${(props)=>props.type ==="sm" ? "100%" : "360px"};
  margin-bottom: ${(props)=>props.type ==="sm" ? "10px" : "45px"};
  cursor: pointer;
  display:${(props)=>props.type ==="sm" && "flex"};
  gap:10px;
`;
const Image = styled.img`
  width: 100%;
  height: ${(props)=>props.type ==="sm" ? "120px" : "202px"};
  background-color: #999;
  object-fit:contain;
  flex:7;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props)=>props.type !=="sm" && "16px"};
  gap: 12px;
  flex:5;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
  display:${(props)=>props.type ==="sm" && "none"};
`;
const Texts = styled.div``;
const Title = styled.h1`
  margin-top: 0px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;

  color: ${({ theme }) => theme.textSoft};
`;
const Card = ({type}) => {

  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
      <Container type={type}>
        <Image src="https://i.ytimg.com/vi/m2gdCjrksgQ/maxresdefault.jpg" type={type}/>
        <Details type={type}>
          <ChannelImage src="https://yt3.ggpht.com/ytc/AOPolaToAOoB7zZaRe9kVmXGi6QWBBPrESpK8pcaWnBL=s48-c-k-c0x00ffffff-no-rj" type={type}/>
          <Texts>
            <Title>Test</Title>
            <ChannelName>John Doe</ChannelName>
            <Info>669,007 views - 1 min ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
