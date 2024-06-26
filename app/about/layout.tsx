export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center m-10 py-8 md:py-10">

        {children}

    </section>
  );
}
