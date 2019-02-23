export default ({ statusCode, errMsg }) => {
  return (
    <div>
      <h3>Status: {statusCode}</h3>
      <p>{errMsg} </p>
    </div>
  );
};
