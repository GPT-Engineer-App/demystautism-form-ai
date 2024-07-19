import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ScreeningForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Here you would typically send the data to your backend
    console.log(data);
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    toast.success("Formulaire soumis avec succès!");
    navigate("/thank-you");
  };

  const questions = [
    {
      id: "question1",
      text: "Est-ce que votre enfant vous regarde lorsque vous appelez ?",
      options: ["Toujours", "Habituellement", "Parfois", "Rarement", "Jamais"]
    },
    {
      id: "question2",
      text: "À quel point est-ce facile d'avoir un contact visuel avec votre enfant?",
      options: ["Très facile", "Quelques fois par jour", "Quelques fois par semaine", "Moins d'une fois par semaine", "Jamais"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Formulaire de Dépistage pour DemystAutism</h1>
      <p className="text-center mb-8">Ce formulaire nous aide à évaluer les comportements potentiellement liés à l'autisme chez votre enfant. Veuillez répondre à toutes les questions.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8">
        {questions.map((question, index) => (
          <div key={question.id} className="space-y-4">
            <Label htmlFor={question.id} className="text-lg font-medium">
              {question.text}
            </Label>
            <RadioGroup id={question.id} className="space-y-2">
              {question.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option}
                    id={`${question.id}-${option}`}
                    {...register(question.id, { required: "Cette question est obligatoire" })}
                  />
                  <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            {errors[question.id] && (
              <p className="text-red-500 text-sm">{errors[question.id].message}</p>
            )}
          </div>
        ))}
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Soumission en cours..." : "Soumettre"}
        </Button>
      </form>
    </div>
  );
};

export default ScreeningForm;