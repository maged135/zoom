# ZOOM Cleaning Services Platform

A modern admin and marketing platform for cleaning services built with Next.js 16, Redux Toolkit, and real API integration. Features role-based access control, internationalization (English/Arabic RTL), and beautiful responsive UI.

## Features

- **Real API Integration**: Connected to `https://api-moraad.nussuqapp.com/`
  - Token refresh mechanism with auto-retry on 401
  - Secure token storage using localStorage
  - Error handling with proper user feedback
- **Authentication System**: Real API authentication with token-based session management
- **Role-Based Access Control**: 
  - Admin Dashboard for SUPER_ADMIN users
  - ZOOM Cleaning Services landing page for MARKETER users
- **Internationalization**: Full English (LTR) and Arabic (RTL) support
- **Protected Routes**: Middleware-based route protection
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Form Validation**: React Hook Form + Zod validation
- **Toast Notifications**: Sonner for user feedback

## Tech Stack

- **Framework**: Next.js 16 with App Router and Turbopack
- **State Management**: Redux Toolkit + React-Redux with custom API client
- **Form Handling**: React Hook Form + Zod
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl + i18n.config.ts
- **Notifications**: Sonner
- **Icons**: Lucide React
- **HTTP Client**: Custom API service with token refresh logic

## Project Structure

```
app/
├── layout.tsx                 # Root layout with providers
├── providers.tsx              # Redux & Sonner providers
├── globals.css                # Global styles
├── [locale]/
│   ├── layout.tsx             # Locale layout (lang/dir attributes)
│   ├── page.tsx               # Home page (redirects based on auth)
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx       # Login page
│   ├── admin/
│   │   └── page.tsx           # Admin dashboard (SUPER_ADMIN only)
│   └── marketer/
│       └── page.tsx           # Marketer landing page
lib/
├── store.ts                   # Redux store
├── hooks.ts                   # Redux hooks
└── slices/
    └── authSlice.ts           # Auth reducer
components/
├── language-switcher.tsx      # Language switcher
└── ui/                        # shadcn/ui components
middleware.ts                  # Route protection & i18n routing
i18n.config.ts               # i18n configuration
```

## Environment Setup

Create a `.env.local` file with:

```
NEXT_PUBLIC_API_URL=https://api-moraad.nussuqapp.com
```

## Demo Credentials

Use your actual API credentials to log in. The application authenticates against the real backend at:

**API Endpoint**: `https://api-moraad.nussuqapp.com/api/auth/login`

- **Admin Users**: Login with credentials that have `userType: SUPER_ADMIN`
- **Marketer Users**: Login with credentials that have `userType: MARKETER`

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   pnpm dev
   ```

3. **Open your browser**:
   - English: http://localhost:3000/en/login
   - Arabic: http://localhost:3000/ar/login

## Language Support

The application supports two languages:
- **English (en)**: LTR layout
- **Arabic (ar)**: RTL layout

Use the language switcher in the top-right corner to toggle between languages. The UI automatically adjusts text direction based on the selected language.

## Authentication Flow

1. User navigates to `/[locale]/login`
2. Enters credentials (email & password)
3. API validates credentials at `POST /api/auth/login`
4. On success:
   - `accessToken` and `refreshToken` stored in localStorage
   - User data fetched from `GET /api/auth/me`
   - Redux state updated with user info
   - Redirects to role-specific dashboard
5. Token refresh automatic on 401 responses
6. Protected routes checked via middleware

## Role-Based Routing

Based on the `userType` from API response:
- **SUPER_ADMIN**: Redirected to `/admin` dashboard with user stats
- **MARKETER**: Redirected to `/marketer` landing page (ZOOM Cleaning Services)
- **Unauthenticated**: Redirected to `/login`

## Protected Routes

Middleware validates:
- Presence of `auth_token` cookie
- Attempt to access protected routes without auth
- Attempt to access login page while authenticated

## Middleware Features

- Automatic locale detection and routing
- Protected route enforcement
- Authentication token validation
- Redirect logic based on user roles

## State Management

The Redux store manages:
- `auth.user`: Current user information (id, email, fullName, phoneNumber, userType)
- `auth.accessToken`: JWT access token
- `auth.refreshToken`: Refresh token for token renewal
- `auth.isAuthenticated`: Authentication state
- `auth.isLoading`: Loading state
- `auth.error`: Error messages

## Form Validation

Login form uses Zod schema:
- Email: Valid email format
- Password: Minimum 6 characters

Error messages display inline below form fields.

## UI/UX Features

- Responsive design (mobile-first)
- Loading states with visual feedback
- Toast notifications for user actions
- Clean, modern component-based architecture
- RTL support for Arabic
- Dark mode ready

## Deployment

This application is ready to deploy to Vercel:

```bash
vercel deploy
```

Environment variables can be configured in Vercel project settings.

## API Integration Details

The application includes a custom API client (`lib/api.ts`) that handles:

### Endpoints
- `POST /api/auth/login` - User authentication
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/refresh` - Refresh access token

### Features
- Automatic token refresh on 401 responses
- Request retry mechanism
- Error handling with user-friendly messages
- Secure token storage in localStorage

## Future Enhancements

- Cleaning services management API
- Service booking system
- Payment integration
- Email verification & password reset
- OAuth/Social login
- User profile management
- Admin user management interface
- Analytics and reporting dashboard
- Customer reviews and ratings system

## License

MIT
