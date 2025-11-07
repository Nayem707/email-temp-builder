import {
  sampleTemplate,
  newsletterTemplate,
  promotionalTemplate,
} from '../data/sampleTemplates';

const Sidebar = ({ setEmailData }) => {
  const loadSampleTemplate = (template) => {
    setEmailData(template);
  };
  return (
    <div className='w-64 bg-white border-r border-gray-200 p-4'>
      <h2 className='text-lg font-semibold text-gray-900 mb-4'>Template</h2>

      <div className='grid gap-4'>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors'>
          <h4 className='font-medium text-gray-900 mb-2'>Welcome Newsletter</h4>
          <p className='text-sm text-gray-600 mb-3'>
            A friendly welcome email template with header, text, and
            call-to-action button.
          </p>
          <button
            onClick={() => loadSampleTemplate(sampleTemplate)}
            className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm'
          >
            Load Template
          </button>
        </div>

        <div className='border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors'>
          <h4 className='font-medium text-gray-900 mb-2'>Monthly Newsletter</h4>
          <p className='text-sm text-gray-600 mb-3'>
            A comprehensive newsletter template with featured content and
            images.
          </p>
          <button
            onClick={() => loadSampleTemplate(newsletterTemplate)}
            className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm'
          >
            Load Template
          </button>
        </div>

        <div className='border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors'>
          <h4 className='font-medium text-gray-900 mb-2'>Promotional Offer</h4>
          <p className='text-sm text-gray-600 mb-3'>
            A high-converting promotional email template with discount offers.
          </p>
          <button
            onClick={() => loadSampleTemplate(promotionalTemplate)}
            className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm'
          >
            Load Template
          </button>
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='text-md font-semibold text-gray-900 mb-3'>Quick Tips</h3>
        <div className='space-y-2 text-sm text-gray-600'>
          <div className='p-2 bg-blue-50 rounded'>
            💡 Click on any component in the preview to edit its properties
          </div>
          <div className='p-2 bg-green-50 rounded'>
            🎨 Use the properties panel to customize colors, text, and styling
          </div>
          <div className='p-2 bg-yellow-50 rounded'>
            📧 Don't forget to test your email in different clients
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
