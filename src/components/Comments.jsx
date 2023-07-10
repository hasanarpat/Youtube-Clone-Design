import { styled } from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
display:flex;
align-items:center;
gap:10px;
`;

const Avatar = styled.img`height:50px;
width:50px;
border-radius:50%;
object-fit:cover;`;
const Input = styled.input`
border:none;
border-bottom:1px solid ${({ theme }) => theme.soft} ;
background:transparent;
outline:none;
padding:5px;
width:100%;
color:${({ theme }) => theme.text} ;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://yt3.ggpht.com/ytc/AOPolaToAOoB7zZaRe9kVmXGi6QWBBPrESpK8pcaWnBL=s48-c-k-c0x00ffffff-no-rj"/>
        <Input placeholder="Add a comment..."/>
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  );
};

export default Comments;
