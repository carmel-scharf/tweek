import React from 'react';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import './SettingsPage.css';
import Versions from './Versions';
import IdentitiesMenu from './IdentitiesMenu';

const SettingsPage = ({ children }) => (
  <DocumentTitle title="Tweek - Settings">
    <div className="schema-page-container">
      <div className="settings-menu">
        <ul className="navigation-menu" key="SideMenu">
          <IdentitiesMenu />
          <li>
            <div data-comp="group">Security</div>
            <ul>
              <li>
                <Link to={`/settings/policies`}>Policies</Link>
              </li>
            </ul>
          </li>
          <li>
            <div data-comp="group">Misc</div>
            <ul>
              <li>
                <Link to={`/settings/hooks`}>Hooks</Link>
              </li>
              <li>
                <Link to={`/settings/externalApps`}>External Apps</Link>
              </li>
            </ul>
          </li>
        </ul>
        <Versions />
      </div>
      <div style={{ display: 'flex', flexGrow: 1, overflowY: 'auto' }} key="Page">
        {children}
      </div>
    </div>
  </DocumentTitle>
);

export default SettingsPage;
