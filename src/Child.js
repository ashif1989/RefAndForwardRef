let Child = ({ inputRef }) => {
  return (
    <>
      <label>Name: </label>
      <input type="text" ref={inputRef}></input>
    </>
  );
};

export default Child;
