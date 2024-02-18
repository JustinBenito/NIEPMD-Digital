import React, {useState} from 'react'
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
import Nav from './nav';

const TopTabs = () => {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = () => {
    setTabIndex((prevIndex) => Math.min(prevIndex + 1, 9));
  };


  return (
    <>
    <Nav />
    <div className=' mt-5 border-gray-100 max-w-5xl mx-auto gap-2 px-4'
    >

    
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
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
      <Identi onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Demo onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Present onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <History onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <School onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Development onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Expect onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <SchoolHist onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Special onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <MedExam onSave={handleTabChange}/>
    </TabPanel>
  </Tabs>
  </div>
  </>
  )
}

export default TopTabs
