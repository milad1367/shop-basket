import "./index.scss";

interface LayoutProps {
  children?: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <div className="layout-main">{children}</div>
    </div>
  );
}
