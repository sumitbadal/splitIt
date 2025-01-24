import React, { ReactNode, FC } from "react";
import { TabsProvider, useTabsContext } from "./TabContext";
import "./Tabs.scss";

interface TabsProps {
  children: ReactNode;
  defaultActiveTab?: number;
}

const TabsComponent: FC<TabsProps> = ({ children, defaultActiveTab = 0 }) => {
  return (
    <TabsProvider defaultActiveTab={defaultActiveTab}>
      <div className="tabs-container">{children}</div>
    </TabsProvider>
  );
};

interface TabListProps {
  children: ReactNode;
}

const TabList: FC<TabListProps> = ({ children }) => {
  return <div className="tab-list">{children}</div>;
};

interface TabProps {
  children: ReactNode;
  index: number;
}

const Tab: FC<TabProps> = ({ children, index }) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === index;

  return (
    <button
      className={`tab ${isActive ? "active" : ""}`}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </button>
  );
};

interface TabPanelsProps {
  children: ReactNode;
}

const TabPanels: FC<TabPanelsProps> = ({ children }) => {
  return <div className="tab-panels">{children}</div>;
};

interface TabPanelProps {
  children: ReactNode;
  index: number;
}

const TabPanel: FC<TabPanelProps> = ({ children, index }) => {
  const { activeTab } = useTabsContext();
  return activeTab === index ? (
    <div className="tab-panel">{children}</div>
  ) : null;
};

const Tabs = Object.assign(TabsComponent, {
  TabList,
  Tab,
  TabPanels,
  TabPanel,
});

export default Tabs;
