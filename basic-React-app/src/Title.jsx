function Title() {
  return <h1>Hello, React!</h1>
}
function Description() {
  let para="paragraph1"
  // curly braces means we can write pure javascript code inside jsx
  return <p>{para.toUpperCase()}: this is a description of the react app component.</p>
}

// export means send this component to other files
export default Title
export { Description }