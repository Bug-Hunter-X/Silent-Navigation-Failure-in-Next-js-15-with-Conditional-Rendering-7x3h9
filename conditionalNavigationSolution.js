The solution involves using the `useEffect` hook to ensure the navigation function is called after the component mounts and the router is ready.  The `useEffect` hook with an empty dependency array runs only once after the first render:
```javascript
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function MyComponent({ initialCondition }) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const handleClick = () => {
    if (isReady) {
      router.push('/another-page');
    }
  };

  if (!initialCondition) {
    return <p>Component is not rendered initially.</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>Navigate</button>
    </div>
  );
}

export default MyComponent;
```