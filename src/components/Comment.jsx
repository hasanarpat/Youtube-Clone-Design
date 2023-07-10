import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
font-size:13px;
font-weight:500;`;

const Date = styled.span`
font-size:12px;
font-weight:400;
color: ${({theme})=>theme.textSoft};
margin-left: 5px;
`;

const Text = styled.span`
font-size:14px;
`;
const Comment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/ytc/AOPolaToAOoB7zZaRe9kVmXGi6QWBBPrESpK8pcaWnBL=s48-c-k-c0x00ffffff-no-rj" />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Nisi qui et exercitation velit in qui tempor aute sint aute elit.
          Consectetur quis anim magna mollit culpa adipisicing. Excepteur
          pariatur do est ullamco culpa laborum qui nisi. Nulla ut deserunt
          voluptate enim excepteur et esse id ut.Occaecat proident laborum do
          velit velit incididunt nostrud ullamco enim eu sunt. Pariatur sunt
          reprehenderit exercitation non deserunt nulla sint mollit aliquip
          nisi.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
