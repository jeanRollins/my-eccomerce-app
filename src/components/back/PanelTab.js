import React, { useState } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { PropTypes } from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      { value === index && (
        <>
          {children}
        </>
      )}
    </div>
  );
}

export const PanelTab = ({ tabs }) => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <AppBar position="static" className="bg-secondary">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          
          { tabs.map( ( t , index ) => 
            <Tab 
              key   = { index } 
              label = { t.title } 
              {...a11yProps( index )} 
            />
          )}

        </Tabs>
      </AppBar>
      { tabs.map( ( t , index ) => 
        <TabPanel 
          key   = { index } 
          value = { value } 
          index = { index }
        >
          
          { t.Component() }
         
        </TabPanel>
      )}
    </>
  )
}
