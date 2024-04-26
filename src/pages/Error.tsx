import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function Error() {
  const error = useRouteError()

  let errorStatus:number;
  let errorStatusText:string;

  if (isRouteErrorResponse(error)){
    errorStatus = error.status;
    errorStatusText = error.statusText;
  }else{
    errorStatus = 400;
    errorStatusText = 'Page not found'
  }

  return (
    <Container className="notFound">
        <h1>{errorStatus}</h1>
        <p>{errorStatusText}</p>
        <Link to="/" replace={true}>
            Go back to home page
        </Link>
    </Container>
  )
}

export default Error