import { AuthButton } from "../auth-button";
import { GoogleLoginButton } from "../login-google-button";
import PropTypes from "prop-types";

export function AuthSection(props) {
  return (
    <div className="flex flex-col justify-center items-center mt-[37px] w-full max-md:mt-[20px]">
      <AuthButton name={props.name}/>
      <p className="m-[8px] font-medium text-[14px] leading-[19.6px] tracking-[0.2px] text-textlightdisabled max-md:text-[10px] max-md:m-[4px]">Atau</p>
      <GoogleLoginButton name={props.googleAction}/>
    </div>
  )
}

AuthSection.propTypes = {
  name: PropTypes.string,
  googleAction: PropTypes.string
}
