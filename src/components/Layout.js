// components/Layout.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedButtons from "@/components/FixedButtons";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      <Header />
      {/* <main className="flex-grow container mx-auto my-8">
      </main> */}
      {children}
      <Footer />
      <FixedButtons className="fixed bottom-4 right-4" />
    </div>
  );
};

export default Layout;