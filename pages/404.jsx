import React from 'react'
import Link from "next/Link";
// import Link from 'next'
const NotFound = () => {
  return (
    <div className="text-center">
    <h1>Oooops...</h1>
    <h2>That page cannot be found.</h2>
    <p>
      Go back to the{" "}
      <Link  href="/" className='text-danger'>
        Homepage
      </Link>
    </p>
  </div>
  )
}

export default NotFound