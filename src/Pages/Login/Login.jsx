import styles from './Login.module.css';
import logo from '../../assets/logo.png';
import backarrow from '../../assets/backarrow.png';
import { useState } from 'react';


const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        // Email validation
        const emailRegex =
          /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = "Enter a valid email";
          isValid = false;
        }
    
        // Password validation
        if (formData.password.length < 8) {
          newErrors.password = "Password must be at least 8 characters long";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log(formData);
        }
      };

    return ( 
       <div className={styles.main}>
         <div className={styles.header}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",

          justifyContent: "space-between",
        }}>
          <img style={{
            height: "20px",
            cursor: "pointer",
          }} src={backarrow} alt="" />
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <h3>Login</h3>
          </div>
        </div>
        <div style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
        }}>
          <button>Student SignUp</button>
          <button>Mentor SignUp</button>
        </div>
      </div>
      <div className={styles.body}>
        <h3>Login</h3>
        <form  onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" onChange={handleChange} id="password" />
          </div>
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
       </div>
     );
}
 
export default Login;