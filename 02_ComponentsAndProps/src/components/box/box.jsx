import "./box.css"
export default function Box({size="small",children, className, style, ...rest}) {
  let defaultClass=`box ${size === "small" ? "box-small" : size==="medium" ? "box-mid": size==="large" ? "box-large" : ""}`;

  return (
    <div 
    className={`${defaultClass} ${className ? className :""}`}
    style={{
      ...style,
      fontStyle:"italic"
    }}
    {...rest}
    children={children}
  ></div>
  )
}
