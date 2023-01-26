const Login = () => {
  // google login
  const handleGoogleLogin = () => {};

  return (
    <div className="login container mx-auto py-10">
      <h2 className="section-title text-center text-4xl  text-gray-500 mb-10">
        Login
      </h2>

      <div className="login-platforms flex flex-col gap-5 items-center">
        <button
          onClick={handleGoogleLogin}
          className="google-login bg-gray-700 text-white h-14 w-96 rounded-md font-medium hover:bg-orange-500 duration-300"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
