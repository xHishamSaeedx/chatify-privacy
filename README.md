# Chatify Privacy Website

A privacy-focused website for Chatify that includes a privacy policy and account deletion request functionality.

## Features

- **Privacy Policy Page**: Comprehensive privacy policy with modern, responsive design
- **Account Deletion Request**: Form for users to request account deletion with Firebase integration
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations

## Pages

### Privacy Policy (`/`)

- Complete privacy policy for Chatify
- Information about data collection, usage, and user rights
- Link to account deletion request form

### Account Deletion Request (`/account-deletion`)

- Form for users to submit account deletion requests
- Collects: name, username, email, and optional reason
- Stores requests in Firebase Firestore collection `account_deletion_requests`
- Success/error feedback for users

## Firebase Integration

The application uses Firebase Firestore to store account deletion requests. Each request includes:

- User's full name
- Username
- Email address
- Optional reason for deletion
- Request timestamp
- Status (pending)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file with Firebase configuration (optional - uses fallback values):

   ```env
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_DATABASE_URL=your-database-url
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_CLIENT_EMAIL=your-client-email
   VITE_FIREBASE_PRIVATE_KEY=your-private-key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Firebase Collection Structure

The application creates a collection called `account_deletion_requests` with documents containing:

```javascript
{
  name: "User's full name",
  username: "Chatify username",
  email: "user@example.com",
  reason: "Optional reason for deletion",
  requestDate: Timestamp,
  status: "pending"
}
```

## Technologies Used

- React 19
- React Router DOM
- Firebase Firestore
- Vite
- CSS3 with modern features

## Privacy Compliance

This website helps Chatify comply with privacy regulations by:

- Providing clear privacy policy
- Offering easy account deletion requests
- Storing deletion requests securely in Firebase
- Following GDPR and other privacy law requirements

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
