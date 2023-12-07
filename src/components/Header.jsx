import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Logo to="/">인증 연습하기</Logo>

      <Controls>
        <Link to="/log-in">로그인</Link>
        <Link to="/sign-up">회원가입</Link>
      </Controls>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  height: 60px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: black !important;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;
