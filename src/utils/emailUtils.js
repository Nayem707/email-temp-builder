// Email template utilities

export const generateEmailHTML = (emailData) => {
  const componentsHTML = emailData.components
    .map((comp) => {
      switch (comp.type) {
        case 'header':
          return `
          <div style="background-color: ${
            comp.content.backgroundColor
          }; padding: 40px 20px; text-align: center;">
            <h1 style="color: ${
              comp.content.textColor
            }; margin: 0; font-size: 32px; font-weight: bold; font-family: Arial, sans-serif;">${
            comp.content.title
          }</h1>
            ${
              comp.content.subtitle
                ? `<p style="color: ${comp.content.textColor}; margin: 10px 0 0 0; font-size: 18px; font-family: Arial, sans-serif;">${comp.content.subtitle}</p>`
                : ''
            }
          </div>
        `;
        case 'text':
          return `
          <div style="padding: 20px;">
            <p style="color: ${comp.content.textColor}; font-size: ${comp.content.fontSize}; text-align: ${comp.content.textAlign}; margin: 0; line-height: 1.5; font-family: Arial, sans-serif;">${comp.content.text}</p>
          </div>
        `;
        case 'button':
          return `
          <div style="padding: 20px; text-align: ${comp.content.alignment};">
            <a href="${comp.content.url}" style="display: inline-block; background-color: ${comp.content.backgroundColor}; color: ${comp.content.textColor}; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; font-family: Arial, sans-serif;">${comp.content.text}</a>
          </div>
        `;
        case 'image':
          return `
          <div style="padding: 20px; text-align: ${comp.content.alignment};">
            <img src="${comp.content.url}" alt="${
            comp.content.alt
          }" style="max-width: 100%; height: auto; width: ${
            comp.content.width
          }; display: block; ${
            comp.content.alignment === 'center' ? 'margin: 0 auto;' : ''
          }" />
          </div>
        `;
        case 'divider':
          return `
          <div style="padding: 20px;">
            <hr style="border: none; border-top: ${comp.content.thickness}px solid ${comp.content.color}; margin: 0;" />
          </div>
        `;
        default:
          return '';
      }
    })
    .join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${emailData.subject}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    /* Reset styles */
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    img {
      -ms-interpolation-mode: bicubic;
    }
    
    /* Remove space around the email */
    body, .email-container {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      height: 100% !important;
    }
    
    /* Hide preheader text */
    .preheader {
      display: none !important;
      visibility: hidden;
      opacity: 0;
      color: transparent;
      height: 0;
      width: 0;
    }
    
    /* Responsive styles */
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
  ${
    emailData.preheader
      ? `<div class="preheader">${emailData.preheader}</div>`
      : ''
  }
  
  <div class="email-container" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    ${componentsHTML}
  </div>
</body>
</html>
  `.trim();
};

export const exportTemplateAsJSON = (templateName, emailData) => {
  return {
    template: {
      name: templateName,
      subject: emailData.subject,
      preheader: emailData.preheader,
      html: generateEmailHTML(emailData),
      components: emailData.components,
      metadata: {
        created: new Date().toISOString(),
        version: '1.0',
        builderVersion: '1.0.0',
      },
    },
  };
};

export const getDefaultComponentContent = (type) => {
  switch (type) {
    case 'header':
      return {
        title: 'Header Title',
        subtitle: 'Header Subtitle',
        backgroundColor: '#3b82f6',
        textColor: '#ffffff',
      };
    case 'text':
      return {
        text: 'Add your text content here...',
        fontSize: '16px',
        textAlign: 'left',
        textColor: '#374151',
      };
    case 'button':
      return {
        text: 'Click Me',
        url: '#',
        backgroundColor: '#3b82f6',
        textColor: '#ffffff',
        alignment: 'center',
      };
    case 'image':
      return {
        url: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Image',
        alt: 'Image description',
        width: '300px',
        alignment: 'center',
      };
    case 'divider':
      return {
        color: '#e5e7eb',
        thickness: 1,
      };
    default:
      return {};
  }
};
