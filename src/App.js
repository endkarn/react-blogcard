
import './App.css';

import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utills'

function App() {
  // const blogArray = null
  const blogArray = [
    {
      id: 1,
      title: 'first book edition',
      description: 'the book from nowhere'
    },
    {
      id: 2,
      title: 'first book edition',
      description: 'the book from nowhere'
    },
    {
      id: 3,
      title: 'first book edition',
      description: 'the book from nowhere'
    }
  ]

  if (isArrayEmpty(blogArray)) {
    return ''
  }
  const blogCard = blogArray.map((item, pos) => {
    return (
      <BlogCard key={pos} title={item.title} description={item.description} id={item.id}/>
    )
  })

  return (
    <div className="App">
      {blogCard}
    </div>
  )
}

export default App;
