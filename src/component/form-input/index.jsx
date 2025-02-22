import PropTypes from "prop-types"


export function FormInput(props) {
  return (
    <>
    <div className=" flex flex-col">
      <label htmlFor={props.id} className="text-textlightprimary font-[500px] text-[18px] leading-[25.2px] tracking-[0.2px] mb-[4px]">{props.label}</label>
      <input type="text" className="rounded-[24px] py-[14px] px-[20px] border-[1px] border-solid border-outlineborder font-normal text-[16px] leading-[22.4px] tracking-[0.2px] text-textlightsecondary bg-transparent w-[450px]" placeholder={props.placeholder}/>
    </div>
    </>
  )
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}
