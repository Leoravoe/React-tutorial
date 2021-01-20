import {useState} from 'react'


const Home = () => {
    const [name , setName] = useState('preetam')
    const [age , setAge] = useState(21)
    const clicking = ()=>{
        setName('Preetam Sarkar')
        setAge(22)
    }
    const click = (name)=>{
        console.log("hello i m "+name + " again")
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={clicking}>click me</button>
            <button onClick={()=>{
                click("preetam")
            }}>click me</button>
        </div>
     );
}
 
export default Home;