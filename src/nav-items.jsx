import { Home, FileQuestion } from "lucide-react";
import Index from "./pages/Index.jsx";
import ScreeningForm from "./pages/ScreeningForm.jsx";
import ThankYou from "./pages/ThankYou.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Dépistage",
    to: "/screening",
    icon: <FileQuestion className="h-4 w-4" />,
    page: <ScreeningForm />,
  },
  {
    title: "Merci",
    to: "/thank-you",
    icon: null,
    page: <ThankYou />,
  },
];