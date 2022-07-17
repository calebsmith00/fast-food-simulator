import type { NextPage } from "next";
import Button from "../components/Utility/Button/Button";

const Home: NextPage = () => {
  return (
    <div className="py-5 text-center">
      <div className="text-2xl">
        Are you hungry? Awesome, that{"'"}s{" "}
        <span className="italic">exactly</span> what we
        {"'"}
        re here for!
      </div>

      <div className="py-5">
        <div>To get started, you will need to log in.</div>
        <Button className="btn-primary" text="Login" />
      </div>
    </div>
  );
};

export default Home;
