import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';
import Link from '../components/Link';

const mapStateToProperties = (state, ownProperties) => ({
  active: ownProperties.filter === state.visibilityFilter
});

const mapDispatchToProperties = (dispatch, ownProperties) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProperties.filter))
});

export default connect(
  mapStateToProperties,
  mapDispatchToProperties
)(Link);
