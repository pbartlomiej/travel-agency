import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import { getAllFilters, changeSearchPhrase, changeDuration, addTagToFilter, removeTagToFilter } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDuration: duration => dispatch(changeDuration(duration)),
  addTagToFilter: (tag, checked) => dispatch(addTagToFilter(tag, checked)),
  removeTagToFilter: (tag, checked) => dispatch(removeTagToFilter(tag, checked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
