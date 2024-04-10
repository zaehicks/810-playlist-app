const getId = ((id = 0) => {
  return () => ++id;
})()

export default getId;