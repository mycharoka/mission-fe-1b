/* eslint-disable react/prop-types */
export function ProfileInput(props) {
  return (
    <>
    <div className="rounded-[8px] border-[1px] border-[#E7E3FC3B] bg-paperbackground">
      <p className="text-textlightdisabled font-semibold text-[16px]">{props.field}</p>
      <input type="text" placeholder={props.placeholder} className="w-full bg-transparent placeholder-slate-200"/>
    </div>
    <img src="" alt="" />
    </>
  )
}