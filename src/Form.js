import Button from "./Button"
import "./index.css";

const Form = ({ reqType, setReqType }) => {
  return (
    <form 
      onSubmit={(e) => e.preventDefault()}
      className="form"  
    >
      <Button 
        buttonText="users"
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button 
        buttonText="posts"
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button 
        buttonText="comments"
        reqType={reqType}
        setReqType={setReqType}
      />
      
    </form>
  )
}

export default Form