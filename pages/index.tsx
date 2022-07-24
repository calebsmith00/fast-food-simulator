import type { NextPage } from "next";
import Button from "../components/Utility/Button/Button";
import Header from "../components/Utility/Header";

const Home: NextPage = () => {
  return (
    <div className="py-5 text-center">
      <Header content="Are you hungry?" />
      <div>To get started, you will need to log in.</div>
      <Button className="btn-primary" text="Login" />
    </div>
  );
};

export default Home;
