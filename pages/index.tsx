import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import Button from "../components/Utility/Button/Button";
import Header from "../components/Utility/Header";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="py-5 text-center">
      <Header text="Are you hungry?" />
      <div>To get started, you will need to log in.</div>
      <Button
        className="btn-primary"
        text="Login"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          return router.push("/login");
        }}
      />
    </div>
  );
};

export default Home;
