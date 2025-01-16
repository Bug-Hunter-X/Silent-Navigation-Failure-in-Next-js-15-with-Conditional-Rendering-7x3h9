# Silent Navigation Failure in Next.js 15 with Conditional Rendering

This repository demonstrates a subtle bug in Next.js 15 related to client-side navigation (`next/navigation`) within conditionally rendered components.  If the component containing the navigation isn't rendered initially, navigation functions like `router.push` might fail without any errors, leading to unexpected behavior.

The `conditionalNavigationBug.js` file showcases the problematic code.  The solution, provided in `conditionalNavigationSolution.js`, uses `useEffect` to ensure navigation functions are called only after the component has mounted and the router is ready.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the initial behavior (navigation failure).
5. Observe the corrected behavior after applying the solution.