const AuthLayout = ({ children }) => {
  return (
    <div>
      {children}

      <style global jsx>{`
        body {
          font-family: "Montserrat", sans-serif;
            overflow: hidden;
          background: #D3D2C7; 
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default AuthLayout;
