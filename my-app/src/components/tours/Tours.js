function Tours(props) {
  return (
    <>
      {props.myArr.map((item, i) => {
        return (
          <div key={i}>
            <h3>{item.name}</h3>
            <img src={item.image} alt="error"></img>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export default Tours;
