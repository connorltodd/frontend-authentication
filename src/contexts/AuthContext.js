import React from "react";

export const AuthContext = React.createContext(null);

export default function AuthContextProvider(props) {
  const [auth, setAuth] = React.useState(false);
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
}
