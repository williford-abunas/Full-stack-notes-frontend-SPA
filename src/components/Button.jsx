const Button = ({ toggleImportance, children }) => {
  return (
    <>
      <button onClick={toggleImportance}>{children}</button>
    </>
  )
}

export default Button
