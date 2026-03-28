<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# This is the PRD which I made for my software. I want you to make an even more elaborated and better PRD than this. Make it more extensive and research-based so that Google and anti-gravity can easily understand it and perform all the actions. It has to be very detailed. And one thing has to be very clear: it has to be a very creative website also.

Product Requirements Document (PRD)
Project Name: AI Hairstyle Recommender Target Environment: Google Anti-Gravity IDE Primary Objective: Build a web application that analyzes a user's uploaded facial photo, determines their face shape, and recommends optimal hairstyles filtered by gender.

1. Product Overview \& Core Concept
This web application sits at the intersection of computer vision and personal styling. The user flow is strictly linear:
The user selects their gender (Male/Female).
The user uploads a clear, front-facing photo of themselves.
The backend processes the image to calculate facial landmarks and categorize the face shape (e.g., Oval, Square, Round, Heart, Long).
The frontend displays the detected face shape and a curated gallery of hairstyles that mathematically suit that specific face shape and selected gender.
2. UI/UX \& Brand Guidelines (Inspiration: ubernatural.io)
The Anti-Gravity UI Agent must adhere to the following aesthetic rules to match the ubernatural.io vibe:
Theme: Minimalist, premium, and clean. Avoid cluttered interfaces or overly vibrant color palettes.
Color Palette: Monochromatic base (Off-whites, soft grays, deep charcoal/black for text) with one muted accent color (e.g., a soft sage green or muted clay) for active states and primary buttons.
Typography: Sans-serif, modern fonts (e.g., Inter, Roobert, or Helvetica Neue). Use large, bold tracking for headers and highly legible, lighter weights for body text.
Interactions: Smooth, subtle micro-interactions. Fade-ins for page transitions, gentle hover states on cards, and a sleek, non-intrusive loading animation during the photo analysis phase.
Layout: Centered, focused content. Use plenty of negative space (whitespace) to give the application a high-end, editorial feel.
3. Core User Flow (Step-by-Step for the UI Agent)
Step 1: The Landing Screen
Large, confident hero text explaining the value proposition.
Two prominent, cleanly designed selection cards: "Male" and "Female". The user must select one to proceed.
Step 2: The Upload Interface
A drag-and-drop zone or a stylized "Choose File" button.
Supported formats: JPG, PNG, WEBP.
Include a small helper text: "For best results, upload a clear, front-facing photo with good lighting and your hair pulled back."
Step 3: The Processing State
Upon upload, transition to a loading screen.
Display a stylized animation (e.g., a scanning line over a generic face silhouette) and text: "Analyzing facial geometry..."
Step 4: The Results Dashboard
Top Section: Display the uploaded photo alongside the calculated Face Shape (e.g., "Your Face Shape: Square"). Include a brief 1-2 sentence explanation of what defines this shape.
Bottom Section: A responsive grid/gallery of recommended hairstyles. Each item in the grid should have a high-quality reference image and the name of the style (e.g., "Textured Crop" or "Long Layers").
4. Technical Implementation \& Backend Logic
The Anti-Gravity Logic/Backend Agent must utilize Python and integrate Computer Vision libraries (like MediaPipe or OpenCV) to process the images. The agent should reference the following GitHub repositories to build the facial analysis logic:
Reference Repositories for AI Agents:
Face Shape Classification Logic:
URL: [https://github.com/hussein073/Hair_Style_Recommendation](https://github.com/hussein073/Hair_Style_Recommendation)
Instructions for AI: Analyze this repository to understand how facial landmarks are used to measure the jaw width, face height, and cheekbone distances to categorize the face into standard shapes (Heart, Long, Oval, Round, Square). Adapt this measurement logic for the backend API.
MediaPipe Integration:
URL: [https://github.com/sunhesh12/face-shape-hairstyle-ml](https://github.com/sunhesh12/face-shape-hairstyle-ml)
Instructions for AI: Use this repository as a reference for implementing Google's MediaPipe. MediaPipe should be used to extract the facial geometry efficiently before passing the coordinates to the classification logic.
Dataset \& Mathematical Approach:
URL: [https://github.com/dsmlr/faceshape](https://github.com/dsmlr/faceshape)
Instructions for AI: Review this repository for the mathematical approach to classifying shapes and handling edge cases in facial mapping.
5. System Architecture Requirements
Frontend: Next.js or React (Tailwind CSS for styling to easily achieve the minimalist aesthetic).
Backend: Python (FastAPI or Flask) to handle the image processing requests.
State Management: Ensure the selected gender from Step 1 is passed as a parameter to the backend API along with the image, so the backend returns the correct dataset of hairstyles.
Hairstyle Database: For the MVP, create a static JSON file mapping Face Shapes + Gender to specific image URLs (you can use placeholder image URLs from Unsplash for the initial build).
Example JSON Structure: {"gender": "male", "shape": "square", "recommendations": [{"style": "Buzz Cut", "image": "url_here"}, ...]}
6. Execution Instructions for Google Anti-Gravity
Spawn UI Agent: Initialize a Next.js project with Tailwind. Build the screens outlined in Section 3 using the aesthetic guidelines in Section 2.
Spawn Logic Agent: Initialize a Python backend. Install MediaPipe. Build an endpoint /analyze-face that accepts an image and a gender string.
Synthesize: Integrate the GitHub repository logic to process the image, determine the shape, and return the matching JSON data to the frontend to populate the results gallery.

I rewrote your document as an agent-ready PRD with clearer scope, implementation detail, and build sequencing because that fits the way you’ve used Google Antigravity to ingest structured product documents and coordinate multi-step app builds before. I also tightened the technical recommendations around image intake, facial landmarking, and analysis constraints using current FastAPI, MediaPipe, and face-shape research so the spec is easier for coding agents to execute reliably.

## PRD

### Document Control

- Product name: AI Hairstyle Recommender
- Product type: Creative AI-powered web application
- Target environment: Google Anti-Gravity IDE
- Target platforms: Responsive web, desktop-first, mobile-friendly
- PRD version: v2.0
- Primary goal: Let a user upload a clear face photo, detect probable face shape, and receive hairstyle recommendations tailored to both face shape and selected gender.
- Core success principle: The product must feel like a premium editorial styling experience, not a generic utility tool.


### Executive Summary

AI Hairstyle Recommender is a visually striking web product that combines facial analysis with style guidance. The system asks the user to select a gender, upload a front-facing image, analyzes facial landmarks, classifies face shape, and returns curated hairstyle recommendations with visual references and concise explanations.

This should be built as a high-trust, highly aesthetic, low-friction experience. The output must feel like a stylist’s recommendation board: elegant, modern, minimal, and creatively presented.

### Problem Statement

Most users do not know which hairstyles suit their face shape, and existing tools are often visually dated, inaccurate, or too technical. Users want a fast, attractive, and simple way to understand what works for them without needing professional styling knowledge.

### Product Vision

Create the most beautiful and easy-to-understand web experience for face-shape-based hairstyle discovery. The product should turn a technical classification task into a premium, aspirational styling journey.

### Product Goals

- Detect likely face shape from a user-uploaded photo.
- Filter hairstyle suggestions by selected gender.
- Present results in a visually rich, creative, premium interface.
- Provide enough explanation that users trust the recommendation.
- Keep the flow linear and fast.
- Make the PRD explicit enough that AI coding agents can build without ambiguity.


### Non-Goals

- Real-time AR hairstyle overlay in MVP.
- Barbershop booking.
- Hair color simulation.
- Full salon marketplace.
- Multi-angle 3D scan.
- Medical, dermatological, or biometric identity use.
- Any face recognition or identity matching.


### Users

- Primary: Style-conscious users who want haircut guidance before visiting a salon or barber.
- Secondary: Men and women experimenting with a new look.
- Tertiary: Content creators, beauty bloggers, and personal stylists using it as an inspiration tool.


### Jobs To Be Done

- “Help me understand my face shape.”
- “Show me hairstyles that are likely to suit me.”
- “Give me visual haircut ideas I can save or show a barber.”
- “Make the process feel premium and trustworthy.”


### Core Promise

Upload one photo, understand your face shape, and instantly explore haircut ideas that fit you.

***

### Product Principles

- **Beauty first**: The site must look intentional, editorial, and premium.
- Clarity over complexity: The user should never wonder what to do next.
- One task per screen: Each state should have a single dominant action.
- Trust through explanation: Every result should explain what was detected and why recommendations fit.
- Fast perceived performance: Even when analysis takes time, the interface should feel smooth and confident.
- Graceful fallback: When classification confidence is low, the product should say so clearly and still help the user.


### Experience Concept

The site should feel like a hybrid of:

- Luxury fashion editorial
- Modern AI product
- Personal style consultation
- Minimal portfolio website

This is not a dashboard-heavy SaaS look. It is a guided visual experience with strong typography, large imagery, cinematic whitespace, subtle motion, and polished transitions.

***

### Creative Direction

#### Brand personality

- Intelligent
- Refined
- Fashion-forward
- Calm
- Precise
- Confident


#### Visual tone

- Minimalist and premium
- Soft contrast, not harsh
- Monochrome foundation with one muted accent
- Subtle gradients, frosted surfaces only where useful
- Rich image presentation with gallery-style layouts


#### Inspiration

Use the elegance and compositional restraint of premium editorial websites. The experience should feel designed, not templated.

#### Color system

Primary palette:

- Ivory / warm white: page background
- Soft gray: surfaces and borders
- Charcoal / near-black: headline text
- Muted accent: sage, stone blue, dusty olive, or clay

Rules:

- No bright neon colors
- No heavy shadows
- No overly saturated gradients
- Accent color only for CTA, selection state, and small highlights


#### Typography

- Headings: Inter, Manrope, Neue Montreal, or similar high-quality sans-serif
- Body: Inter or system sans-serif
- Headings should be large, spacious, and confident
- Body copy should be small-to-medium, clean, and highly legible
- Use typographic hierarchy to create luxury and clarity


#### Motion

- Fade and slide transitions between steps
- Gentle hover elevation on cards
- Soft shimmer or scan motion during analysis
- No flashy bounce effects
- Motion duration should feel smooth and deliberate

***

### Information Architecture

Main screens:

1. Landing page
2. Gender selection state
3. Upload state
4. Analysis state
5. Results page
6. Error / retry state
7. About methodology modal
8. Privacy notice modal

### Navigation Model

- Single-page guided flow for MVP
- Minimal header
- Optional utility links: About, Privacy, Methodology
- Sticky CTA only where helpful
- No multi-level complex navigation

***

### User Flow

#### Step 1: Landing

Purpose:

- Establish value proposition
- Build trust
- Lead directly into the flow

Requirements:

- Large hero statement
- One supporting line explaining what the product does
- One primary CTA: “Find My Best Hairstyles”
- Supporting note: “Takes under a minute”
- Optional editorial-style background collage or abstract face-line motif
- Scroll hint or soft transition to selection module

Suggested hero copy:

- Headline: “Find the haircut that fits your face.”
- Subhead: “Upload a clear photo, discover your face shape, and explore styles chosen to suit your features.”


#### Step 2: Gender Selection

Purpose:

- Set recommendation context before image upload

Requirements:

- Two large selection cards: Male, Female
- Cards should feel premium, not like radio buttons
- Selected state must be obvious
- Continue button disabled until selection is made
- Allow back navigation to change selection later

Agent note:

- Store selection in frontend state
- Pass selected gender to backend in the analysis request
- Keep architecture extensible so additional categories can be added later without redesign


#### Step 3: Upload

Purpose:

- Collect the image with clear guidance

Requirements:

- Drag-and-drop upload zone
- “Choose File” button
- Supported formats: JPG, JPEG, PNG, WEBP
- Max file size: 5 MB recommended
- Show thumbnail preview before submit
- Provide helper text for better accuracy

Required helper copy:

- “For best results, use a front-facing photo with good lighting, minimal tilt, no heavy shadows, and hair pulled back from the face.”

Additional upload guidance:

- Remove sunglasses
- Avoid side profiles
- Avoid multiple faces
- Avoid low-resolution screenshots
- Avoid extreme expressions


#### Step 4: Processing

Purpose:

- Maintain trust during analysis

Requirements:

- Full-screen or centered processing state
- Animated face scan line or geometric landmark visualization
- Text sequence:
    - “Reading image…”
    - “Mapping facial geometry…”
    - “Estimating face shape…”
    - “Curating recommended styles…”
- Average perceived wait target: under 4 seconds
- Include reassurance text: “Your image is used only for this analysis.”


#### Step 5: Results

Purpose:

- Reveal the face shape and convert it into hairstyle recommendations

Requirements:

- Show uploaded image
- Show detected face shape
- Show confidence label: High / Medium / Low
- Show short explanation of the shape
- Show grid of recommended hairstyles
- Each hairstyle card includes:
    - Image
    - Style name
    - Fit explanation
    - Length category
    - Maintenance level
    - Texture compatibility
- Include “Try another photo” CTA
- Include “Change gender” CTA
- Include “Show styles to avoid” optional section
- Include “How we determined this” expandable explanation


#### Optional MVP+ Result Enhancements

- Save result as image
- Download recommendation board PDF
- Share link
- Compare 2–3 styles
- Salon-ready notes: “Tell your barber…”

***

### Functional Requirements

#### FR1: Gender Selection

- System must require gender selection before analysis.
- Allowed values for MVP: `male`, `female`.
- Selection must persist through the upload and result flow.
- User must be able to change selection without reloading the site.


#### FR2: Image Upload

- System must accept one image file.
- Allowed MIME types: `image/jpeg`, `image/png`, `image/webp`.
- System must reject unsupported formats with a clear message.
- System must validate file size before processing.
- System must show local preview before submission.


#### FR3: Face Detection

- System must detect whether one clear face is present.
- If zero faces are found, show an error and ask for a clearer image.
- If multiple faces are found, reject and ask for a single-person photo.
- If face angle or quality is insufficient, show a low-quality warning.


#### FR4: Landmark Extraction

- System must extract facial landmarks from the uploaded image.
- System must calculate relevant geometric measurements.
- System must normalize measurements for scale so results are independent of image size.
- System must not store raw landmarks permanently in MVP unless analytics mode is explicitly enabled.

MediaPipe Face Landmarker for web can output 3D face landmarks, optional blendshape scores, and facial transformation matrices, which makes it suitable as a landmarking foundation for shape analysis and future visual effects features. The same guide shows an example result with 478 landmarks per face, so the PRD should assume dense landmark data is available for measurement-based classification.

#### FR5: Face Shape Classification

- System must classify the face into one of these categories for MVP:
    - Oval
    - Round
    - Square
    - Heart
    - Long / Oblong
- System should produce:
    - `predicted_shape`
    - `confidence_score`
    - `supporting_measurements`
- System must use measurement ratios rather than raw pixel lengths.
- System should use threshold logic and fallback heuristics where confidence is borderline.
- System must support “uncertain” or “mixed” cases internally, even if the UI displays the nearest best-fit shape.

Research on automatic face-shape classification notes that the task is inherently subjective and that literature is relatively scarce, so the product must present results as best-fit guidance rather than absolute fact. That same research frames landmark-based face-shape detection as a building block for hairstyle recommenders, which supports your product direction.

#### FR6: Recommendation Engine

- System must map `gender + face_shape` to a list of hairstyle recommendations.
- Each result must contain:
    - style id
    - style name
    - image URL
    - short description
    - why it suits this face shape
    - hair length
    - maintenance level
    - texture suitability
- Initial dataset may be static JSON.
- Architecture must allow later replacement with CMS, database, or vector search.


#### FR7: Results Presentation

- System must show at least 6 hairstyle recommendations per face shape.
- System should prioritize quality over quantity.
- System should show visual consistency across cards.
- System must keep all cards responsive across desktop and mobile breakpoints.


#### FR8: Retry and Recovery

- User must be able to:
    - Upload a different photo
    - Change gender
    - Start over
- Error states must always include the next best action.


#### FR9: Privacy and Trust

- System must disclose that the image is analyzed for hairstyle recommendation only.
- System must avoid any identity claims or face recognition wording.
- System should process transiently and delete uploaded images after analysis in MVP unless explicit user consent for retention is added later.

***

### Creative Website Requirements

This product must not look like a plain form plus results page. It must feel like a memorable branded experience.

#### Creative features required in MVP

- Cinematic hero with oversized typography
- Abstract facial contour lines or softly animated geometry in background
- Editorial card layouts for results
- High-end micro-interactions
- Image masks with rounded-but-premium corners
- Soft gradient ambient lighting behind key sections
- Layered sections with depth but minimal clutter
- Elegant empty states
- Beautiful loading experience, not a default spinner


#### Creative interaction patterns

- Gender cards reveal subtle texture on hover
- Upload area responds with animated border glow
- Processing screen simulates facial mapping
- Results cards fade in sequentially
- Clicking a hairstyle opens an immersive detail drawer or modal
- Hovering recommendation cards reveals “Why this works”


#### Creative copy tone

- Confident
- Short
- Elegant
- Helpful
- Non-technical in user-facing surfaces

Examples:

- “Balanced proportions. Strong versatility.”
- “Soft volume works well here.”
- “Shorter sides can sharpen the silhouette.”

***

### UX Content Requirements

#### Trust copy

- “Your photo is analyzed only to estimate facial structure for style recommendations.”
- “Best results come from a neutral, front-facing image.”
- “This is a style recommendation tool, not an identity system.”


#### Empty and error copy

- No face found: “We couldn’t clearly detect a face. Try a brighter, front-facing photo.”
- Multiple faces: “Please upload a photo with only one person in frame.”
- Low confidence: “We found a possible match, but the image quality makes the result less certain.”
- Unsupported file: “Please upload JPG, PNG, or WEBP.”
- Too large: “Please upload an image under 5 MB.”

***

### Technical Architecture

#### Frontend

- Framework: Next.js 14+ with App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion
- Image rendering: Next/Image
- State: React state or Zustand for simple multi-step flow
- Form handling: React Hook Form optional
- File upload UX: native input plus drag-drop wrapper


#### Backend

- Framework: FastAPI
- Language: Python 3.11+
- CV / ML libraries:
    - MediaPipe
    - OpenCV
    - NumPy
    - Pillow
- Optional utilities:
    - python-multipart
    - python-magic
    - aiofiles

FastAPI’s file upload docs recommend using file uploads as form data and note that `python-multipart` is required to receive uploaded files. The same docs show that `UploadFile` is preferable to raw bytes for larger files because it uses a spooled file mechanism, exposes metadata, and avoids loading everything into memory at once.

#### Deployment

- Frontend: Vercel or Firebase Hosting
- Backend: Cloud Run, Render, Railway, or similar Python-hosted environment
- CDN for static hairstyle images
- Environment variables for API URL and storage settings


#### Recommended Architecture Choice

- Frontend handles UI, preview, and result display
- Backend performs all image analysis and classification
- Static JSON or lightweight database provides recommendation mappings
- No heavy client-side ML in MVP unless future experiments require it

MediaPipe’s web guide states that `detect()` and `detectForVideo()` run synchronously and can block the UI thread, recommending web workers for client-side video use. Because of that, a server-side Python analysis service is the cleaner MVP choice for reliable UX and simpler orchestration inside an AI-assisted build flow.

***

### System Components

#### Component 1: Landing Module

Responsibilities:

- Hero rendering
- Primary CTA
- Brand introduction


#### Component 2: Selection Module

Responsibilities:

- Capture gender
- Validate selection
- Route to upload


#### Component 3: Upload Module

Responsibilities:

- File input
- Validation
- Local preview
- Submit to backend


#### Component 4: Analysis Service

Responsibilities:

- Read uploaded image
- Validate MIME and size
- Detect face
- Extract landmarks
- Compute ratios
- Classify face shape
- Return recommendations


#### Component 5: Recommendation Service

Responsibilities:

- Query hairstyle mapping using gender + shape
- Return recommendation array


#### Component 6: Results Module

Responsibilities:

- Render summary
- Render hairstyle cards
- Display explanations
- Retry actions

***

### Backend Workflow

1. Receive multipart request with image and gender.
2. Validate file type and file size.
3. Decode image safely.
4. Detect exactly one usable face.
5. Extract landmarks.
6. Calculate face geometry features.
7. Classify best-fit face shape.
8. Compute confidence.
9. Query recommendation dataset.
10. Return structured JSON response.

A practical FastAPI upload pattern is to validate extension, size, and actual content type from file headers rather than trusting only the filename, because extensions can be spoofed. That validation pattern is worth specifying directly in the build requirements so the agent does not implement a weak upload endpoint.[^1]

***

### Face Shape Logic

#### Input assumptions

- Single face
- Near-neutral expression
- Front-facing
- Minimal tilt
- Good lighting
- Hairline reasonably visible

The research source specifically describes face-shape identification from near neutral-pose 2D images, which supports these input constraints as product requirements rather than optional suggestions.

#### Suggested measurement features

Use landmark-derived ratios such as:

- Face length / face width
- Forehead width / cheekbone width
- Jaw width / cheekbone width
- Chin taper ratio
- Jaw angle sharpness proxy
- Temple-to-jaw balance
- Width distribution across upper, middle, and lower face


#### Example heuristic intent

- Oval: face length greater than width, soft jaw, balanced proportions
- Round: width close to length, softer jaw, fuller cheeks
- Square: broad forehead and jaw, sharper jawline, similar width zones
- Heart: wider forehead/cheekbones, narrower jaw/chin
- Long: significantly greater face length than width


#### Confidence model

- High: strong ratio separation, frontal face, clear landmarks
- Medium: acceptable photo with moderate ambiguity
- Low: poor angle, obstructed features, weak shape separation


#### Fallback behavior

- If confidence is low, still return likely best-fit shape
- Add note: “Best estimate from available image”
- Suggest retaking photo for better precision

***

### Recommendation Engine Design

#### Data source

Use a static JSON file for MVP with a structure like:

```json
{
  "male": {
    "square": [
      {
        "id": "m_square_01",
        "style": "Textured Crop",
        "image": "/hairstyles/male/textured-crop.jpg",
        "why_it_works": "Adds texture on top while keeping the silhouette controlled.",
        "length": "short",
        "maintenance": "medium",
        "texture": ["straight", "wavy"]
      }
    ]
  }
}
```


#### Recommendation rules

- Return 6 to 10 styles
- Prefer visual diversity within the same face shape
- Include mix of conservative and trend-forward options
- Keep names salon-friendly and understandable
- Avoid duplicate silhouettes with different names


#### Suggested metadata fields

- `id`
- `gender`
- `shape`
- `style`
- `image`
- `description`
- `why_it_works`
- `length`
- `maintenance`
- `texture`
- `formality`
- `trend_score`
- `avoid_if`

***

### API Specification

#### Endpoint 1: Analyze Face

`POST /api/analyze-face`

Request:

- Content type: `multipart/form-data`
- Fields:
    - `image`: file
    - `gender`: string

FastAPI’s request-file documentation explains that uploaded files come via `multipart/form-data`, and it also warns that file/form uploads cannot be combined with a JSON body in the same request the way many agents incorrectly assume.

Response example:

```json
{
  "success": true,
  "gender": "male",
  "predicted_shape": "square",
  "confidence": 0.84,
  "confidence_label": "high",
  "shape_explanation": "Your face appears broad through the forehead and jaw with a more defined angular structure.",
  "image_preview_url": "/temp/123.jpg",
  "measurements": {
    "face_length_width_ratio": 1.22,
    "jaw_cheek_ratio": 0.96,
    "forehead_jaw_ratio": 1.03
  },
  "recommendations": [
    {
      "id": "m_square_01",
      "style": "Textured Crop",
      "image": "/hairstyles/male/textured-crop.jpg",
      "why_it_works": "Texture softens strong angular structure while keeping shape clean.",
      "length": "short",
      "maintenance": "medium",
      "texture": ["straight", "wavy"]
    }
  ],
  "warnings": []
}
```


#### Endpoint 2: Health

`GET /api/health`

Response:

```json
{
  "status": "ok"
}
```


#### Endpoint 3: Hairstyle Catalog

`GET /api/hairstyles?gender=male&shape=square`

Purpose:

- Debugging
- CMS compatibility
- Future browsing mode

***

### Frontend Page Requirements

#### Landing Page

Sections:

- Hero
- Benefit strip
- How it works
- Start CTA
- Methodology teaser
- Privacy reassurance


#### Upload Page

Sections:

- Step indicator
- Gender summary
- Upload card
- Guidance note
- Preview state
- Submit CTA


#### Processing Page

Sections:

- Animated scan
- Processing text
- Trust note


#### Results Page

Sections:

- Result summary
- Face shape explanation
- Recommendations gallery
- Style detail drawer
- Retry / reset actions
- Methodology accordion

***

### Responsive Design Requirements

#### Desktop

- Large split layouts
- Image and results visible together
- Rich whitespace
- Gallery in 3–4 columns


#### Tablet

- Stacked layout with wide cards
- Gallery in 2–3 columns


#### Mobile

- Step flow remains elegant and compact
- Results summary stacked vertically
- Gallery in 2 columns
- Buttons thumb-friendly
- Text never too small

***

### Accessibility Requirements

- All interactive elements keyboard accessible
- Visible focus states
- Image upload accessible via keyboard
- ARIA labels for file input and step controls
- Minimum contrast compliance for text
- Motion-reduced version for users with reduced motion preferences
- Avoid essential information conveyed only through animation or color

***

### Performance Requirements

- Initial page load under 3 seconds on good connection
- Frontend bundle optimized
- Compress all static hairstyle images
- Lazy load recommendation images
- Use skeletons for image-heavy states
- Analysis API target under 5 seconds for supported image sizes

***

### Security Requirements

- Sanitize filenames
- Validate actual content type
- Reject executable or malformed payloads
- Limit upload size
- Use temporary storage only
- Delete transient files on schedule
- Rate-limit upload endpoint
- Log errors without storing sensitive image content

***

### Privacy Requirements

- Show privacy notice before upload
- Do not claim biometric identification
- Do not use uploaded photos for model training by default
- Do not expose image URLs publicly
- Store only temporary analysis artifacts for debugging, if enabled
- Add deletion policy in backend config

***

### Error Handling

Required cases:

- No file
- Invalid file type
- File too large
- Corrupted image
- No face detected
- Multiple faces detected
- Landmarks not reliable
- Classification confidence too low
- Internal server error
- Recommendation dataset missing

Error response format:

```json
{
  "success": false,
  "error_code": "NO_FACE_DETECTED",
  "message": "We couldn't clearly detect a face. Please upload a brighter, front-facing image.",
  "retryable": true
}
```


***

### Analytics Requirements

Track:

- Landing CTA click
- Gender selected
- Upload started
- Upload completed
- Analysis success
- Analysis failed
- Predicted face shape
- Result viewed
- Hairstyle card clicked
- Retry clicked
- Start over clicked

KPIs:

- Upload completion rate
- Analysis success rate
- Result view rate
- Retry frequency
- Most common face shapes
- Most clicked hairstyles
- Drop-off by step

***

### QA Acceptance Criteria

#### General

- User can complete the full flow without refresh
- Interface looks premium on desktop and mobile
- No broken images
- All CTAs work


#### Upload

- Reject unsupported formats
- Reject oversized files
- Show preview correctly
- Handle drag-drop and click upload


#### Analysis

- Backend receives image and gender
- Valid single-face image returns shape and recommendations
- Invalid image returns clear error
- Low-confidence images return warning


#### Results

- Correct face shape label displayed
- At least 6 recommendation cards shown
- Cards contain image, name, and explanation
- Retry flow works from results page


#### Creative Quality

- Motion feels polished
- Typography feels premium
- Layout has strong whitespace
- Visual design does not resemble default template UI

***

### Definition of Done

The MVP is done when:

- A user can select gender, upload a photo, receive a face shape result, and browse hairstyle recommendations.
- The result feels trustworthy and visually premium.
- Error cases are handled gracefully.
- The codebase is modular enough for future AR try-on, style personalization, and saved lookbooks.


## Agent Build Notes

### Anti-Gravity Instructions

Use this as the build directive for Google Anti-Gravity:

#### Master Objective

Build a premium, creative web app called AI Hairstyle Recommender. The product must analyze a user-uploaded front-facing face photo, estimate face shape using facial landmarks, and return hairstyle recommendations filtered by gender. The website must feel editorial, minimal, luxurious, and visually memorable.

#### UI Agent Tasks

- Initialize Next.js + TypeScript + Tailwind
- Create multi-step flow:
    - Landing
    - Gender selection
    - Upload
    - Processing
    - Results
- Implement premium visual design with large typography, muted palette, whitespace, soft motion, and refined cards
- Use Framer Motion for transitions
- Build drag-drop upload zone
- Add polished loading state
- Build responsive results gallery
- Add modal/drawer for hairstyle detail


#### Backend Agent Tasks

- Initialize FastAPI project
- Add `python-multipart`
- Use `UploadFile`-based multipart endpoint for image intake
- Validate file type, size, and content
- Integrate MediaPipe for landmark extraction
- Compute face-shape ratios
- Return predicted shape plus confidence
- Map shape + gender to hairstyle JSON dataset
- Return structured response


#### Logic Agent Tasks

- Review and adapt logic from the reference repositories provided by the user
- Normalize landmark measurements
- Implement threshold-based classification for five face shapes
- Add fallback handling for low-confidence or invalid cases
- Keep classification explainable with supporting measurements


#### Data Agent Tasks

- Create static hairstyle JSON dataset
- Provide 6–10 styles per gender-shape pair
- Include descriptive metadata
- Use consistent placeholder images initially
- Ensure naming feels realistic and salon-friendly


#### Integration Agent Tasks

- Connect frontend upload form to backend API
- Pass `gender` with image payload
- Render returned result object into UI
- Handle errors, retries, and resets
- Ensure environment variables are documented


### Suggested File Structure

```txt
/apps
  /web
    /app
    /components
    /lib
    /public
      /hairstyles
  /api
    /app
      /routers
      /services
      /models
      /utils
      /data
```


### Recommended Future Roadmap

Phase 1:

- Gender + upload + shape result + recommendations

Phase 2:

- Save lookboard
- Share result
- Better confidence explanation
- Expanded hairstyle library

Phase 3:

- Virtual hairstyle preview
- Face-shape plus hair texture personalization
- Barber-ready export card
- User accounts and saved preferences


### Research Notes

Face-shape analysis should explicitly ask for a near-neutral, front-facing image because published work in this area highlights the sensitivity and subjectivity of the task and bases its method on near neutral-pose 2D photos. MediaPipe also already supports dense face landmark output and optional expression-related outputs, which makes it a strong base for an MVP today and an AR-style upgrade later.

If you want the next step, I can turn this into a second document with user stories, acceptance criteria, database schema, API contracts, and a copy-paste master prompt for Google Anti-Gravity.
<span style="display:none">[^10][^11][^12][^13][^14][^15][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://oneuptime.com/blog/post/2026-01-26-fastapi-file-uploads/view

[^2]: https://www.youtube.com/watch?v=3JctK0PJ_co

[^3]: https://www.youtube.com/watch?v=NiK5wHce03Y

[^4]: https://www.youtube.com/watch?v=cFVn6xs37-k

[^5]: https://www.youtube.com/watch?v=Cx4Ellaj6kk

[^6]: https://github.com/Aman-Preet-Singh-Gulati/face-mesh-mediapipe/blob/main/Facial landmarks detection using mediapipe.ipynb

[^7]: https://doaj.org/article/efe4861fdc8649a7b12b40ed7b7e5394

[^8]: https://pysource.com/2021/05/14/facial-landmarks-detection-with-opencv-mediapipe-and-python/

[^9]: https://jayhawk24.hashnode.dev/upload-files-in-fastapi-with-file-validation

[^10]: https://pmc.ncbi.nlm.nih.gov/articles/PMC7501398/

[^11]: https://www.youtube.com/watch?v=3NePkYhFkiw

[^12]: https://fastapi.tiangolo.com/tutorial/request-files/

[^13]: https://arxiv.org/pdf/1911.07916.pdf

[^14]: https://www.youtube.com/watch?v=5oKvJI_ZCGU

[^15]: https://stackoverflow.com/questions/69192379/validate-file-type-and-extention-with-fastapi-uploadfile

