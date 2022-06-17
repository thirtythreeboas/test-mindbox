import Header from "./header/Header";
import Content from "./content/Content";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <div className='first-page'></div>
      <div className='second-page'></div>
    </div>
  )
}

export default Main;