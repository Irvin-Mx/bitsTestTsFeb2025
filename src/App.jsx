import SPLITTEXT from '../src/components/Splittext'
function App() {
  

  return (
    <>
      <SPLITTEXT
  text="Hello, Irvin!"
  className="text-2xl font-semibold text-center"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={()=>{console.log('Letter animation complete')}}	
/>
    </>
  )
}

export default App
