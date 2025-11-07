import { useState, useEffect } from 'react';

const PropertiesPanel = ({ component, onUpdate, onClose }) => {
  const [localContent, setLocalContent] = useState(component.content);

  useEffect(() => {
    setLocalContent(component.content);
  }, [component]);

  const handleChange = (field, value) => {
    const newContent = { ...localContent, [field]: value };
    setLocalContent(newContent);
    onUpdate(newContent);
  };

  const renderFields = () => {
    switch (component.type) {
      case 'header':
        return (
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Title
              </label>
              <input
                type='text'
                value={localContent.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Subtitle
              </label>
              <input
                type='text'
                value={localContent.subtitle || ''}
                onChange={(e) => handleChange('subtitle', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Background Color
              </label>
              <input
                type='color'
                value={localContent.backgroundColor || '#3b82f6'}
                onChange={(e) =>
                  handleChange('backgroundColor', e.target.value)
                }
                className='w-full h-10 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Text Color
              </label>
              <input
                type='color'
                value={localContent.textColor || '#ffffff'}
                onChange={(e) => handleChange('textColor', e.target.value)}
                className='w-full h-10 border border-gray-300 rounded-md'
              />
            </div>
          </div>
        );

      case 'text':
        return (
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Text Content
              </label>
              <textarea
                value={localContent.text || ''}
                onChange={(e) => handleChange('text', e.target.value)}
                rows={4}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Font Size
              </label>
              <select
                value={localContent.fontSize || '16px'}
                onChange={(e) => handleChange('fontSize', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value='12px'>12px</option>
                <option value='14px'>14px</option>
                <option value='16px'>16px</option>
                <option value='18px'>18px</option>
                <option value='20px'>20px</option>
                <option value='24px'>24px</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Text Alignment
              </label>
              <select
                value={localContent.textAlign || 'left'}
                onChange={(e) => handleChange('textAlign', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value='left'>Left</option>
                <option value='center'>Center</option>
                <option value='right'>Right</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Text Color
              </label>
              <input
                type='color'
                value={localContent.textColor || '#374151'}
                onChange={(e) => handleChange('textColor', e.target.value)}
                className='w-full h-10 border border-gray-300 rounded-md'
              />
            </div>
          </div>
        );

      case 'button':
        return (
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Button Text
              </label>
              <input
                type='text'
                value={localContent.text || ''}
                onChange={(e) => handleChange('text', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                URL
              </label>
              <input
                type='url'
                value={localContent.url || ''}
                onChange={(e) => handleChange('url', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='https://example.com'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Background Color
              </label>
              <input
                type='color'
                value={localContent.backgroundColor || '#3b82f6'}
                onChange={(e) =>
                  handleChange('backgroundColor', e.target.value)
                }
                className='w-full h-10 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Text Color
              </label>
              <input
                type='color'
                value={localContent.textColor || '#ffffff'}
                onChange={(e) => handleChange('textColor', e.target.value)}
                className='w-full h-10 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Alignment
              </label>
              <select
                value={localContent.alignment || 'center'}
                onChange={(e) => handleChange('alignment', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value='left'>Left</option>
                <option value='center'>Center</option>
                <option value='right'>Right</option>
              </select>
            </div>
          </div>
        );

      case 'image':
        return (
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Image URL
              </label>
              <input
                type='url'
                value={localContent.url || ''}
                onChange={(e) => handleChange('url', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='https://example.com/image.jpg'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Alt Text
              </label>
              <input
                type='text'
                value={localContent.alt || ''}
                onChange={(e) => handleChange('alt', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Describe the image'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Width
              </label>
              <input
                type='text'
                value={localContent.width || ''}
                onChange={(e) => handleChange('width', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='e.g., 300px or 100%'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Alignment
              </label>
              <select
                value={localContent.alignment || 'center'}
                onChange={(e) => handleChange('alignment', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value='left'>Left</option>
                <option value='center'>Center</option>
                <option value='right'>Right</option>
              </select>
            </div>
          </div>
        );

      case 'divider':
        return (
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Color
              </label>
              <input
                type='color'
                value={localContent.color || '#e5e7eb'}
                onChange={(e) => handleChange('color', e.target.value)}
                className='w-full h-10 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Thickness (px)
              </label>
              <input
                type='number'
                min='1'
                max='10'
                value={localContent.thickness || 1}
                onChange={(e) =>
                  handleChange('thickness', parseInt(e.target.value))
                }
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
          </div>
        );

      default:
        return <div>No properties available for this component type.</div>;
    }
  };

  return (
    <div className='w-80 bg-white border-l border-gray-200 p-4'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-semibold text-gray-900'>
          {component.type.charAt(0).toUpperCase() + component.type.slice(1)}{' '}
          Properties
        </h3>
        <button onClick={onClose} className='text-gray-500 hover:text-gray-700'>
          ✕
        </button>
      </div>

      <div className='space-y-4'>{renderFields()}</div>

      <div className='mt-6 pt-4 border-t border-gray-200'>
        <div className='text-sm text-gray-500'>
          <div>
            <strong>Component ID:</strong> {component.id}
          </div>
          <div>
            <strong>Type:</strong> {component.type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;
