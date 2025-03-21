/* eslint-disable react/prop-types */
export function ProfileInput(props) {
  return (
    <>
    <div className="rounded-[8px] border-[1px] border-[#E7E3FC3B] bg-paperbackground text-textlightprimary">
      <p className="text-textlightdisabled font-semibold text-[16px]">{props.field}</p>
      <input type="text" className="w-full bg-transparent placeholder-slate-200" value={props.value} onChange={props.onChange}/>
    </div>
    <img src="" alt="" />
    </>
  )
}