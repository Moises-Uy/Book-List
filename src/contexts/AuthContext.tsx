import React, { Component, ReactNode, createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  toggleAuth: () => {},
});

class AuthContextProvider extends Component<{ children: ReactNode }> {
  state: { isAuthenticated: boolean } = {
    isAuthenticated: false,
  };

  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          toggleAuth: this.toggleAuth,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
