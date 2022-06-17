import '../../../css/listAndItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ task, status, changeStatus }) => {
  return (
    <div className="item" id={task}>
      <span
        className='checkbox' 
        onClick={e => changeStatus(e)}
        >
        <span className='circle'>
          {
            status ? <FontAwesomeIcon icon="fa-check" /> : ""
          }
        </span>
      </span>
      <span className='task-field'>
        {
          status ? <del style={{color: '#d9d9d9'}}>{task}</del> : task
        }
      </span>
    </div>
  )
}
  
export default Item;