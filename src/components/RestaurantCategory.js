import ItemList from "./ItemList";
import {useState} from "react"


const RestaurantCategory = ({data , showItems , setShowIndex , isClicked }) => {
    
    // console.log(dummy);
    // console.log(data)
    // const [showItems , setShowItems] = useState() ;


    

    const handleClick = () =>{
        setShowIndex();
       
        

    };
    
    return(
        <>

           <div className="w-6/12 mx-auto my-5 bg-gray-200 shadow-lg p-2 ">
           
           <div className="flex justify-between cursor-pointer" onClick={handleClick} >

           <span className="font-bold text-lg" >
            {data.title}({data.itemCards.length})
           </span>
           <span> ⬇️ </span>
           
           </div>

            { showItems && <ItemList  items={data.itemCards} />} 

           </div>

       

        </>

        

        



    )

      

}

export default RestaurantCategory;