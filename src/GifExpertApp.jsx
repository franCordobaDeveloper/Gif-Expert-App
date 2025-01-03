import { useState } from "react";


export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One punch', 'Dragon ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'valorant']);
    };
  
    return (
    <>
        <h1>Gif Expert App</h1>

        <button onClick={ onAddCategory }>Agregar</button>
        <ol>
            { categories.map( category => {
                return <li key={ category}>{ category}</li>
            })}
            
        </ol>
    </>
  )
}
