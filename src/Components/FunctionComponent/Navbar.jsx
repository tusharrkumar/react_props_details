
function Navbar(props) {
    console.log(props);
    return (
    <>
        <h1>Navbar Function Component</h1>
        <h1>children props >>> {props.children}</h1>
        <h2>1st props >> Name : {props.data}</h2>
        <h2>2nd props >> Age : {props.data1}</h2>

        <h2 style={{color:"red"}}>My name is {props.details.name} and age is {props.details.age}</h2>
    </>
)
}

export default Navbar;