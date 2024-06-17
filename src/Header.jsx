import React from 'react'

function Header() {
    const image = <img src='./src/assets/fortnite-korra-social-1920x1080-86a8c7eaabb9.jpeg' id="banner"/>
    const name = <h1 id="name">Avatar Korra</h1>
  return (
    <div id="header">
      {image}
      {name}
    </div>
  )
}

export default Header
