import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }
  
  render() {
    const cheeses = this.props.cheeses;
    return (
      <div>
        {cheeses}
      </div>
    )
    // const cheeses = this.props.cheeses.map((cheese, index) => {
    //   return (
    //   <li key={index}>
    //     {cheese}
    //   </li>)
    // })
    // return (
    //   <ul id="cheeseList">
    //     {cheeses}
    //   </ul>
    // );
  }
}
  
const mapStateToProps = state => ({
  cheeses: state.cheeses,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(CheeseList);