import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Identi from './identification';
import Demo from './demo';
import Present from './presentcomplaints';
import History from './history';
import School from './schhistory';
import Development from './dev';
import Expect from './expect';
import SchoolHist from './schoolhistory';
import Special from './spledu';
import MedExam from './medexam';


const TopTabs = () => {
  return (
    <div className=' mt-5 border-gray-100 max-w-5xl mx-auto gap-2 px-4'
    >
    <Tabs >
    <TabList>
      <Tab>Section 1</Tab>
      <Tab>Section 2</Tab>
      <Tab>Section 3</Tab>
      <Tab>Section 4</Tab>
      <Tab>Section 5</Tab>
      <Tab>Section 6</Tab>
      <Tab>Section 7</Tab>
      <Tab>Section 8</Tab>
      <Tab>Section 9</Tab>
      <Tab>Section 10</Tab>
    </TabList>

    <TabPanel>
      <Identi />
    </TabPanel>
    <TabPanel>
      <Demo/>
    </TabPanel>
    <TabPanel>
      <Present/>
    </TabPanel>
    <TabPanel>
      <History />
    </TabPanel>
    <TabPanel>
      <School />
    </TabPanel>
    <TabPanel>
      <Development />
    </TabPanel>
    <TabPanel>
      <Expect />
    </TabPanel>
    <TabPanel>
      <SchoolHist />
    </TabPanel>
    <TabPanel>
      <Special />
    </TabPanel>
    <TabPanel>
      <MedExam />
    </TabPanel>
  </Tabs>
  </div>
  )
}

export default TopTabs
