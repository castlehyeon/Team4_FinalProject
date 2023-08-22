import React, { Fragment, useCallback, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
} from "../../../node_modules/@mui/material/index";
import { deepPurple } from "@mui/material/colors";
import axios from "../../../node_modules/axios/index";
import { Navigate } from "../../../node_modules/react-router-dom/dist/index";

const RegisterForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const join = useCallback(
    value => {
      axios
        .post(
          "/api/v1/join",
          {
            username: id,
            password: pwConfirm,
          },
          {
            headers: { "Content-type": "application/json" },
          }
        )
        .then(response => {
          console.log(response.data);
          setShouldNavigate(true);
        });
    },
    [id, pwConfirm]
  );

  const handleClick = () => {
    console.log("id:" + id);
    console.log("pw:" + pw);
    console.log("pw_conform:" + pwConfirm);

    if (pw != pwConfirm) {
      alert("비밀번호를 확인하세요.");
    } else if (!id || !pw) {
      alert("id,pw는 필수입력 입니다.");
    } else {
      join();
      alert("회원가입 완료");
    }
  };

  if (shouldNavigate) {
    return <Navigate to="/" />;
  }

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
          <TextField
            required
            id="pw_conform"
            type="password"
            label="패스워드확인"
            style={{ margin: "10px" }}
            value={pwConfirm}
            onChange={e => setPwConfirm(e.target.value)}
          />
          <Box style={{ display: "flex", margin: "10px" }}>
            <Button
              variant="contained"
              style={{ margin: "5px" }}
              onClick={handleClick}>
              회원가입
            </Button>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default RegisterForm;
