const AppLayout = ({children}) => {
    return (
        <div>
            {children}
            <style global jsx>{`
        body {
          font-family: "Montserrat", sans-serif;
        }
      `}</style>
        </div>
    )
}

export default AppLayout
