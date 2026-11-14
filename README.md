# PortfoliX — Premium Temporary Sales Landing Page

A modern, high-converting, SaaS-style landing page designed to sell **customizable personal portfolio websites** starting at **₹3,500 only**.

---

## 🌟 Key Features Included

1. **Exact Headline & Subheading**:
   - **Hero Headline**: *"Your Personal Portfolio. Your Professional Identity."*
   - **Subheading**: *"Get your own premium portfolio website and customize it without coding."*

2. **Flagship Pricing (₹3,500 Only)**:
   - Clearly highlights:
     - **One-time payment** (Zero monthly subscriptions)
     - **No hidden charges**
     - **Customizable portfolio**
     - **Personal login credentials**
     - **Edit portfolio anytime**
     - **Mobile responsive design**
     - **Free high-speed cloud hosting & SSL**

3. **Live Interactive Showcase & CMS Simulator**:
   - Visitors can toggle between **Software Developer**, **UI/UX Designer**, and **Consultant / Growth** templates.
   - Includes a **"Test Client CMS" mode** where potential clients can type in fields (name, role, tagline, skills) and see their live portfolio mockup update in real-time — proving that zero coding is required!
   - Desktop and Mobile viewport toggles.

4. **"How It Works" 5-Step Pipeline**:
   - **Choose** → **Purchase** → **Login** → **Customize** → **Publish**

5. **Conversion & Lead Flow**:
   - Dual primary CTAs: **"Get Your Portfolio"** and **"View Demo"**.
   - Lead Capture & WhatsApp Checkout Modal (automatically opens a prefilled WhatsApp message with order details).
   - Direct UPI / QR Code instant payment modal with copyable UPI ID & UTR confirmation.
   - Interactive Fullscreen Demo Modal.
   - Floating Telegram Support button (@Luckyydv_876).
   - Dedicated Telegram Support Section ("Need Help? We're Here for You!").
   - Real-time live social proof toasts ("Karthik from Bengaluru just purchased...").

6. **Interactive FAQ Accordion**:
   - Pre-answered questions addressing one-time fee, coding requirements, domain mapping, mobile responsiveness, and post-purchase setup.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any browser:
```bash
# Option 1: Double-click index.html or run in PowerShell:
Start-Process index.html

# Option 2: Run a local lightweight Python web server:
python -m http.server 8080
# Then visit: http://localhost:8080 or http://localhost:3000
```

---

## ⚙️ Telegram Support & Configuration

- **Telegram Username**: `@Luckyydv_876`
- **Telegram Link**: `https://t.me/Luckyydv_876`
- **LinkedIn Profile**: `https://www.linkedin.com/in/lakshay-yadav-0879028b/`
- Configured globally in `config.js` and embedded across the floating support button, dedicated support card, and footer.

### 1. UPI Payment Integration
- **UPI ID**: `ydvlakshay@fam`
- **Payee Name**: `Lakshay Yadav`
- Direct 1-click deep links (`upi://pay?pa=ydvlakshay%40fam&pn=Lakshay%20Yadav&am=3200&cu=INR`) and QR codes are dynamically managed with automatic expiry after 16-11-2026 reverting to ₹3,500.

### 2. Deploy in 1 Minute (Free)
- **Vercel**: Run `npx vercel` in this folder, or push to GitHub and import into Vercel.
- **Netlify**: Drag and drop the `temp_pages` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
- **GitHub Pages**: Push to a repository and enable GitHub Pages under repo Settings.

