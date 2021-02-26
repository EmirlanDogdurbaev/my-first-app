   
    function Water(props) {
        let water = "water";
            if(props.frozen){
                water = "ice";
            }
                return (
                    <div>
                        <p>{water}</p>
                    </div>
                )}

    export default Water;