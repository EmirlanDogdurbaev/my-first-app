import classes from "./Solid.module.css";

const Solid = ({ children }) => {
    return (
     <button className={classes.Solid}>{children}</button>
    );
}
export default Solid;