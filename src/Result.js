import "./index.css";
import ListItem from "./ListItem";

const Result = ({ items }) => {
  return (
    <ul className="result">
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
      <li>
         
      </li> 
    </ul>
  )
}

export default Result