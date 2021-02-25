function Bigger(props) {
let a
let b 
if(a > b){
    return props.a
}
else if (a < b){
    return props.b
}
return (
    <div>
        <p>{props.a < props.b || props.b < props.a} </p>
    </div>
    )}
export default Bigger;
