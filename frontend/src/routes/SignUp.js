import Navbar from "../components/Navbars/signinPageNavbar.js";
import InputField from "../components/FormFields/input.js";
import Button from "../components/Buttons/button.js";

// Styles
import "../styles/signin.scss";

function SignIn() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <h2>Get Started</h2>
          <form action="users/register" method="post">
            <InputField
              type={"text"}
              name={"name"}
              id={"name"}
              label={"Name"}
              placeholder={"Enter your Name"}
              required={true}
            />

            <InputField
              type={"email"}
              name={"email"}
              id={"email"}
              label={"Email"}
              placeholder={"Enter your Email"}
              required={true}
            />

            <InputField
              type={"password"}
              name={"password"}
              id={"password"}
              label={"Password"}
              placeholder={"Enter your Password"}
              required={true}
            />

            <p className="privacy-policy">
              By clicking on Agree and Continue, you agree to careersthan's{" "}
              <a href="#">Privacy Policy</a>
            </p>

            <Button
              type={"submit"}
              label={"Agree and Continue"}
              classes={"btn signInButton"}
            />
          </form>

          <div className="alternative-signin">
            <p>Or continue with</p>
            <div className="icons flex">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-microsoft"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
                </svg>
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                </svg>
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>

            <p class="signup-link">
              Already have an account? <a href="/signin">Sign in</a>
            </p>
          </div>
        </div>

        <div className="background">
          <img src="icons/signin-bg.svg" alt="" />
        </div>
      </main>
    </>
  );
}

export default SignIn;
