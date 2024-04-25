import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Tienda',
  description: 'Generated by create next app',
}
function Homelayout({children}) {
  return (
    <>
    <h3>secction tienda</h3>
    <nav>
        <ul>
            <li>
                <Link href="/tienda/categorias">categorias</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="/tienda/productos">productos</Link>
            </li>
        </ul>
    </nav>
    {children}
    </>
  )
}

export default Homelayout