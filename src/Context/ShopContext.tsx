import React, { createContext, useEffect, useState } from 'react'
import all_product from '../components/Assets/all_product'

import { IProduct } from '../interface/Product'
import { toast } from 'react-toastify'
// import { redirect, useNavigate } from 'react-router-dom'

// const navigate = useNavigate()

export const ShopcontextMain = createContext({} as any)

const ShopContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [product, setProduct] = useState<IProduct | null>(null)

    useEffect(() => {
        (async () => {
            try {
                const data = await (await fetch(`http://localhost:3000/products`)).json()
                console.log(data);
                setProducts(data)
            } catch (error) {

            }
        })()
    }, [])

    const addProduct = async (product: IProduct) => {
        try {
            const data = await (await fetch(`http://localhost:3000/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })).json()

            console.log("data", data);
            setProducts([...products, product])
            // navigate('/admin/add-product')
            window.location.href = '/admin'
        } catch (error) {

        }
    }
    const getProduct = async (id: number) => {
        try {
            setProduct(await (await fetch(`http://localhost:3000/products/${id}`)).json())
        } catch (error) { }
    }

    const updateProduct = async (product: IProduct) => {
        try {
            const newProduct = await (await fetch(`http://localhost:3000/products/${product.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })).json()

            console.log("data", newProduct);

            const data = products.map((product) => (product.id === newProduct.id ? newProduct : product))
            setProducts(data)

            getProduct(newProduct.id)


        } catch (error) {

        }
    }

    const deleteProduct = async (id: number) => {
        try {
            await fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE'
            })

            const updateProduct = products.filter((product) => product.id !== id)
            setProducts(updateProduct)
            toast.success("Xóa sản phẩm thành công =))))")
        } catch (error) {

        }
    }

    const contextValue = { products, deleteProduct, addProduct, updateProduct, getProduct }
    return (
        <>
            <ShopcontextMain.Provider value={contextValue}>
                {children}
            </ShopcontextMain.Provider>
        </>
    )
}

export default ShopContextProvider
