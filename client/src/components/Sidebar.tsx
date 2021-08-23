import { useState } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Conversations from './Conversations';
import Contacts from './Contacts';
import NewConversationModal from './NewConversationModal';
import NewContactModal from './NewContactModal';

interface SidebarProps {
  id: string;
}

const CONVERSATION_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

const Sidebar: React.FC<SidebarProps> = ({ id }: SidebarProps) => {
  const [activeKey, setActiveKey] = useState<string>(CONVERSATION_KEY);
  const conversationsOpen = activeKey === CONVERSATION_KEY;
  const [modalOpen, setModalOpen] = useState(false);

  const handleOnSelect = (eventKey: string | null) => {
    if (eventKey) {
      return setActiveKey(eventKey);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
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
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button className="rounded-0">
          New {conversationsOpen ? 'Converstation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
