import Button from "./Button"
import "./index.css";

const Form = ({ reqType, setReqType }) => {
  return (
    <form 
      onSubmit={(e) => e.preventDefault()}
      className="form"  
    >
      <Button 
        buttonText="USERS"
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button 
        buttonText="POSTS"
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button 
        buttonText="COMMENTS"
        reqType={reqType}
        setReqType={setReqType}
      />
      
    </form>
  )
}

export default Form