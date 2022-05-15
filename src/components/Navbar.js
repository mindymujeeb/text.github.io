import React from "react";

class navbar extends React.Component{
  render(){
    return(
      // navbar
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Text Manipulate</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;