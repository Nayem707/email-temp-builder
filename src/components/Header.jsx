import { useState } from 'react';
import {
  sampleTemplate,
  newsletterTemplate,
  promotionalTemplate,
} from '../data/sampleTemplates';
import {
  ArrowUpToLine,
  FileBracesCorner,
  FileCode,
  Save,
  X,
} from 'lucide-react';

const Header = ({
  emailData,
  setEmailData,
  onSave,
  generateHTML,
  savedTemplates,
}) => {
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [templateName, setTemplateName] = useState('');
  const [showHTMLModal, setShowHTMLModal] = useState(false);
  const [showJSONModal, setShowJSONModal] = useState(false);
  const [showSampleModal, setShowSampleModal] = useState(false);
  const [generatedHTML, setGeneratedHTML] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');

  const handleSave = () => {
    if (templateName.trim()) {
      const result = onSave(templateName);
      setJsonOutput(JSON.stringify(result, null, 2));
      setShowSaveDialog(false);
      setTemplateName('');
      alert('Template saved successfully!');
    }
  };

  const handleCopyHTML = () => {
    const html = generateHTML();
    setGeneratedHTML(html);
    setShowHTMLModal(true);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };

  const loadSampleTemplate = (template) => {
    setEmailData(template);
    setShowSampleModal(false);
  };

  const clearTemplate = () => {
    if (confirm('Are you sure you want to clear the current template?')) {
      setEmailData({
        subject: 'Email Subject',
        preheader: 'Email preheader text',
        components: [],
      });
    }
  };

  return (
    <>
      <header className='bg-white border-b border-gray-200 px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>ET Builder</h1>
            </div>

            <div className='flex items-center space-x-2'>
              <label className='text-sm font-medium text-gray-700'>
                Subject:
              </label>
              <input
                type='text'
                value={emailData.subject}
                onChange={(e) =>
                  setEmailData((prev) => ({ ...prev, subject: e.target.value }))
                }
                className='px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Email subject'
              />
            </div>
          </div>

          <div className='flex items-center space-x-2'>
            <button
              onClick={() => setShowSampleModal(true)}
              className='px-2 py-2  border border-gray-300 text-gray-500 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors'
            >
              <ArrowUpToLine />
            </button>
            <button
              onClick={handleCopyHTML}
              className='px-2 py-2 border border-gray-300 text-gray-500 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors'
            >
              <FileCode />
            </button>
            <button
              onClick={() => setShowSaveDialog(true)}
              className='px-2 py-2  border border-gray-300 text-gray-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            >
              <Save />
            </button>
            <button
              onClick={clearTemplate}
              className='px-2 py-2  border border-gray-300 text-gray-500 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors'
            >
              <X />
            </button>
            {savedTemplates.length > 0 && (
              <button
                onClick={() => setShowJSONModal(true)}
                className='px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors'
              >
                <FileBracesCorner className=' inline-block mr-2' />
                View JSON ({savedTemplates.length})
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Save Dialog */}
      {showSaveDialog && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 w-96'>
            <h3 className='text-lg font-semibold mb-4'>Save Template</h3>
            <input
              type='text'
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder='Enter template name'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
            />
            <div className='flex justify-end space-x-2'>
              <button
                onClick={() => setShowSaveDialog(false)}
                className='px-4 py-2 text-gray-600 hover:text-gray-800'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HTML Modal */}
      {showHTMLModal && (
        <div className='fixed inset-0 bg-black/70 bg-opacity-30 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 max-w-4xl w-full overflow-hidden'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-semibold'>Generated HTML Code</h3>
              <button
                onClick={() => setShowHTMLModal(false)}
                className='text-gray-500 hover:text-gray-700'
              >
                ✕
              </button>
            </div>
            <textarea
              value={generatedHTML}
              readOnly
              className='w-full h-72 p-3 border border-gray-300 rounded-md font-mono text-sm'
            />
            <div className='flex justify-end space-x-2 mt-4'>
              <button
                onClick={() => copyToClipboard(generatedHTML)}
                className='px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-md hover:bg-blue-700'
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* JSON Modal */}
      {showJSONModal && (
        <div className='fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 max-w-2xl w-full overflow-hidden'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className=' font-semibold'>Saved Templates (JSON)</h3>
              <button
                onClick={() => setShowJSONModal(false)}
                className='text-gray-500 hover:text-gray-700'
              >
                ✕
              </button>
            </div>
            <textarea
              value={JSON.stringify({ templates: savedTemplates }, null, 2)}
              readOnly
              className='h-72 w-full p-3 border border-gray-300 rounded-md font-mono text-sm'
            />
            <div className='flex justify-end space-x-2 mt-4'>
              <button
                onClick={() =>
                  copyToClipboard(
                    JSON.stringify({ templates: savedTemplates }, null, 2)
                  )
                }
                className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
              >
                Copy JSON
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sample Templates Modal */}
      {showSampleModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 max-w-2xl w-full mx-4'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='text-lg font-semibold'>Load Sample Template</h3>
              <button
                onClick={() => setShowSampleModal(false)}
                className='text-gray-500 hover:text-gray-700'
              >
                ✕
              </button>
            </div>

            <div className='grid gap-4'>
              <div className='border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors'>
                <h4 className='font-medium text-gray-900 mb-2'>
                  Welcome Newsletter
                </h4>
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
                <h4 className='font-medium text-gray-900 mb-2'>
                  Monthly Newsletter
                </h4>
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
                <h4 className='font-medium text-gray-900 mb-2'>
                  Promotional Offer
                </h4>
                <p className='text-sm text-gray-600 mb-3'>
                  A high-converting promotional email template with discount
                  offers.
                </p>
                <button
                  onClick={() => loadSampleTemplate(promotionalTemplate)}
                  className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm'
                >
                  Load Template
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
