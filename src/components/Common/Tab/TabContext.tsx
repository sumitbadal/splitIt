import React, { createContext, useState, ReactNode, useContext } from "react";

interface TabsContextType {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProviderProps {
  children: ReactNode;
  defaultActiveTab?: number;
}

export const TabsProvider: React.FC<TabsProviderProps> = ({
  children,
  defaultActiveTab = 0,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = (): TabsContextType => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};
