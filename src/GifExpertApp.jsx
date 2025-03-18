import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One punch', 'Dragon ball']);

    const onAddCategory = ( newCategory ) => {
        
        if( !newCategory.trim() ) return;

        const newCategoryLower = newCategory.toLowerCase();

        if(categories.some(cat => cat.toLowerCase() === newCategoryLower)) return;

        setCategories([newCategory, ... categories]);
    };
  
    return (
    <>
        <h1>Gif Expert App</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory = { value => onAddCategory(value) }
        />

        
        <ol>
            { categories.map( category => {
                return <li key={ category}>{ category}</li>
            })}
            
        </ol>
    </>
  )
}
