const Home = () => {
    const clicking = ()=>{
        console.log("Hello i m preetam")
    }
    const click = (name)=>{
        console.log("hello i m "+name + " again")
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={clicking}>click me</button>
            <button onClick={()=>{
                click("preetam")
            }}>click me</button>
        </div>
     );
}
 
export default Home;