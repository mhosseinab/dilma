import { Paper } from "@mui/material";
import RtlTextField from "components/dashboard/UI/RtlTextField";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/superUser/Layout";

const Auth = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();

  return (
    <Layout>
      <Container>
        <Paper className="container">
          <h4>ورود دیلما کار</h4>
          <RtlTextField
            setValue={setUsername}
            value={username}
            title="نام کاربری"
            color="#333"
          />
          <RtlTextField
            setValue={setPassword}
            value={password}
            title="رمز عبور"
            color="#333"
          />
          <button onClick={() => router.push("/admin/requests")}>
            ورود
          </button>
        </Paper>
        <p>رمز عبور را فراموش کردەاید؟</p>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100vh;
  .container {
    padding: 4em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    justify-content: center;
    button {
      background-color: #f79624;
      color: #fff;
      padding: 0.5em 2em;
      border-radius: 4px;
    }
  }
  p {
    color: #f79624;
    padding: 1em 0;
    cursor: pointer;
  }
`;

export default Auth;
