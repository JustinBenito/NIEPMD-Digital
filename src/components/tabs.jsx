import {useState} from 'react'
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
import back from '../assets/back.svg'
import Motor from './motor';
import Intellectual from './intellectual';
import Signature from './signature';
import NewInputPage from './finalpdf';
import Speech from './speech';
import Audiology from './audiology';
import Physiotherapy from './physiotherapy';
import Occupational from './occupational';
import Prosthetic from './prosthetic';

const TopTabs = () => {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = () => {
    setTabIndex((prevIndex) => Math.min(prevIndex + 1, 17));
  };

  const goBack = ()=>{
    window.location.href='/'
  }

  return (
    <>
    <Nav />
    <Signature />
    <div className='items-start mt-8 mb-8 border-gray-100 flex  max-w-5xl mx-auto gap-2 px-4'
    >

    <button onClick={goBack} className='flex items-center gap-2 mr-2 p-2  min-w-auto'>
    <img src={back} alt="back button" width={20}/>
    <p className='whitespace-nowrap w-full'>go back</p>
    </button>

    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >

      
    <TabList>
      <Tab>ID Data</Tab>
      <Tab>Demographic Data</Tab>
      <Tab>Complaints</Tab>
      <Tab>Case History</Tab>
      <Tab>Family History</Tab>
      <Tab>Developmental History</Tab>
      <Tab>Expectations</Tab>
      <Tab>School History</Tab>
      <Tab>SEA</Tab>
      <Tab>Medical Examination</Tab>
      <Tab>Motor</Tab>
      <Tab>Psychological Assesment</Tab>
      <Tab>Speech & Language</Tab>
      <Tab>Audiology</Tab>
      <Tab>Physio Therapy</Tab>
      <Tab>Occupational Therapy</Tab>
      <Tab>Prosthetic & Orthotic</Tab>
      <Tab>Generate PDF</Tab>
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
    <TabPanel>
      <Motor onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Intellectual onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Speech onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Audiology onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Physiotherapy onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Occupational onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <Prosthetic onSave={handleTabChange}/>
    </TabPanel>
    <TabPanel>
      <NewInputPage />
    </TabPanel>
  </Tabs>
  </div>
  </>
  )
}

export default TopTabs
