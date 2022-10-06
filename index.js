function Header(){
    return(
        <h1>Fun facts about React</h1>
    )
}

function List(){
    return(
        
            
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
    )
}

function Temp(){
return (
    <div>
          <Header /> 
          <List />
        </div>
)
}

//ReactDOM.render(tp, document.getElementById("pops"))
// the above code is vaild till react 17

//ReactDOM.createRoot(document.getElementById("pops")).render(temp())
//logically the upper part of the code is correct but generally there are some conventions needed to be followed in react as follows

ReactDOM.createRoot(document.getElementById("pops")).render(<Temp />)