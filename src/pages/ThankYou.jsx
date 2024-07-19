import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Merci pour votre participation!</h1>
      <p className="mb-8">Votre formulaire a été soumis avec succès. Nous vous contacterons bientôt avec les résultats.</p>
      <Button asChild>
        <Link to="/">Retour à l'accueil</Link>
      </Button>
    </div>
  );
};

export default ThankYou;