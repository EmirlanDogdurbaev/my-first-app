import classes from "./Romb.module.css";

const Romb = ({ children }) => {
    return (
     <button className={classes.Romb}>{children}</button>
    );
}
export default Romb;