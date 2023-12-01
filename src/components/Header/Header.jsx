const Header = ({data,event}) =>{
    return (
        <div>
            <h1>Product List</h1>
            <div>
            {data.map((item,index)=>{
               return(
                    <button onClick={event} key={index}>{item.toUpperCase()}</button>
               )
            })}
            </div>
        </div>
    )
}

export default Header;