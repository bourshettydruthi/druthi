Happy Birthday Mansi — Simple 2-page site

Files created:
- index.html — Landing page with heading, customizable message, and "Next" button
- page2.html — Photo display page with image area, upload-on-click, and Canva link
- styles.css — Shared styles and responsive layout
- script.js — Navigation and image upload preview logic

How to use
1. Open `index.html` in your browser. On the landing page you can edit the message directly in the textarea.
2. Click "Next" to go to the photo page. Click the image to upload a local photo (it will preview). The blue button opens the Canva link in a new tab.

Customizing
- Change the main heading by editing the <h1> in `index.html`.
- Change the default message by editing the textarea in `index.html` (or type directly in the browser).
- Replace the placeholder image at `assets/photo-placeholder.jpg` or click the image on page2 to upload your own.
- Edit the link target in `page2.html` by changing the `href` on the anchor with id `canvaLink`.

Notes
- The design is intentionally simple and easy to edit. Colors are defined in `styles.css` root variables.
- To make the site available online, host the folder contents with any static hosting service.
