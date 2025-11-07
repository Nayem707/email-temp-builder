// Sample email template data for testing and development
export const sampleTemplate = {
  subject: 'Welcome to Our Newsletter!',
  preheader: 'Thank you for subscribing to our updates',
  components: [
    {
      id: 'header-sample',
      type: 'header',
      content: {
        title: 'Welcome to TechNews!',
        subtitle: 'Your weekly dose of technology insights',
        backgroundColor: '#1f2937',
        textColor: '#ffffff',
      },
    },
    {
      id: 'text-intro',
      type: 'text',
      content: {
        text: "Thank you for subscribing to our newsletter! We're excited to share the latest technology trends, product updates, and industry insights with you.",
        fontSize: '16px',
        textAlign: 'left',
        textColor: '#374151',
      },
    },
    {
      id: 'button-cta',
      type: 'button',
      content: {
        text: 'Read Latest Articles',
        url: 'https://www.cutoutimage.com/wp-content/uploads/2022/02/blackandwhite-image-scaled.webp',
        backgroundColor: '#1f2937',
        textColor: '#ffffff',
        alignment: 'center',
      },
    },
    {
      id: 'divider-1',
      type: 'divider',
      content: {
        color: '#e5e7eb',
        thickness: 2,
      },
    },
    {
      id: 'image-feature',
      type: 'image',
      content: {
        url: 'https://www.cutoutimage.com/wp-content/uploads/2022/02/blackandwhite-image-scaled.webp',
        alt: 'Featured article image',
        width: '100%',
        alignment: 'center',
      },
    },
    {
      id: 'text-footer',
      type: 'text',
      content: {
        text: 'Stay connected with us on social media for daily updates and behind-the-scenes content.',
        fontSize: '14px',
        textAlign: 'center',
        textColor: '#6b7280',
      },
    },
  ],
};

export const newsletterTemplate = {
  subject: 'Monthly Newsletter - October 2023',
  preheader: "Don't miss out on this month's highlights",
  components: [
    {
      id: 'newsletter-header',
      type: 'header',
      content: {
        title: 'Monthly Newsletter',
        subtitle: 'October 2023 Edition',
        backgroundColor: '#059669',
        textColor: '#ffffff',
      },
    },
    {
      id: 'intro-text',
      type: 'text',
      content: {
        text: "Dear Subscriber, Here are the top stories and updates from this month that you won't want to miss.",
        fontSize: '18px',
        textAlign: 'left',
        textColor: '#111827',
      },
    },
    {
      id: 'feature-image',
      type: 'image',
      content: {
        url: 'https://wallpapers.com/images/hd/nature-green-background-1600-x-1000-jq7432jkbhgbiw9e.jpg',
        alt: 'Monthly newsletter highlights',
        width: '100%',
        alignment: 'center',
      },
    },
    {
      id: 'content-text',
      type: 'text',
      content: {
        text: 'This month we launched new features, expanded our team, and reached important milestones. Thank you for being part of our journey!',
        fontSize: '16px',
        textAlign: 'left',
        textColor: '#374151',
      },
    },
    {
      id: 'cta-button',
      type: 'button',
      content: {
        text: 'View Full Newsletter',
        url: 'https://wallpapers.com/images/hd/nature-green-background-1600-x-1000-jq7432jkbhgbiw9e.jpg',
        backgroundColor: '#059669',
        textColor: '#ffffff',
        alignment: 'center',
      },
    },
  ],
};

export const promotionalTemplate = {
  subject: '🎉 Special Offer - 50% Off Today Only!',
  preheader: "Limited time offer - don't miss out!",
  components: [
    {
      id: 'promo-header',
      type: 'header',
      content: {
        title: '🎉 SPECIAL OFFER',
        subtitle: '50% OFF Everything - Today Only!',
        backgroundColor: '#dc2626',
        textColor: '#ffffff',
      },
    },
    {
      id: 'offer-text',
      type: 'text',
      content: {
        text: "Don't miss this incredible opportunity! Get 50% off all our products for the next 24 hours only. Use code: SAVE50",
        fontSize: '18px',
        textAlign: 'center',
        textColor: '#059669',
      },
    },
    {
      id: 'promo-image',
      type: 'image',
      content: {
        url: 'https://img.freepik.com/free-vector/flat-sale-background_23-2148941729.jpg?semt=ais_hybrid&w=740&q=80',
        alt: '50% off promotion',
        width: '100%',
        alignment: 'center',
      },
    },
    {
      id: 'shop-button',
      type: 'button',
      content: {
        text: 'SHOP NOW - 50% OFF',
        url: 'https://img.freepik.com/free-vector/flat-sale-background_23-2148941729.jpg?semt=ais_hybrid&w=740&q=80',
        backgroundColor: '#059669',
        textColor: '#ffffff',
        alignment: 'center',
      },
    },
    {
      id: 'terms-text',
      type: 'text',
      content: {
        text: '* Offer valid for 24 hours only. Cannot be combined with other offers. Terms and conditions apply.',
        fontSize: '12px',
        textAlign: 'center',
        textColor: '#6b7280',
      },
    },
  ],
};
