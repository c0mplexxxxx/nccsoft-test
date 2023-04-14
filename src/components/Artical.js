import React from 'react'

const Artical = (props) => {
  return (
    <div className="artical-wrapper">
      <h3>Lorem ipsum dolor sit amet</h3>
      <img src={props.image} alt="icon1" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
    </div>
  )
}

export default Artical