import '../../../css/listAndItem.scss';
import Item from './Item';

const List = ({ data, sortedData, changeStatus }) => {
  return (
    <div className="list">
      {
        sortedData.length > 0 
        ? 
        sortedData.map(e => (
          <Item
            key={e.index}
            task={e.task}
            status={e.status}
            changeStatus={changeStatus}
          />
        )) 
        : (
          data.length === 0 && sortedData.length === 0
          ?
          <div className='empty-list'>No tasks left, the list is empty...</div>
          :
          data.map(e => (
            <Item
              key={e.index}
              task={e.task}
              status={e.status}
              changeStatus={changeStatus}
            />
          ))
        )
      }
    </div>
  )
}
  
export default List;