export default function ComplexDashLayout({
  children,
  updates,
  notifications,
  revenues,
}: {
  children: React.ReactNode;
  updates: React.ReactNode;
  notifications: React.ReactNode;
  revenues: React.ReactNode;
}) {

  console.log('children', children);
  console.log('updates', updates);
    
  return (
    <>
      {children}
      <div className="flex border-2">
        <div className="flex-1 flex flex-col">
          {updates}
          {revenues}
        </div>
        <div className="flex-1">
          {notifications}
        </div>
  </div>
    </>
  );
}
