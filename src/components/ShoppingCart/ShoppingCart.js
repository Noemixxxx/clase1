import { useLiveQuery, } from 'dexie-react-hooks';
import {NavDropdown,Nav, Navbar, } from 'react-bootstrap'
import db from '../../app/db/db';
import React,{useState, useEffect} from 'react';
import { ShoppingCartitem } from './ShoppingCartitem'




export const ShoppingCart = () =>{
    const [productsCart, setProductsCart]= useState ([])
const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = () =>{
        const total = productsCart?.reduce((prevProduct, currentProduct)=>{
            debugger
           return Number(prevProduct.price) + Number(currentProduct.price)
        })
        setTotalPrice(total)
    }

    useLiveQuery(async()=>{
        const productsDB = await db.cart.toArray()
        setProductsCart(productsDB)
    },[])
    useEffect(()=>{
        if(productsCart.length > 0){
            getTotalPrice()
        }
    },[productsCart] )

return(
    <>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example" >
        <Nav>
            <NavDropdown
            id="nav-drapdows-dark-example"
            title="Carrito"
            menuVariant='dark'
            >
                {productsCart ?.map((Product) => {
                    console.log(Product)
                    return <ShoppingCartitem key={Product.id} item={Product} />
                } )}
                <NavDropdown.Divider/>
                <NavDropdown.Item>Total: ${totalPrice}</NavDropdown.Item>
            </NavDropdown>
        </Nav>
     </ Navbar.Collapse>
     </>
);
};