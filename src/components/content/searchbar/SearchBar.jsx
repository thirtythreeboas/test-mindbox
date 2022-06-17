import '../../../css/search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ searchResult }) => {
  return (
    <form className="search">
      <button disabled>
        <FontAwesomeIcon icon="angle-down" />
      </button>
      <input type="search" placeholder="what needs to be done?" onChange={e => searchResult(e)} />
    </form>
  )
}
  
export default SearchBar;