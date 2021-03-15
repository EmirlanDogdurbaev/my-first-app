import classes from "./Dashed.module.css";

const Dashed = ({ children }) => {
    return (
     <button className={classes.Dashed}>{children}</button>
    );
}
export default Dashed;