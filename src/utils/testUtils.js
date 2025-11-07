// Test utilities for the email template builder

export const testEmailGeneration = (emailData) => {
  console.log('Testing email generation with data:', emailData);

  // Test basic structure
  if (!emailData.subject) {
    console.error('Missing subject');
    return false;
  }

  if (!Array.isArray(emailData.components)) {
    console.error('Components should be an array');
    return false;
  }

  // Test each component
  emailData.components.forEach((component, index) => {
    if (!component.id) {
      console.error(`Component at index ${index} missing id`);
    }

    if (!component.type) {
      console.error(`Component at index ${index} missing type`);
    }

    if (!component.content) {
      console.error(`Component at index ${index} missing content`);
    }
  });

  console.log('Email data validation passed!');
  return true;
};

export const validateHTMLOutput = (htmlString) => {
  // Basic HTML validation
  const hasDoctype = htmlString.includes('<!DOCTYPE html>');
  const hasHtmlTags =
    htmlString.includes('<html') && htmlString.includes('</html>');
  const hasHeadTags =
    htmlString.includes('<head>') && htmlString.includes('</head>');
  const hasBodyTags =
    htmlString.includes('<body') && htmlString.includes('</body>');

  console.log('HTML Validation Results:', {
    hasDoctype,
    hasHtmlTags,
    hasHeadTags,
    hasBodyTags,
  });

  return hasDoctype && hasHtmlTags && hasHeadTags && hasBodyTags;
};

export const validateJSONOutput = (jsonString) => {
  try {
    const parsed = JSON.parse(jsonString);

    if (!parsed.template) {
      console.error('JSON missing template object');
      return false;
    }

    if (!parsed.template.name) {
      console.error('JSON template missing name');
      return false;
    }

    if (!parsed.template.html) {
      console.error('JSON template missing html');
      return false;
    }

    if (!parsed.template.components) {
      console.error('JSON template missing components');
      return false;
    }

    console.log('JSON validation passed!');
    return true;
  } catch (error) {
    console.error('Invalid JSON:', error);
    return false;
  }
};
