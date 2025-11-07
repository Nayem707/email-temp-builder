import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import PreviewPanel from '../components/PreviewPanel';
import PropertiesPanel from '../components/PropertiesPanel';
import Header from '../components/Header';
import {
  generateEmailHTML,
  exportTemplateAsJSON,
  getDefaultComponentContent,
} from '../utils/emailUtils';

const EmailBuilderView = () => {
  const [emailData, setEmailData] = useState({
    subject: 'Welcome to our newsletter',
    preheader: 'Thank you for subscribing!',
    components: [
      {
        id: 'header-1',
        type: 'header',
        content: {
          title: 'Welcome!',
          subtitle: "We're excited to have you on board",
          backgroundColor: '#3b82f6',
          textColor: '#ffffff',
        },
      },
      {
        id: 'text-1',
        type: 'text',
        content: {
          text: 'This is a sample email template. You can customize it as needed.',
          fontSize: '16px',
          textAlign: 'left',
          textColor: '#374151',
        },
      },
    ],
  });

  const [selectedComponent, setSelectedComponent] = useState(null);
  const [savedTemplates, setSavedTemplates] = useState([]);

  const addComponent = (type) => {
    const newComponent = {
      id: `${type}-${Date.now()}`,
      type,
      content: getDefaultComponentContent(type),
    };

    setEmailData((prev) => ({
      ...prev,
      components: [...prev.components, newComponent],
    }));
  };

  const updateComponent = (id, newContent) => {
    setEmailData((prev) => ({
      ...prev,
      components: prev.components.map((comp) =>
        comp.id === id
          ? { ...comp, content: { ...comp.content, ...newContent } }
          : comp
      ),
    }));
  };

  const deleteComponent = (id) => {
    setEmailData((prev) => ({
      ...prev,
      components: prev.components.filter((comp) => comp.id !== id),
    }));
    setSelectedComponent(null);
  };

  const saveTemplate = (templateName) => {
    const template = {
      id: Date.now(),
      name: templateName,
      data: emailData,
      createdAt: new Date().toISOString(),
    };

    setSavedTemplates((prev) => [...prev, template]);

    // Return JSON format as requested
    return exportTemplateAsJSON(templateName, emailData);
  };

  const generateHTML = () => {
    return generateEmailHTML(emailData);
  };

  return (
    <div className='h-screen flex flex-col bg-gray-50'>
      <Header
        emailData={emailData}
        setEmailData={setEmailData}
        onSave={saveTemplate}
        generateHTML={generateHTML}
        savedTemplates={savedTemplates}
      />

      <div className='flex flex-1 overflow-hidden'>
        <Sidebar
          onAddComponent={addComponent}
          setEmailData={setEmailData}
          emailData={emailData}
        />

        <PreviewPanel
          emailData={emailData}
          selectedComponent={selectedComponent}
          onSelectComponent={setSelectedComponent}
          onDeleteComponent={deleteComponent}
          onAddComponent={addComponent}
        />

        {selectedComponent && (
          <PropertiesPanel
            component={selectedComponent}
            onUpdate={(newContent) =>
              updateComponent(selectedComponent.id, newContent)
            }
            onClose={() => setSelectedComponent(null)}
          />
        )}
      </div>
    </div>
  );
};

export default EmailBuilderView;
