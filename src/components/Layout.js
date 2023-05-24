export default function Layout({ children }) {
  return (
    <>
      <div className="content">
        <main>{children}</main>
      </div>
    </>
  );
}
