import React, { Fragment, useCallback, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
} from "../../../node_modules/@mui/material/index";
import { deepPurple } from "@mui/material/colors";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import axios from "../../../node_modules/axios/index";
import useCookies from "../../../node_modules/react-cookie/cjs/useCookies";

const LoginForm = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [cookies, setCookie] = useCookies(["authorization"]); // 쿠키 훅

  const handleLogin = useCallback(
    event => {
      event.preventDefault(); // form의 기본 제출 동작을 막음
      axios
        .post(
          "/login",
          {
            username: id,
            password: pw,
          },
          {
            headers: { "Content-type": "application/json" },
          }
        )
        .then(response => {
          console.log(response);
          console.log(response.headers);
          console.log(response.headers.authorization);
          setCookie("authorization", response.headers.authorization);
        })
        .catch(error => {
          if (error.response) {
            // 서버가 에러 상태 코드와 함께 응답했을 때
            alert(`Error: ${error.response.status}`);
          } else if (error.request) {
            // 요청이 성공적으로 이루어졌지만, 응답을 받지 못했을 때
            alert("Error: No response from the server");
          } else {
            // 다른 오류가 발생했을 때
            alert(`Error: ${error.message}`);
          }
        });
    },
    [id, pw]
  );

  return (
    <Fragment>
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          minHeight: "90vh",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 300,
            height: 300,
            backgroundColor: deepPurple[200],
          }}>
          <form onSubmit={handleLogin}>
            <TextField
              required
              id="id"
              label="아이디"
              style={{ margin: "10px" }}
              value={id}
              onChange={e => setId(e.target.value)}
            />
            <TextField
              required
              id="pw"
              type="password"
              label="패스워드"
              style={{ margin: "10px" }}
              value={pw}
              onChange={e => setPw(e.target.value)}
            />
            <Box style={{ display: "flex", margin: "10px" }}>
              <Button
                type="submit"
                variant="contained"
                style={{ margin: "5px" }}>
                로그인
              </Button>
              <Button
                variant="contained"
                style={{ margin: "5px" }}
                onClick={() => {
                  navigate("/registerForm");
                }}>
                회원가입
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Fragment>
  );
};

export default LoginForm;
