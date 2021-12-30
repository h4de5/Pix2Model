import SwipeableViews from 'react-swipeable-views';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from '@material-ui/icons/Home';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Upload from "./upload/UploadComponent"
import About from "./about/AboutComponent"
import Edit from "./edit/EditComponent";

import './index.css';


function CustomTabs() {
  const { t, i18n } = useTranslation();

  const [index, setIndex] = useState(0);

  function handleChangeLang(lang) {
    i18n.changeLanguage(lang)
  }

  function handleChange(event, value) {
    setIndex(value);
  };

  function handleChangeIndex(index) {
    setIndex(index);
  };

  return (
      <React.StrictMode>
      <div className="Root">
      <Tabs
          value={index}
          fullWidth
          onChange={handleChange}
          TabIndicatorProps={{style: {backgroundColor: "white"}}}>
          <Tab icon={<HomeIcon />}/>
          <Tab label="Image-2-Mesh"/>
          <Tab label={t('menu.edit')}/>
      </Tabs>
      <button class='lang en' onClick={() => handleChangeLang('en')}>EN</button>
      <button class='lang de' onClick={() => handleChangeLang('de')}>DE</button>
      {(index > 0 && index < 2) &&
        <button class='previous' onClick={() => setIndex(index - 1)}><i class="arrow embedded-left"></i></button>
      }
      {index < 2 &&
        <button class='next' onClick={() => setIndex(index + 1)}><i class="arrow embedded-right"></i></button>
      }

      <SwipeableViews index={index} disabled={true} onChangeIndex={handleChangeIndex} enableMouseEvents={true}>
          <div class='swipable_content'>
              <About></About>
          </div>
          <div class='swipable_content'>
              <Upload></Upload>
          </div>
          <div class='swipable_content'>
              <Edit></Edit>
          </div>
      </SwipeableViews>
      </div>
      </React.StrictMode>
    );
  }
  
  export default CustomTabs;