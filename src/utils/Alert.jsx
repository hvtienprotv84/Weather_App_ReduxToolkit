import Alert from "react-bootstrap/Alert";

const AlertBox = ({messageError}) => {
  return (
    <Alert variant="danger"  dismissible>
          <Alert.Heading>You got an error!</Alert.Heading>
          <p>
            {messageError}
          </p>
        </Alert>
  )
}

AlertBox.propTypes;
export default AlertBox