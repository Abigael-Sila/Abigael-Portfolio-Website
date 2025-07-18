import { useEffect, useState } from 'react';

const VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    const newCount = currentCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setVisitorCount(newCount);
  }, []);

  return (
    <div className="text-center text-sm text-gray-400">
      Visitors: {visitorCount}
    </div>
  );
};

export default VisitorCounter;