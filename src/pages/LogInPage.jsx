import React, { useState } from "react";
import Page from "../components/Page";
import { authActionCreators } from "../redux/slices/auth.slice";
import { useDispatch } from "react-redux";
import authAPI from "../api/auth.api";

function LogInPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //함수는 동사형
  const handleClickLogin = async () => {
    if (!id || !password) return alert("ID와 Password를 입력해주세요");

    const response = await authAPI.logIn({ id, password });
    const data = response.data;
    const payload = {
      id: data.userId,
      nickname: data.nickname,
      avatar: data.avatar,
      accessToken: data.accessToken,
    };

    const loginAction = authActionCreators.logIn(payload);
    //액션 (작업지시서) 은 디스패치해서 리듀서(공장)로 보낸다.
    dispatch(loginAction);
  };

  return (
    <Page title="로그인">
      <input
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
        type="text"
        placeholder="ID 입력해주세요"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="PassWord 입력해주세요"
      />
      <button onClick={handleClickLogin}>로그인하기</button>
    </Page>
  );
}

export default LogInPage;
