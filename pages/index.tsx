import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Button from "../components/Utility/Button/Button";
import Header from "../components/Utility/Header";

const Home: NextPage = () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  return isLoading ? (
    <div className="py-5 text-center">One moment while we fetch your data</div>
  ) : (
    <div className="py-5 text-center">
      {user ? (
        <p>
          {user.nickname} can be reached at {user.email}
        </p>
      ) : (
        <>
          <Header text="Are you hungry?" />
          <div>To get started, you will need to log in.</div>
          <Button
            className="btnPrimary"
            text="Login"
            handleEvent={(event: MouseEvent<HTMLButtonElement>) => {
              event.preventDefault();
              return router.push("/api/auth/login");
            }}
          />
        </>
      )}
    </div>
  );
};

export default Home;
