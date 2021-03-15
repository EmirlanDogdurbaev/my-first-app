import classes from "./Border.module.css";

const Border = ({ children }) => {
    return (
     <button className={classes.Border}>{children}</button>
    );
}
export default Border;