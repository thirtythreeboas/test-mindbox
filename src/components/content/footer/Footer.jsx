import '../../../css/footer.scss';

const Footer = ({ data, handleDisplay }) => {

  const num = data.filter(e => e.status === false)

  return (
    <div className="footer">
      <span className='footer-item' style={{width: '70px'}}>
        {`${num.length} ${num.length === 1 ? 'item' : 'items'} left`}
      </span>
      <span className='footer-item hover-item' onClick={e => handleDisplay(e)}>All</span>
      <span className='footer-item hover-item' onClick={e => handleDisplay(e)}>Active</span>
      <span className='footer-item hover-item' onClick={e => handleDisplay(e)}>Complited</span>
      <span className='footer-item hover-item' onClick={e => handleDisplay(e)}>Clear complited</span>
    </div>
  )
}
  
export default Footer;