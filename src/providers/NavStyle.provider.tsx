import React, { createContext, useContext, useState } from "react";

interface NavStyleContextProps {
  isDark: boolean;
  isMaxWidth: boolean;
  toggleDark: (state: boolean) => void;
  toggleMaxWidth: (state: boolean) => void;
}

const NavStyleContext = createContext<NavStyleContextProps | undefined>(
  undefined
);

interface NavStyleProviderProps {
  children: React.ReactNode;
  defaultDark?: boolean;
  defaultMaxWidth?: boolean;
}

export const NavStyleProvider: React.FC<NavStyleProviderProps> = ({
  children,
  defaultDark = false,
  defaultMaxWidth = false,
}) => {
  const [isDark, setIsDark] = useState(defaultDark);
  const [isMaxWidth, setIsMaxWidth] = useState(defaultMaxWidth);

  const toggleDark = (state: boolean) => setIsDark(state);
  const toggleMaxWidth = (state: boolean) => setIsMaxWidth(state);

  return (
    <NavStyleContext.Provider
      value={{ isDark, isMaxWidth, toggleDark, toggleMaxWidth }}
    >
      {children}
    </NavStyleContext.Provider>
  );
};

export const useNavStyle = () => {
  const context = useContext(NavStyleContext);
  if (!context) {
    throw new Error("useNavStyle must be used within a NavStyleProvider");
  }
  return context;
};
