import classes from "./Dotted.module.css";

const Dotted = ({ children }) => {
    return (
     <button className={classes.Dotted}>{children}</button>
    );
}
export default Dotted;