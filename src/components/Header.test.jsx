import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { Header } from "./Header";


describe("Header component", () => {
    it("affiche le titre", () => {

        /** AAA (Arrange, Act, Assert)
         * Arrange: preparer les variables ou les données nécessaires pour le test
         * Act: exécuter la fonction ou le composant à tester
         * Assert: vérifier que le résultat est correct
         */

        // Arrange
        const title = "Taskflow";
        const description = "Gérez vos tâches avec TaskFlow";

        // Act
        render(<Header title={title} description={description} />);

        // Assert 
        expect(screen.getByText(title)).toBeInTheDocument();
    })

    it("affichela description", () => {

        /** AAA (Arrange, Act, Assert)
         * Arrange: preparer les variables ou les données nécessaires pour le test
         * Act: exécuter la fonction ou le composant à tester
         * Assert: vérifier que le résultat est correct
         */

        // Arrange
        const title = "Taskflow";
        const description = "Gérez vos tâches avec TaskFlow";

        // Act
        render(<Header title={title} description={description} />);

        // Assert 
        expect(screen.getByText(description)).toBeInTheDocument();
    })
})