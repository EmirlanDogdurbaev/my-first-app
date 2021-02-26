function Bigger(props) {
let a = props.a;
let b = props.b; 
let c;
if(a > b){
    c = a
}
else if (a < b){
    c = b
}
return (
    <div>
        <p>{c} </p>
    </div>
    )}
export default Bigger;
