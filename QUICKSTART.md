# EventPlanner - Quick Start Guide

## 🚀 Getting Started

### Phase 1: Frontend Setup (5 mins)

```bash
# Navigate to project root
cd EventPlanner

# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit: `http://localhost:3000`

### Phase 2: Backend Setup (5 mins)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Start backend server
npm run dev
```

Server runs on: `http://localhost:5000`

---

## 🧭 Website Flow

### **Customer Journey**

1. **Home Page** → Browse budget templates
2. **Plan Event** → Enter budget, get breakdown
3. **Browse Vendors** → Filter by category/rating
4. **Post Requirement** → Submit event needs
5. **Get Vendor Quotes** → In-app messaging (future)

### **Vendor Journey**

1. **Register** → Upload details & portfolio
2. **Get Requests** → See customer requirements
3. **Send Quote** → Respond with pricing
4. **Book Client** → Accept & start communication

---

## 📊 Sample Data

The vendors page comes with mock data for:
- ✅ Shiny Decorations (₹2k-15k)
- ✅ Sweet Dreams Bakery (₹800-5k)
- ✅ Lens Magic Photography (₹5k-20k)
- ✅ DJ Beats Studio (₹3k-12k)
- ✅ Elegant Events Catering (₹4k-18k)
- ✅ Floral Paradise (₹3k-12k)

Test filters, sorting, and vendor profiles!

---

## 🎨 UI Features

✅ **Responsive Design** - Mobile, tablet, desktop  
✅ **Gradient Colors** - Primary (#FF6B6B), Secondary (#4ECDC4)  
✅ **Tailwind CSS** - Beautiful styling  
✅ **Smooth Animations** - Hover effects, transitions  
✅ **Icon-based UX** - Easy navigation  

---

## 💻 Pages Built

| Page | Status | Features |
|------|--------|----------|
| Home | ✅ Complete | Hero, How it works, Templates |
| Plan Event | ✅ Complete | Form, Budget breakdown |
| Vendors | ✅ Complete | Grid, Filters, Search |
| Vendor Profile | ✅ Complete | Details, Gallery, Reviews |
| Post Requirement | ✅ Complete | Form, Category selection |

---

## 🔧 Customization

### Change Primary Color
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
}
```

### Update Budget Breakdown %
Edit `src/components/BudgetBreakdown.jsx`:
```js
const breakdown = {
  decoration: Math.round(budget * 0.25), // Change 0.25
  // ... etc
}
```

### Add Mock Vendors
Edit `src/pages/Vendors.jsx`:
```js
const MOCK_VENDORS = [
  // Add more here
]
```

---

## 🚢 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy 'dist' folder to Vercel
```

### Backend (Railway/Render)
```bash
# Push backend/ folder
# Set environment variables
```

---

## 📱 Live Testing Checklist

- [ ] Home page loads (check hero, CTA buttons)
- [ ] Plan Event calculates budget correctly
- [ ] Vendors filter by category/rating
- [ ] Vendor profile shows details & gallery
- [ ] Post requirement form submits
- [ ] Mobile responsive ✓

---

## 🔐 Security Notes

Currently **NO authentication** (V1 feature).

Before production:
- Add OTP verification
- Hash passwords
- Validate all inputs
- Rate limiting
- HTTPS only

---

## 📞 Support

Issues? Check:
1. `npm` is updated: `npm -v` ≥ 8
2. Node installed: `node -v` ≥ 16
3. MongoDB running (for backend)
4. Port 3000/5000 are free

---

**Happy coding! 🎉**
