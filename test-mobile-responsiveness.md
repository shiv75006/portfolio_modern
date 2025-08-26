# Mobile Responsiveness Test Plan

This document outlines the testing approach for verifying the mobile responsiveness of the portfolio website.

## Test Environments

Test the website on the following devices and screen sizes:

1. **Mobile Phones**
   - Small (320px - 375px width)
   - Medium (376px - 428px width)
   - Large (429px - 576px width)

2. **Tablets**
   - Small (577px - 768px width)
   - Large (769px - 992px width)

3. **Desktop**
   - Small (993px - 1200px width)
   - Large (1201px+ width)

## Test Cases

### 1. Navigation

- [ ] Hamburger menu appears on mobile devices
- [ ] Menu opens and closes correctly on tap
- [ ] All navigation links work correctly
- [ ] Active state is visible on the current section

### 2. Hero Section

- [ ] Name and title are readable on all screen sizes
- [ ] Bio text is properly sized and readable
- [ ] Buttons are properly sized and tappable (minimum 44x44px touch target)
- [ ] Social media icons are properly sized and spaced

### 3. About Me Section

- [ ] Text is readable on all screen sizes
- [ ] Spacing between paragraphs is appropriate
- [ ] Section maintains proper padding on all sides

### 4. Experience Section

- [ ] Timeline layout adjusts appropriately for mobile
- [ ] Cards stack vertically on mobile
- [ ] Text and content are readable
- [ ] Animations work correctly on mobile

### 5. Tech Stack Section

- [ ] Tech cards adjust size appropriately
- [ ] Grid layout responds to screen size changes
- [ ] Icons and text are visible and readable
- [ ] Animations work correctly on mobile

### 6. Projects Section

- [ ] Project cards stack vertically on mobile
- [ ] Images scale appropriately
- [ ] Text is readable
- [ ] Buttons and interactive elements are tappable

### 7. Certificates Section

- [ ] Certificate cards adjust size appropriately
- [ ] Grid layout responds to screen size changes
- [ ] Images scale appropriately
- [ ] Animations work correctly on mobile

### 8. Footer/Contact Section

- [ ] Contact form is usable on mobile
- [ ] Form inputs are properly sized
- [ ] Quick links are readable and tappable
- [ ] Social media icons are properly sized and spaced

### 9. General

- [ ] No horizontal scrolling on any screen size
- [ ] Text remains readable at all screen sizes
- [ ] Proper spacing between sections
- [ ] No overlapping elements
- [ ] Animations are smooth and don't cause performance issues

## Testing Tools

- Chrome DevTools Device Mode
- Browser resizing
- Physical devices when available
- Lighthouse mobile performance audit

## Reporting Issues

For any responsiveness issues found, document:
1. The specific component/section
2. The screen size where the issue occurs
3. A description of the issue
4. A screenshot if possible