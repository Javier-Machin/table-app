import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPets } from '../store/actions';
import Table from '../components/Table';

const mapStateToProps = (state) => ({
  pets: state.pets,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchPets }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
