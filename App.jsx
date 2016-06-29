import React from 'react';

class App extends React.Component {


constructor(props) {
     
   super(props)
      this.state = {
         data: 'Initial data...'
      } //super ends here..
      
   this.updateState = this.updateState.bind(this);

   }; //constructor ends..

   updateState(i) {
      this.setState({data: i.target.value});
   }

  //updateChange() {
    //  this.setState({data: 'Data updated...'});
   //}

   render() {
      return (
         <div>
            <Header/>
            <p><textarea value = {this.state.data} 
               onChange = {this.updateState} /></p>
            <p>{this.state.data}</p>          
            <ProductList/>
            <Content/>
            <Ubox/>
            <p>{this.props.pro}</p>
         </div>
      );
   }
}

//end of class App ....




var ProductList = React.createClass({
    render: function () {

    var myStyle1 = {
         fontSize: 20,
         color: '#aa0000',
      }   
        return (
            <div className="container">
                <div style = {myStyle1} className="row">
                   The website is working!!!!
                </div>
            </div>
        );
    }
});


class Header extends React.Component {
  
   render() {
   	
   	var myStyle = {
         fontSize: 100,
         color: '#232',
         opacity:0.5,

      }

      return (
         <div className="box">
            <h1 style = {myStyle}>Welcome</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
         <p>Hello World!!!</p>
         </div>
      );
   }
}





class Ubox extends React.Component {
   render() {
      return (
         <div>
         <p>Contents</p>
         <h1>{this.props.pro}</h1>

         </div>
      );
   }
}




export default App;