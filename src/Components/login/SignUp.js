import { useState } from "react";
import { Link } from "react-router-dom";
import signupImg from "../../images/signup.gif";

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState("null");
  const [previewURL, setSetPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="px-5 xl:px-0">
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
            <h3 className="text-headingColor text-22 leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  className="w-full pr-4 py-3 border-b border-solid borderb focus:outline-none focus:border-b-primaryColor text-16 leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  placeholder="Full Name"
                  name="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  className="w-full pr-4 py-3 border-b border-solid borderb focus:outline-none focus:border-b-primaryColor text-16 leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
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
                  className="w-full pr-4 py-3 border-b border-solid borderb focus:outline-none focus:border-b-primaryColor text-16 leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  placeholder="Passowrd"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex items-center mb-5 justify-between">
                <label className="font-bold text-16 leading-7 text-headingColor">
                  Are you a:
                  <select
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-15 leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label className="font-bold text-16 leading-7 text-headingColor">
                  Gender:
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-15 leading-7 px-4 py-3 focus:outline-none"
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
                  className="btn bg-primaryColor w-full px-4 py-3 text-16 leading-30 rounded-lg"
                >
                  Sign Up
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
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
