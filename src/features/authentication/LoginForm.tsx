import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";

import { GrGamepad } from "react-icons/gr";

import Input from "../../components/Input";
import Button from "../../components/Button";
import FormRow from "../../components/FormRow";

import { useAuth } from "../../context/AuthContext";

type FormLoginType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormLoginType>({
    email: "",
    password: "",
  });
  const { loginApiCall } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password || !isChecked) {
      alert("test");
      return;
    }
    await loginApiCall({ email, password });
    navigate("/");
  };

  return (
    <section className="bg-slate-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex flex-col items-center mb-6 text-2xl font-logo font-semibold text-[#219ebc] "
        >
          <GrGamepad size={50} />
          Gaming Store
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#219ebc] md:text-2xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <FormRow label="Email Address">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormRow>
              <FormRow label="Password">
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormRow>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      name="remember"
                      aria-describedby="remember"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      checked={isChecked}
                      onChange={() => {
                        setIsChecked(!isChecked);
                      }}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/"
                  className="text-sm font-medium text-[#219ebc] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Button variant="primary" color="#219ebc">
                Sign In
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <Link
                  to="/register"
                  className="font-medium text-[#219ebc] hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
