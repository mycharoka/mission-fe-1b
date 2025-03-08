import PropTypes from "prop-types";
export function AuthButton(props) {
  return (
    <button type="button" className="bg-extrabackground w-full py-[14px] px-[20px] rounded-[24px] border-[1px] border-solid border-outlineborder text-textlightprimary font-semibold text-[16px] leading-[22.4px] tracking-[0.2px] max-md:py-[7px] max-md:px-[10px] max-md:rounded-[20px] max-md:text-[10px]">{props.name}</button>
  )
}

AuthButton.propTypes = {
  name: PropTypes.string
}