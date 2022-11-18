import "./index.css";

const Button = ({ reqType, setReqType }) => {
  return (
    <button
      className="button"
    >
      {setReqType}
    </button>
  )
}

export default Button