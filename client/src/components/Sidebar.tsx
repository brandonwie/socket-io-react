import { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { SelectCallback } from 'react-bootstrap/esm/helpers';

interface Sidebar {
  id: string;
}

const CONVERSATION_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

const Sidebar: React.FC<Sidebar> = ({ id }: Sidebar) => {
  const [activeKey, setActiveKey] = useState<string>(CONVERSATION_KEY);
  const handleOnSelect = (eventKey: string | null) => {
    if (eventKey) {
      return setActiveKey(eventKey);
    }
  };

  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={handleOnSelect}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
    </div>
  );
};

export default Sidebar;
