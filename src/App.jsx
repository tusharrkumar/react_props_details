
import Logo from "./Components/ClassComponent/Logo";
import Navbar from "./Components/FunctionComponent/Navbar";

function App(){
  let name = "Rocky";
  let fruits = ["apple", "mango", "orange", "banana"]
  return(
    <>
      <Navbar data={name} data1="25" details={{name:"Tushar",age:25}}>Hii..good morning!!!</Navbar>

      <Logo name="Siri" fruits={fruits}/>
    </>
  )
}

export default App;
