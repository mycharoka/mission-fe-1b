import PropTypes from "prop-types"

export function FormInput(props) {
  return (
    <>
    <div className=" flex flex-col">
      <label htmlFor={props.id} className="text-textlightprimary font-[500px] text-[18px] leading-[25.2px] tracking-[0.2px] mb-[4px] max-md:text-[10px] max-md:mb-[3px]">{props.label}</label>
      <input type="text" className="rounded-[24px] py-[14px] px-[20px] border-[1px] border-solid border-outlineborder font-normal text-[16px] leading-[22.4px] tracking-[0.2px] text-textlightsecondary bg-transparent w-full max-md:rounded-[24px] max-md:py-[7px] max-md:px-[10px] max-md:text-[9px] max-md:border-[0.5px]" placeholder={props.placeholder} id={props.id}/>
    </div>
    </>
  )
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}
