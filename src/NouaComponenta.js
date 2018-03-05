import React from 'react';

export class NouaComponenta extends React.Component {
  render() {
    return(
      <div>
        <input type="text" value={this.props.name} onChange={this.props.change} />
      </div>
    )
  }c
}
