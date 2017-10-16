import React from 'react'

class GridColumn extends React.Component {
  render() {
    return (
      <div className={columnClass} >
        {props.children}
      </div>
    )
  }
}

export default GridColumn