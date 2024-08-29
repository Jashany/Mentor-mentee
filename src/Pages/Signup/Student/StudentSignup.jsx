import styles from "./StudentSignup.module.css";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import singup from "../../../assets/signup.png";
import backarrow from "../../../assets/backarrow.png";

const StudentSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    College: "",
    Year: "",
    linkedin: "",
    areaOfExpertise: [],
  });

  const [errors, setErrors] = useState({
    phoneNumber: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResumeUpload = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number";
      isValid = false;
    }

    // LinkedIn URL validation
    const urlRegex =
      /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/;
    if (!urlRegex.test(formData.linkedin)) {
      newErrors.linkedin = "Invalid URL";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAddExpertise = () => {
    if (
      formData.expertiseInput &&
      !formData.areaOfExpertise.includes(formData.expertiseInput)
    ) {
      setFormData({
        ...formData,
        areaOfExpertise: [...formData.areaOfExpertise, formData.expertiseInput],
        expertiseInput: "", // Clear input after adding
      });
    }
  };

  const handleRemoveExpertise = (expertise) => {
    setFormData({
      ...formData,
      areaOfExpertise: formData.areaOfExpertise.filter(
        (item) => item !== expertise
      ),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",

            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              height: "20px",
              cursor: "pointer",
            }}
            src={backarrow}
            alt=""
          />
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <h3>Student SignUp</h3>
          </div>
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyTop}>
          <h2>Registration Form</h2>
          <p>Fill up the details to continue</p>
        </div>
        <div className={styles.bodyMid}>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Ph No."
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <span className={styles.error}>{errors.phoneNumber}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="College"
                placeholder="College"
                value={formData.College}
                onChange={handleChange}
              />
              {/* DropDown */}
              <select name="Year" placeholder="Year">
                <option value="" disabled selected>
                  {" "}
                  Year
                </option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn"
                value={formData.linkedin}
                onChange={handleChange}
              />
              {errors.linkedin && (
                <span className={styles.error}>{errors.linkedin}</span>
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h4>Area of Expertise</h4>
              <div className={styles.expertiseInput}>
                <input
                  type="text"
                  style={{ width: "80%", marginTop: "0px" }}
                  name="expertiseInput"
                  placeholder="Add expertise"
                  value={formData.expertiseInput}
                  onChange={handleChange}
                />
                <button type="button" onClick={handleAddExpertise}>
                  Add +
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              <div className={styles.expertiseTags}>
                {formData.areaOfExpertise.map((expertise, index) => (
                  <span key={index} className={styles.tag}>
                    {expertise}
                    <button
                      type="button"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        marginBottom: "1px",
                        marginLeft: "5px",
                        fontSize: "12px",
                      }}
                      onClick={() => handleRemoveExpertise(expertise)}
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
              <button className={styles.signup} type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <img src={singup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StudentSignUp;
