import React from 'react'
import Link from 'next/link'
function NotFound() {
  return (
    <section>
        <h1>404</h1>
        <p>Page not fount</p>
        <Link href="/">Volver</Link>
    </section>
  )
}

export default NotFound