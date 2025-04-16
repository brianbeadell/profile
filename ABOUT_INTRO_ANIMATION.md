# Portfolio Entrance Animation

This portfolio site now features an engaging entrance animation inspired by [resn.co.nz](https://resn.co.nz/). Here's what we implemented:

## Features

1. **Animated Entrance Experience**
   - Full-screen gradient background that welcomes users
   - Multi-stage animation with text fading in sequentially
   - Interactive "EXPLORE" button that transitions to the main site
   - A one-time experience (uses localStorage to skip on return visits)

2. **Custom Cursor**
   - Interactive cursor that changes size and appearance
   - Custom hover effects on buttons and links
   - Subtle blend effects with changing backgrounds

3. **Scroll Reveal Animations**
   - Content reveals as you scroll through the site
   - Direction-based animations (left, right, up, down)
   - Customizable delay, duration, and threshold settings
   - Support for one-time or repeating animations

## How to Customize

### Entrance Animation
To adjust the entrance animation timing or style, edit the `EntranceAnimation.jsx` component. You can customize:
- Animation timing (`setTimeout` values)
- Background colors (gradient colors)
- Text content and styling
- Transition effects

### Custom Cursor
The custom cursor is controlled by the `CustomCursor.jsx` component. Modify:
- Cursor size and appearance
- Hover effects for different elements
- The blend mode and colors

### Scroll Reveal
To use the scroll reveal component on additional content:
```jsx
<ScrollReveal direction="up" delay={0.2}>
  <YourComponent />
</ScrollReveal>
```

Available options:
- `direction`: "up", "down", "left", "right"
- `delay`: Time in seconds before animation starts
- `distance`: How far the element moves during animation
- `duration`: Animation duration
- `once`: Whether to animate only once or repeat when scrolling

## Inspiration
This implementation draws inspiration from creative agency websites like [resn.co.nz](https://resn.co.nz/), creating a memorable first impression for visitors to your portfolio. 