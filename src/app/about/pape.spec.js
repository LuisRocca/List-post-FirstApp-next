import { render } from "@testing-library/react";
import { describe } from "node:test";
import React from "react"
import Aspirations from "../components/Aspirations"

// Generated by CodiumAI

describe('About', () => {

       // Tests that the Aspirations component renders a list of aspirations with a sort button
       it('should render a list of aspirations with a sort button', () => {
        render(<Aspirations />);
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Sort/i })).toBeInTheDocument();
      });
  });
  