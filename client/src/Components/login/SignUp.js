import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import signupImg from "../../images/signup.gif";
import { authenticateSignup } from "../../service/api";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import Cookies from "js-cookie";

const SignUp = () => {
  const { setToken, setEmail } = useContext(DataContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName : "",
    email : "",
    password : "",
    gender : "",
    // role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("formdata : " + formData)
    let res = await authenticateSignup(formData)
    const email = formData.email;
      const auth_token = res.data.auth_token
      if(res.status === 200){
          const userData = {
              email,
              auth_token
          }; 
          Cookies.set('auth_token', JSON.stringify(userData), { expires: 1 });
          setEmail(email);
          setToken(auth_token)
          navigate('/')
      }
  };

  return (
    <section className="px-5 xl:px-0 mt-10">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ============== img box =============== */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="gif" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* ============== sign up form ============ */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form onSubmit={(e)=>submitHandler(e)}>
              <div className="mb-5">
                <input
                  type="text"
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  placeholder="Passowrd"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex items-center mb-5 justify-between">
                <label className="font-bold text-[16px] leading-7 text-headingColor">
                  Gender:
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="btn bg-[#252bdd] text-white w-full px-4 py-3 text-[16px] leading-[30px] rounded-lg"
                >
                  Sign Up
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-[#343efd] font-medium ml-1">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
