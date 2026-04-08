import Rating from "./componenets/Rating"


const App = () => {
  return ( <> 
  {/* Passing props A set prop will override a default prop */}
  <Rating heading="Practicing Props"
  feedbackMessages={['Hate it', 'Dislike it', 'its okay', 'Like it', 'Love it']} 
 />  
  
  </>)
}

export default App