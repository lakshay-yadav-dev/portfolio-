/**
 * PortfoliX — Global Site Configuration
 * Telegram Customer Support details configured.
 */

const SITE_CONFIG = {
  brandName: 'PortfoliX',
  tagline: 'Your Personal Portfolio. Your Professional Identity.',
  startingPrice: '3,500',
  currencySymbol: '₹',
  
  // Telegram Customer Support
  telegramUsername: '@Luckyydv_876',
  telegramUrl: 'https://t.me/Luckyydv_876',
  
  // Real LinkedIn Profile
  linkedinUrl: 'https://www.linkedin.com/in/lakshay-yadav-0879028b/',
  
  // UPI Payment Details
  upiId: 'ydvlakshay@fam',
  payeeName: 'Lakshay Yadav',
  merchantName: 'Lakshay Yadav',
  
  // Support & Contact
  supportEmail: 'hello@portfolix.live',
  supportHours: 'Instant 24/7 Assistance via Telegram',
  
  // Features summary
  guaranteeText: 'One-Time Payment • Lifetime Access • No Hidden Charges'
};

// Export to window if running in browser
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}
