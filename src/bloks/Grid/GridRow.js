import React from 'react'

class GridRow extends React.Component {
  render() {
    return (
      <div className={rowClass} >
        {props.children}
      </div>
    )
  }
}

export default GridRow