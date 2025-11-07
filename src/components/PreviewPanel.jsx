import { useState } from 'react';
import {
  Camera,
  MailQuestionMark,
  MonitorSmartphone,
  TabletSmartphone,
  Trash2,
} from 'lucide-react';
import { COMPONENT_CONFIGS } from '../config/constants';

const PreviewPanel = ({
  emailData,
  selectedComponent,
  onSelectComponent,
  onDeleteComponent,
  onAddComponent,
}) => {
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' or 'mobile'

  const renderComponent = (component) => {
    const isSelected = selectedComponent?.id === component.id;

    const baseClasses = `relative  transition-all duration-200 ${
      isSelected
        ? 'ring-2 ring-blue-500 ring-offset-2'
        : 'hover:ring-1 hover:ring-gray-300'
    }`;

    const ComponentWrapper = ({ children }) => (
      <div className={baseClasses} onClick={() => onSelectComponent(component)}>
        {children}
        {isSelected && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteComponent(component.id);
            }}
            className='absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 flex items-center justify-center'
          >
            <Trash2 size={15} />
          </button>
        )}
      </div>
    );

    switch (component.type) {
      case 'header':
        return (
          <ComponentWrapper key={component.id}>
            <div
              style={{
                backgroundColor: component.content.backgroundColor,
                color: component.content.textColor,
                padding: '40px 20px',
                textAlign: 'center',
              }}
            >
              <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold' }}>
                {component.content.title}
              </h1>
              {component.content.subtitle && (
                <p style={{ margin: '10px 0 0 0', fontSize: '18px' }}>
                  {component.content.subtitle}
                </p>
              )}
            </div>
          </ComponentWrapper>
        );

      case 'text':
        return (
          <ComponentWrapper key={component.id}>
            <div style={{ padding: '20px' }}>
              <p
                style={{
                  color: component.content.textColor,
                  fontSize: component.content.fontSize,
                  textAlign: component.content.textAlign,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {component.content.text}
              </p>
            </div>
          </ComponentWrapper>
        );

      case 'button':
        return (
          <ComponentWrapper key={component.id}>
            <div
              style={{
                padding: '20px',
                textAlign: component.content.alignment,
              }}
            >
              <a
                href={component.content.url}
                style={{
                  display: 'inline-block',
                  backgroundColor: component.content.backgroundColor,
                  color: component.content.textColor,
                  padding: '12px 24px',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                }}
                onClick={(e) => e.preventDefault()}
              >
                {component.content.text}
              </a>
            </div>
          </ComponentWrapper>
        );

      case 'image':
        return (
          <ComponentWrapper key={component.id}>
            <div
              style={{
                padding: '20px',
                textAlign: component.content.alignment,
              }}
            >
              <img
                src={component.content.url}
                alt={component.content.alt}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: component.content.width,
                }}
              />
            </div>
          </ComponentWrapper>
        );

      case 'divider':
        return (
          <ComponentWrapper key={component.id}>
            <div style={{ padding: '20px' }}>
              <hr
                style={{
                  border: 'none',
                  borderTop: `${component.content.thickness}px solid ${component.content.color}`,
                  margin: 0,
                }}
              />
            </div>
          </ComponentWrapper>
        );

      default:
        return null;
    }
  };

  const maxWidth = viewMode === 'mobile' ? '375px' : '600px';

  return (
    <div className='flex-1 flex flex-col bg-gray-100'>
      {/* Preview Controls */}
      <div className='bg-white border-b border-gray-200 px-4 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <span className='text-sm font-medium text-gray-700'>Preview:</span>
            <div className='flex border border-gray-300 rounded-lg overflow-hidden'>
              <button
                onClick={() => setViewMode('desktop')}
                className={`px-2 py-1 text-sm font-medium  ${
                  viewMode === 'desktop'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <MonitorSmartphone size={20} className='inline-block mr-1' />
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`px-2 py-1 text-sm font-medium  ${
                  viewMode === 'mobile'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <TabletSmartphone size={20} className='inline-block mr-1' />
              </button>
            </div>
          </div>
          <div className='text-sm text-gray-600'>
            {emailData.components.length} component
            {emailData.components.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className='flex-1 overflow-auto p-4'>
        <div className='max-w-4xl mx-auto'>
          <div
            className='bg-white shadow-lg transition-all duration-300 mx-auto'
            style={{ maxWidth, minHeight: '400px' }}
          >
            {/* Email Header Info */}
            <div className='border-b border-gray-200 p-4 bg-gray-50'>
              <div className='text-sm text-gray-600'>
                <div>
                  <strong>Subject:</strong> {emailData.subject}
                </div>
                {emailData.preheader && (
                  <div>
                    <strong>Preheader:</strong> {emailData.preheader}
                  </div>
                )}
              </div>
            </div>

            {/* Email Content */}
            <div>
              {emailData.components.length === 0 ? (
                <div className='p-12 text-center text-gray-500'>
                  <div className='text-4xl mb-4 text-center flex items-center justify-center'>
                    <MailQuestionMark />
                  </div>
                  <h3 className='text-lg font-medium mb-2'>
                    Start building your email
                  </h3>
                  <p>Add components from the sidebar to get started</p>
                </div>
              ) : (
                emailData.components.map(renderComponent)
              )}
            </div>
          </div>

          {/* Preview Footer */}
          <div className='text-center mt-4 mb-20 text-sm text-gray-500'>
            Email preview • {viewMode === 'mobile' ? '375px' : '600px'} width
          </div>
        </div>
      </div>

      {/* Component Quick Add */}
      <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2  bg-white border border-gray-200 rounded-xl shadow-lg flex gap-2 p-2'>
        {COMPONENT_CONFIGS.map((component) => (
          <button
            key={component.type}
            onClick={() => onAddComponent(component.type)}
            className='w-full h-14 flex items-center p-3 text-left bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors group'
          >
            <div className='flex items-center justify-center'>
              <span className=' text-2xl'>{component.icon}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreviewPanel;
