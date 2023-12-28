
const getRabdomNumber = () => Math.floor(Math.random() * 2);
export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
     const random = getRabdomNumber();
     if (random === 0) {
       throw new Error("Something went wrong");
     }
  return (
    <>
      <h1>Reviews</h1>
      {children}
    </>
  );
}
