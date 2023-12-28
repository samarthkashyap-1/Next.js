

export default function CardLayout({
  children,
  card
}: {
  children: React.ReactNode;
  card: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>{card}</div>
    </>
  );
}
