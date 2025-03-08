import PropTypes from "prop-types"
export function GoogleLoginButton(props) {
  return (
    <button className="bg-transparent w-full py-[14px] px-[20px] rounded-[24px] border-[1px] border-solid border-outlineborder text-textlightprimary font-semibold text-[16px] leading-[22.4px] tracking-[0.2px] flex items-center justify-center max-md:py-[7px] max-md:px-[10px] max-md:rounded-[20px] max-md:text-[10px]">
      <img src="../../../src/assets/google-icon.png" alt="google-icon" className="w-[18px] h-auto"/>
      {props.name}
    </button>
  )
}

GoogleLoginButton.propTypes = {
  name: PropTypes.string
}
