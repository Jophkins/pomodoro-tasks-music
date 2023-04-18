import React, {useContext, useState} from 'react';

import styles from './SettingsModal.module.scss';
import {Context} from "../../pages/PomodorkoApp";
import locale from "../../utils/locale";
const SettingsModal = () => {

  const language = useContext(Context);

  const [tabsToggler, setTabsToggler] = useState(1);

  const tabsHandler = (tabNumber) => {
    setTabsToggler(tabNumber);
  }

  return (
    <div>
      <button type="button" className={styles.openBtn} data-bs-toggle="modal" data-bs-target="#SettingsModal">
        {locale[language.locale].nav.settings.btnTitle}
      </button>

      <div className="modal fade" id="SettingsModal" tabIndex="-1" aria-labelledby="SettingsModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.modalContentCustom}`}>
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="SettingsModalLabel">
                {locale[language.locale].nav.settings.title}
              </h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className={styles.tabs}>
                <div onClick={() => tabsHandler(1)} className={tabsToggler === 1 ? styles.activeTab : styles.tabsItem}>General Settings</div>
                <div onClick={() => tabsHandler(2)} className={tabsToggler === 2 ? styles.activeTab : styles.tabsItem}>Timer Settings</div>
              </div>
              <div className={styles.content}>
                <div className={tabsToggler === 1 ? styles.activeContent : styles.contentItem}>
                  <ul>
                    <li>
                      <div className={styles.option}>
                        <div>Background:</div>
                        <select name="background">
                          <option value="winter">Winter</option>
                          <option value="sunset">Sunset</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div className={styles.option}>
                        <div>Effects:</div>
                        <select name="background">
                          <option value="none">None</option>
                          <option value="snow">Snow</option>
                          <option value="rain">Rain</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={tabsToggler === 2 ? styles.activeContent : styles.contentItem}>

                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
