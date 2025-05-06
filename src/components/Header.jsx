import React from 'react'
const Header = () => {
  return (
    <div>
      <h1 style={{
        fontFamily: 'Inter, sans-serif',
        fontSize:'1.5rem',
        fontWeight:'800',
        letterSpacing:'0',
        color: '#16A34A',
        position: 'absolute',
        top: '0',
        left: '0',
        padding: '1rem'
      }}
      >
        Nutri<span style = {{color: '#f97316'}}>Plan</span>
      </h1>
    </div>
  )
}

export default Header;