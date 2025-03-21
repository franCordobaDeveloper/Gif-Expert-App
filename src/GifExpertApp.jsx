import { useState } from "react";
import { AddCategory, GifGrid } from "./components";




export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = ( newCategory ) => {
        
        if( !newCategory.trim() ) return;

        const newCategoryLower = newCategory.toLowerCase();

        if(categories.some(cat => cat.toLowerCase() === newCategoryLower)) return;

        setCategories([newCategory, ... categories]);
    };
  
    return (
        <>

            <h1>GifExpertApp</h1>   
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
        </>
    )
}
