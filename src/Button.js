import "./index.css";

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
      className="button"
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  )
}

export default Button