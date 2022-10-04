import React from "react";
import './Login.style.scss'
const Login = () => {
  return (
    <>
        <div className="login-container">
            <div className="login">
                <form action="">
                    <h1>صفحه عضویت</h1>
                    <label className="login-lable" for="firstname">نام کاربری</label>
                    <input type="text" name="firstname" placeholder="&#61447;  ..." />
                    <label className="login-lable" for="password">رمز ورود</label>
                    <input type="text" name="password" placeholder="&#61475;  ..."/>
                    <a href=""> رمز خود را فراموش کرده اید؟
                    </a>
                    <input type="submit" name="submit" value="ورود" />
                    <div className="icon">
                        <a href="#" class="facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="google">fgh</a>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
};

export default Login;
