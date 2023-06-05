const Alert = ({ alert, showAlert }) => {
  const { msg, colorCode } = alert;
  return (
    <>
      <div
        className={`alert-msg ${showAlert ? 'show' : ''}
      `}
        style={{ color: colorCode }}
      >
        {!!showAlert && msg}
      </div>
    </>
  );
};

export default Alert;
