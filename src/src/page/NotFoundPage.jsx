const { Link } = require('react-router-dom');

const NotFoundPage = () => {
  return (
    <div>
      <h1>cannot found this page</h1>
      <Link to="/">Go Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
