import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextProvider/ContextProvider'
import { Footer, ProductCard } from '../../Components'
import './HomePage.css'
import FotoGuitarra from '../../Assets/Img/FotoGuitarra.png'


const HomePage = () => {
    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [currentProducts, setCurrentProducts] = useState(products)
    
    useEffect(()=>{
        setCurrentProducts(products.filter(producto => producto.categoria.toLowerCase().includes(searchProduct.toLowerCase())
        ))
    },[searchProduct])
    return (        
        <main className='homePageContainer'>
            <div className='containerGibson'>
                <div className='titulos'>
                    <h1>Gibson Store</h1>
                    <h2>Guitar World</h2>
                </div>
                <div className='containerImagenPrincipal'>
                    <img src={FotoGuitarra} />
                </div>
                <div className='containerInput'>
                    <i className="bi bi-search"></i>
                    {<input className='inputHomePage' type="text" placeholder='Search Category...' value={searchProduct} onChange={(e)=>setSearchProduct(e.target.value)} />}
                </div>
            </div>
            <div className='colorCardContainer'>
                <div className='colorCardInfo'>
                    {
                        currentProducts.length > 0
                        ?
                        currentProducts.map(producto => (
                        <ProductCard producto={producto} key={producto.id}/>
                        ))
                        :
                        <h2 className='h2NingunProducto'>No products found...</h2>
                    }
                </div>
            </div>
            <Footer/>
        </main>    
    )
}

export default HomePage