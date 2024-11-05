import { useContext, useEffect, useState } from "react";

import LoginForm from "../../login/login-form";
import Skeleton from "../../shared/skeleton";

// import girlSittingImg from "../../assets/images/girl-sitting.svg";

function Loginpage() {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData((s) => ({ ...s, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <Skeleton>
      <div className="flex w-full flex-row items-center justify-evenly h-full">
        <div className="flex w-1/5 flex-col items-start justify-center pb-[10%]">
          {/* <img src={girlSittingImg} alt="girl-sitting" /> */}
          <div>
            <h1 className="font-lora text-6xl font-bold text-[#0449D1]">
              Sign in
            </h1>
            <h1 className="font-lora text-3xl font-semibold text-[#0F0F2C]">
              Welcome Back.
              <br />
              Continue your EurekAI journey and unlock personalized research
              insights.
            </h1>
          </div>
        </div>
        <LoginForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          err={error}
          loading={loading}
        />
      </div>
    </Skeleton>
  );
}

export default Loginpage;
